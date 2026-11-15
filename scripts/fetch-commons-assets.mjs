import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';

const outputDir = new URL('../assets/images/', import.meta.url);
const dataDir = new URL('../data/', import.meta.url);

const assets = [
  ['portrait-ando', 'File:Tadao Ando 2004'],
  ['ando-2121', 'File:21 21 DESIGN SIGHT Tokyo'],
  ['ando-punta', 'File:Punta della Dogana Venice'],
  ['ando-hill-buddha', 'File:Hill of the Buddha Tadao Ando'],

  ['portrait-kuma', 'File:Kengo Kuma architect portrait'],
  ['kuma-asakusa', 'File:Asakusa Culture Tourist Information Center'],
  ['kuma-stadium', 'File:Japan National Stadium Tokyo 2020'],
  ['kuma-va', 'File:V&A Dundee'],

  ['portrait-sanaa', 'File:Kazuyo Sejima Ryue Nishizawa portrait'],
  ['sanaa-new-museum', 'File:New Museum New York SANAA'],
  ['sanaa-rolex', 'File:Rolex Learning Center Lausanne'],
  ['sanaa-louvre', 'File:Louvre Lens museum'],

  ['portrait-ban', 'File:Shigeru Ban portrait'],
  ['ban-pompidou', 'File:Centre Pompidou Metz'],
  ['ban-cardboard', 'File:Cardboard Cathedral Christchurch'],
  ['ban-fuji', 'File:Mt Fuji World Heritage Centre Shigeru Ban'],

  ['portrait-fujimoto', 'File:Sou Fujimoto portrait'],
  ['fujimoto-house-na', 'File:House NA Sou Fujimoto'],
  ['fujimoto-serpentine', 'File:Serpentine Pavilion 2013 Sou Fujimoto'],
  ['fujimoto-arbre', 'File:Arbre Blanc Montpellier Sou Fujimoto'],

  ['portrait-ito', 'File:Toyo Ito portrait'],
  ['ito-tama', 'File:Tama Art University Library Hachioji'],
  ['ito-kaohsiung', 'File:Kaohsiung National Stadium Toyo Ito'],
  ['ito-taichung', 'File:National Taichung Theater Toyo Ito'],
];

function clean(value = '') {
  return value.replace(/<[^>]+>/g, '').replace(/&amp;/g, '&').trim();
}

async function searchCommons(query) {
  const params = new URLSearchParams({
    action: 'query',
    generator: 'search',
    gsrsearch: query,
    gsrnamespace: '6',
    gsrlimit: '8',
    prop: 'imageinfo',
    iiprop: 'url|extmetadata|mime',
    iiurlwidth: '1280',
    format: 'json',
    origin: '*',
  });
  const response = await fetch(`https://commons.wikimedia.org/w/api.php?${params}`);
  if (!response.ok) throw new Error(`Search failed: ${response.status}`);
  const data = await response.json();
  const pages = Object.values(data.query?.pages ?? {}).sort((a, b) => (a.index ?? 99) - (b.index ?? 99));
  return pages.find((page) => {
    const info = page.imageinfo?.[0];
    return info?.thumburl && /^image\/(jpeg|png|webp)$/i.test(info.mime ?? '');
  });
}

await mkdir(outputDir, { recursive: true });
await mkdir(dataDir, { recursive: true });
const credits = [];

for (const [slug, query] of assets) {
  const page = await searchCommons(query);
  if (!page) {
    console.warn(`MISS ${slug}: ${query}`);
    continue;
  }
  const info = page.imageinfo[0];
  const extension = info.mime === 'image/png' ? 'png' : info.mime === 'image/webp' ? 'webp' : 'jpg';
  const targetUrl = new URL(`${slug}.${extension}`, outputDir);
  const imageResponse = await fetch(info.thumburl);
  if (!imageResponse.ok) throw new Error(`Download failed ${slug}: ${imageResponse.status}`);
  await writeFile(targetUrl, Buffer.from(await imageResponse.arrayBuffer()));
  const meta = info.extmetadata ?? {};
  credits.push({
    slug,
    file: `assets/images/${slug}.${extension}`,
    title: page.title.replace(/^File:/, ''),
    creator: clean(meta.Artist?.value || 'Wikimedia Commons contributor'),
    license: meta.LicenseShortName?.value || meta.UsageTerms?.value || 'See source',
    licenseUrl: meta.LicenseUrl?.value || '',
    source: info.descriptionurl,
    description: clean(meta.ImageDescription?.value || ''),
  });
  console.log(`OK ${slug} <- ${page.title}`);
}

await writeFile(new URL('credits.json', dataDir), JSON.stringify(credits, null, 2));
console.log(`Saved ${credits.length}/${assets.length} assets.`);
