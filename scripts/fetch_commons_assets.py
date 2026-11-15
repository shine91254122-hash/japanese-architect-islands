#!/usr/bin/env python3
import html
import json
import mimetypes
import re
import time
import urllib.parse
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / "assets" / "images"
DATA = ROOT / "data"

ASSETS = [
    ("portrait-ando", "File:Tadao Ando 2004.jpg"),
    ("ando-2121", "File:21 21 DESIGN SIGHT.jpg"),
    ("ando-punta", "File:Venezia - Punta della Dogana - 2024-09-24 07-52-02 001.jpg"),
    ("portrait-kuma", "File:Kengo Kuma 2009.jpg"),
    ("kuma-asakusa", "File:Asakusa Culture Tourist Information Center dllu.jpg"),
    ("kuma-va", "File:V&A Dundee during opening week.jpg"),
    ("portrait-sanaa", "File:Kazuyo Sejima mg 4971-square.jpg"),
    ("sanaa-new-museum", "File:The New Museum.jpg"),
    ("sanaa-rolex", "File:Rolex Learning Center.jpg"),
    ("portrait-ban", "File:Shigeru Ban.jpg"),
    ("ban-pompidou", "File:Centre Pompidou-Metz (54123950529).jpg"),
    ("ban-cardboard", "File:Cardboard Cathedral, Christchurch, New Zealand.jpg"),
    ("portrait-fujimoto", "File:Sou Fujimoto 2009.jpg"),
    ("fujimoto-house-na", "File:House NA.jpg"),
    ("fujimoto-arbre", "File:ArbreBlanc2.jpg"),
    ("portrait-ito", "File:Toyo Ito 2009.jpg"),
    ("ito-tama", "File:Tama Art University (Hachioji Library).jpg"),
    ("ito-taichung", "File:National Taichung Theater 2019.jpg"),
]

HEADERS = {"User-Agent": "ArchitectIslandsOffline/1.0 (educational local project)"}


def get_json(url):
    for attempt in range(5):
        try:
            request = urllib.request.Request(url, headers=HEADERS)
            with urllib.request.urlopen(request, timeout=40) as response:
                return json.load(response)
        except Exception:
            if attempt == 4:
                raise
            time.sleep(5 + attempt * 4)


def get_bytes(url):
    for attempt in range(5):
        try:
            request = urllib.request.Request(url, headers=HEADERS)
            with urllib.request.urlopen(request, timeout=60) as response:
                return response.read()
        except Exception:
            if attempt == 4:
                raise
            time.sleep(5 + attempt * 4)


def clean(value=""):
    return html.unescape(re.sub(r"<[^>]+>", "", value)).strip()


OUT.mkdir(parents=True, exist_ok=True)
DATA.mkdir(parents=True, exist_ok=True)
credits = []

for slug, title in ASSETS:
    params = urllib.parse.urlencode({
        "action": "query",
        "titles": title,
        "prop": "imageinfo",
        "iiprop": "url|extmetadata|mime",
        "iiurlwidth": 1280,
        "format": "json",
        "origin": "*",
    })
    data = get_json(f"https://commons.wikimedia.org/w/api.php?{params}")
    pages = list(data.get("query", {}).get("pages", {}).values())
    page = next((p for p in pages if p.get("imageinfo")), None)
    if not page:
        print(f"MISS {slug}: {title}")
        continue
    info = page["imageinfo"][0]
    ext = {"image/png": "png", "image/webp": "webp"}.get(info.get("mime"), "jpg")
    target = OUT / f"{slug}.{ext}"
    target.write_bytes(get_bytes(info["thumburl"]))
    meta = info.get("extmetadata", {})
    credits.append({
        "slug": slug,
        "file": f"assets/images/{target.name}",
        "title": page["title"].removeprefix("File:"),
        "creator": clean(meta.get("Artist", {}).get("value", "Wikimedia Commons contributor")),
        "license": meta.get("LicenseShortName", {}).get("value") or meta.get("UsageTerms", {}).get("value") or "See source",
        "licenseUrl": meta.get("LicenseUrl", {}).get("value", ""),
        "source": info.get("descriptionurl", ""),
        "description": clean(meta.get("ImageDescription", {}).get("value", "")),
    })
    (DATA / "credits.json").write_text(json.dumps(credits, ensure_ascii=False, indent=2), encoding="utf-8")
    print(f"OK {slug} <- {page['title']}")
    time.sleep(2.2)

(DATA / "credits.json").write_text(json.dumps(credits, ensure_ascii=False, indent=2), encoding="utf-8")
print(f"Saved {len(credits)}/{len(ASSETS)} assets.")
