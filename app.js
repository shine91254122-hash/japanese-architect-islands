const architects = [
  {
    id: 'ando', number: '01', name: '安藤忠雄', roman: 'TADAO ANDO', born: '1941・大阪', accent: '#b95f49', bg: '#e7ddd1',
    position: [18, 38], themes: ['material'], tags: ['清水混凝土', '光', '幾何'], portrait: 'assets/images/portrait-ando.jpg',
    quote: '建築不是用來封閉自然，而是讓人重新意識到光、風與時間。',
    bio: '出生於大阪，自學走進建築世界。青年時曾是職業拳擊手，之後以旅行觀察歐洲、非洲與亞洲的城市和建築。1969 年成立安藤忠雄建築研究所，以細緻的清水混凝土、強烈幾何與被切割的自然光，建立出極具辨識度的空間語言。',
    timeline: [['1941', '出生於大阪；在長屋與工匠文化中長大。'], ['1960s', '以旅行、閱讀與現場測繪自學建築。'], ['1969', '成立安藤忠雄建築研究所。'], ['1995', '獲普立茲克建築獎，並將獎金捐助阪神震災孤兒。']],
    projects: [
      { year: '2007', place: '東京・六本木', name: '21_21 DESIGN SIGHT', image: 'assets/images/ando-2121.jpg', text: '與設計師三宅一生共同思考的設計文化基地。低伏於地面的鋼板屋頂像一塊摺起的布，把大部分展覽空間藏進地下，讓城市仍保有開放的地景。' },
      { year: '2009', place: '義大利・威尼斯', name: 'Punta della Dogana', image: 'assets/images/ando-punta.jpg', text: '將 17 世紀海關倉庫改造成當代藝術館。既有磚牆、木桁架與新置入的混凝土方盒並存，修復並不抹去時間，而讓新舊材料彼此照亮。' },
      { year: '2013', place: '台灣・台中', name: '亞洲大學現代美術館', image: 'assets/images/ando-asia-museum.jpg', text: '安藤忠雄在台灣的第一座建築。以正三角形為基本幾何，三層樓板彼此錯動，柱列、清水混凝土與大片玻璃共同構成不斷變化的光影序列。' },
    ],
  },
  {
    id: 'kuma', number: '02', name: '隈研吾', roman: 'KENGO KUMA', born: '1954・橫濱', accent: '#9b713d', bg: '#e9dfca',
    position: [49, 31], themes: ['material', 'nature'], tags: ['木構', '粒子', '地方工藝'], portrait: 'assets/images/portrait-kuma.jpg',
    quote: '建築不必成為強勢物件，它可以像粒子一樣，與環境互相滲透。',
    bio: '出生於橫濱，1979 年畢業於東京大學。經歷哥倫比亞大學研究與早期的後現代實驗後，1990 年成立隈研吾建築都市設計事務所。他以「負建築」反省巨大、封閉的物件，轉向木材、石材、織物等小尺度單元，串聯在地技術與當代製造。',
    timeline: [['1954', '出生於橫濱。'], ['1979', '東京大學建築系研究所畢業。'], ['1990', '成立隈研吾建築都市設計事務所。'], ['2009—20', '任東京大學教授，持續推動材料與地方研究。']],
    projects: [
      { year: '2012', place: '東京・淺草', name: '淺草文化觀光中心', image: 'assets/images/kuma-asakusa.jpg', text: '把數棟不同斜屋頂的小房子垂直堆疊，回應淺草街區的尺度。木百葉調節陽光與視線，讓高樓不再只是抽象玻璃盒。' },
      { year: '2018', place: '英國・丹地', name: 'V&A Dundee', image: 'assets/images/kuma-va.jpg', text: '臨水的層疊量體取材自蘇格蘭東岸峭壁。預鑄板如水平地層包覆建築，中間的洞口把城市重新引向泰河。' },
      { year: '2018', place: '台灣・花蓮', name: '星巴克洄瀾門市', image: 'assets/images/kuma-hualien.jpg', text: '以 29 個白色貨櫃錯落堆疊，創造縫隙、挑空與觀景座位。工業化單元在排列後形成類似樹枝的空間，也回應花蓮港口城市的物流記憶。' },
    ],
  },
  {
    id: 'sanaa', number: '03', name: '妹島和世', roman: 'KAZUYO SEJIMA / SANAA', born: '1956・茨城', accent: '#6e8d86', bg: '#dce7e3',
    position: [79, 39], themes: ['community'], tags: ['輕盈', '透明', '連續地景'], portrait: 'assets/images/portrait-sanaa.jpg',
    quote: '空間可以沒有強迫性的中心，讓每個人找到自己的距離與關係。',
    bio: '出生於茨城縣，畢業於日本女子大學，曾進入伊東豊雄事務所。1987 年獨立，1995 年與西澤立衛成立 SANAA。她的建築常以薄、白、透明與非中心式平面，消解房間、走廊與戶外的界線；2010 年兩人共同獲普立茲克建築獎。',
    timeline: [['1956', '出生於茨城縣。'], ['1981', '完成日本女子大學建築碩士，加入伊東豊雄事務所。'], ['1987', '成立個人事務所。'], ['1995', '與西澤立衛成立 SANAA。'], ['2010', '與西澤立衛共同獲普立茲克建築獎。']],
    projects: [
      { year: '2007', place: '美國・紐約', name: 'New Museum', image: 'assets/images/sanaa-new-museum.jpg', text: '七個偏移堆疊的白色盒子，在緊窄基地中創造天窗、露台與不同尺度的展廳。金屬網皮膚讓龐大量體保有朦朧、暫時的輕感。' },
      { year: '2010', place: '瑞士・洛桑', name: 'Rolex Learning Center', image: 'assets/images/sanaa-rolex.jpg', text: '一片起伏的連續樓板容納圖書館、餐廳與學習空間。中庭像穿孔的湖泊，坡地取代牆與樓層，讓行走自然生成相遇。' },
      { year: '2025', place: '台灣・台中', name: '臺中綠美圖', image: 'assets/images/sanaa-taichung.jpg', text: 'SANAA 與劉培森建築師事務所合作，將市立美術館與市立圖書館整合為八個彼此連通的量體。銀白擴張網、玻璃與架空層讓光、風和公園穿過建築。' },
    ],
  },
  {
    id: 'ban', number: '04', name: '坂茂', roman: 'SHIGERU BAN', born: '1957・東京', accent: '#b47652', bg: '#ead9cb',
    position: [17, 66], themes: ['material', 'community'], tags: ['紙管', '災後建築', '木構'], portrait: 'assets/images/portrait-ban.jpg',
    quote: '建築的永久或臨時，不由材料決定，而由人是否珍惜它決定。',
    bio: '出生於東京，先後就讀南加州建築學院與 Cooper Union，深受 John Hejduk 影響。1985 年成立事務所，長期研究紙管、木與可回收構件。1995 年起透過志工建築家網絡投入盧安達、神戶、土耳其、四川與東日本的災後支援。',
    timeline: [['1957', '出生於東京。'], ['1984', '畢業於紐約 Cooper Union。'], ['1985', '成立坂茂建築設計。'], ['1995', '成立志工建築家網絡 VAN，投入災後住居。'], ['2014', '獲普立茲克建築獎。']],
    projects: [
      { year: '2010', place: '法國・梅斯', name: 'Centre Pompidou-Metz', image: 'assets/images/ban-pompidou.jpg', text: '以中國竹編帽為靈感的六角木構網格，撐起大尺度白色薄膜屋頂。三條長形展廊朝城市地標伸出，把博物館變成公共傘棚。' },
      { year: '2013', place: '紐西蘭・基督城', name: 'Cardboard Cathedral', image: 'assets/images/ban-cardboard.jpg', text: '地震後的臨時主教座堂使用紙管、貨櫃與聚碳酸酯組成。材料可取得、可替換，也讓一座暫時建築成為城市重建的精神支點。' },
      { year: '2019', place: '台灣・台南', name: '臺南市美術館二館', image: 'assets/images/ban-tainan.jpg', text: '坂茂與石昭永建築師共同設計。五角形量體回應基地街廓，碎形般的白色屋頂在南台灣烈日下形成大片遮蔭，也把戶外廣場納入美術館生活。' },
    ],
  },
  {
    id: 'fujimoto', number: '05', name: '藤本壯介', roman: 'SOU FUJIMOTO', born: '1971・北海道', accent: '#68855e', bg: '#dce3cf',
    position: [50, 64], themes: ['nature', 'community'], tags: ['原始的未來', '多孔空間', '居住'], portrait: 'assets/images/portrait-fujimoto.jpg',
    quote: '森林與城市、房子與街道之間，也許不是二選一，而是一連串細微的漸層。',
    bio: '出生於北海道，1994 年畢業於東京大學，2000 年成立個人事務所。成長記憶中的北海道森林，使他持續尋找秩序與偶然、人工與自然之間的中間狀態。他稱之為「原始的未來」：回到居住的起點，重新發明尚未被命名的空間。',
    timeline: [['1971', '出生於北海道。'], ['1994', '東京大學工學部建築學科畢業。'], ['2000', '成立藤本壯介建築設計事務所。'], ['2013', '設計倫敦蛇形藝廊展亭，國際能見度大增。'], ['2025', '擔任大阪・關西萬博會場設計總監。']],
    projects: [
      { year: '2011', place: '東京', name: 'House NA', image: 'assets/images/fujimoto-house-na.jpg', text: '一座由 21 片樓板組成的透明住宅。樓板像樹枝般錯落，家具、樓梯與房間的定義變得流動，居住如同在城市森林中尋找棲位。' },
      { year: '2019', place: '法國・蒙彼利埃', name: "L’Arbre Blanc", image: 'assets/images/fujimoto-arbre.jpg', text: '白色住宅塔伸出大量深陽台，像一棵向陽展枝的樹。外部生活空間回應地中海氣候，也讓高層集合住宅保有個別的戶外領域。' },
      { year: '2022', place: '台灣・台南', name: '南埕衖事', image: 'assets/images/fujimoto-tainan.jpg', text: '把台南巷弄轉化為八層樓的立體路徑。白色「衖梯」以平台、岔路與半戶外空間模糊街道和建築的邊界，讓行走本身成為探索城市的展演。' },
    ],
  },
  {
    id: 'ito', number: '06', name: '伊東豊雄', roman: 'TOYO ITO', born: '1941・京城', accent: '#6d7e91', bg: '#dbe2e8',
    position: [80, 66], themes: ['nature', 'community'], tags: ['流動', '結構表皮', '公共性'], portrait: 'assets/images/portrait-ito.jpg',
    quote: '建築應像自然中的漩渦：不是固定的物體，而是流動力量暫時形成的形。',
    bio: '1941 年生於日治時期的京城，青少年時移居東京。1965 年畢業於東京大學後進入菊竹清訓事務所，1971 年成立 Urban Robot，1979 年更名為伊東豊雄建築設計事務所。他不斷鬆動現代建築的均質網格，讓結構、表皮與人流形成有機連續體。',
    timeline: [['1941', '出生於京城，後於長野與東京成長。'], ['1965', '東京大學畢業，進入菊竹清訓事務所。'], ['1971', '成立 Urban Robot（URBOT）。'], ['1979', '更名為伊東豊雄建築設計事務所。'], ['2013', '獲普立茲克建築獎。']],
    projects: [
      { year: '2007', place: '東京・八王子', name: '多摩美術大學圖書館', image: 'assets/images/ito-tama.jpg', text: '連續的鋼筋混凝土拱跨越傾斜地面，書架與閱讀空間自由穿梭其中。結構既是秩序，也是像洞窟與林蔭般的背景。' },
      { year: '2016', place: '台灣・台中', name: '臺中國家歌劇院', image: 'assets/images/ito-taichung.jpg', text: '以「聲音洞窟」為概念，曲面牆體連續生成室內與外部。複雜的三維曲面同時是空間、結構與聲學介面，讓劇場像一個被流動穿透的器官。' },
      { year: '2015', place: '日本・岐阜', name: '大家的森林 岐阜媒體中心', image: 'assets/images/ito-gifu.jpg', text: '以圖書館為核心的公共複合設施。巨大木格柵屋頂下懸掛十一座漏斗狀「傘」，柔化日光並組織各個閱讀領域，像在森林樹冠下自由停留。' },
    ],
  },
];

const photoCredits = [
  ['安藤忠雄肖像', 'Christopher Schriner', 'CC BY-SA 2.0'], ['21_21 DESIGN SIGHT', 'Wiiii', 'CC BY-SA'], ['Punta della Dogana', 'Wikimedia contributor', 'CC'],
  ['隈研吾肖像', 'Jerome Tobias', 'CC BY 2.0'], ['淺草文化觀光中心', 'Daniel L. Lu', 'CC BY-SA 4.0'], ['V&A Dundee', 'DiscDepotDundee.co.uk', 'CC BY-SA 4.0'],
  ['妹島和世肖像', 'Wikimedia contributor', 'CC'], ['New Museum', 'Kidfly182', 'CC BY-SA 4.0'], ['Rolex Learning Center', 'Philippe', 'CC BY-SA 4.0'],
  ['坂茂肖像', '準建築人手札網站', 'CC BY 2.0'], ['Centre Pompidou-Metz', 'Thomas Roessler', '詳見來源'], ['Cardboard Cathedral', 'Podzemnik', 'CC BY-SA 4.0'],
  ['藤本壯介肖像', 'Jerome Tobias', 'CC BY 2.0'], ['House NA', 'Wikimedia contributor', 'CC BY 2.0'], ["L’Arbre Blanc", 'Bruno Barral', 'CC BY-SA 4.0'],
  ['伊東豊雄肖像', 'Jerome Tobias', 'CC BY 2.0'], ['多摩美術大學圖書館', 'Eric Mathias', 'CC BY-SA 3.0'], ['臺中國家歌劇院', 'Nico Kaiser', 'CC BY 2.0'],
  ['亞洲大學現代美術館', 'Fcuk1203', 'CC BY-SA 3.0'], ['星巴克洄瀾門市', 'LowensteinYang', 'CC BY-SA 4.0'],
  ['臺中綠美圖', 'brian25_tw', 'CC BY-SA 4.0'], ['臺南市美術館二館', 'Sekidoki', 'Wikimedia Commons 授權'],
  ['南埕衖事', '南埕衖事官方網站', '官方宣傳照片・教育展示'], ['大家的森林 岐阜媒體中心', 'Asturio Cantabrio', 'CC BY-SA 4.0'],
];

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
const hotspots = $('#hotspots');
const list = $('#architect-list');
const detailDialog = $('#detail-dialog');
const detailContent = $('#detail-content');
const stage = $('.stage');
const introDialog = $('#intro-dialog');
const creditsDialog = $('#credits-dialog');

function renderNavigation() {
  hotspots.innerHTML = architects.map(a => `
    <button class="hotspot" type="button" data-id="${a.id}" style="left:${a.position[0]}%;top:${a.position[1]}%;--accent:${a.accent}" aria-label="登上${a.name}島">
      <span class="hotspot-number">${a.number}</span><span class="hotspot-text">${a.name}</span>
    </button>`).join('');

  list.innerHTML = architects.map(a => `
    <button class="architect-item" type="button" role="listitem" data-id="${a.id}" data-themes="${a.themes.join(' ')}" data-search="${[a.name, a.roman, a.tags.join(' '), a.projects.map(p => p.name).join(' ')].join(' ').toLowerCase()}" style="--accent:${a.accent}">
      <span class="architect-num">${a.number}</span>
      <span><span class="architect-name">${a.name}</span><span class="architect-meta">${a.roman}・${a.projects.length} 個案例</span></span>
      <span class="architect-arrow">↗</span>
    </button>`).join('');

  $$('[data-id]').forEach(button => button.addEventListener('click', () => openArchitect(button.dataset.id)));
}

function openArchitect(id) {
  const a = architects.find(item => item.id === id);
  if (!a) return;
  detailDialog.style.setProperty('--architect-accent', a.accent);
  detailDialog.style.setProperty('--architect-bg', a.bg);
  detailContent.innerHTML = `
    <article>
      <header class="detail-hero">
        <div class="portrait-wrap">
          <img src="${a.portrait}" alt="${a.name}肖像">
          <span class="portrait-caption">PORTRAIT / WIKIMEDIA COMMONS</span>
        </div>
        <div class="detail-intro">
          <span class="detail-index">${a.number}</span>
          <h2 id="detail-name">${a.name}</h2>
          <p class="roman-name">${a.roman}・${a.born}</p>
          <blockquote class="quote">${a.quote}</blockquote>
          <div class="tag-row">${a.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}</div>
        </div>
      </header>
      <div class="detail-body">
        <section class="bio-grid" aria-label="${a.name}生平">
          <div><p class="section-label">LIFE & PRACTICE</p><p class="bio-copy">${a.bio}</p></div>
          <ol class="timeline">${a.timeline.map(([year, text]) => `<li><time>${year}</time><span>${text}</span></li>`).join('')}</ol>
        </section>
        <section aria-label="${a.name}代表作品">
          <div class="projects-head"><div><p class="section-label">SELECTED WORKS</p><h3>島上的建築</h3></div><p>把滑鼠停在照片上，看看建築如何從一個想法，長成一種空間經驗。</p></div>
          <div class="project-grid">${a.projects.map(p => `
            <article class="project-card">
              <div class="project-image"><img src="${p.image}" alt="${p.name}建築照片" loading="lazy"><span class="project-year">${p.year}</span></div>
              <div class="project-copy"><p class="project-kicker">${p.place}</p><h4>${p.name}</h4><p>${p.text}</p></div>
            </article>`).join('')}</div>
        </section>
      </div>
    </article>`;
  detailDialog.showModal();
  $('#log-text').textContent = `已登上 ${a.name}島：${a.tags.join('、')}。`;
}

function applyFilters() {
  const term = $('#search').value.trim().toLowerCase();
  const filter = $('.filter-chip.active')?.dataset.filter || 'all';
  let visible = 0;
  $$('.architect-item').forEach(item => {
    const matchesText = !term || item.dataset.search.includes(term);
    const matchesFilter = filter === 'all' || item.dataset.themes.split(' ').includes(filter);
    item.classList.toggle('hidden', !(matchesText && matchesFilter));
    if (matchesText && matchesFilter) visible += 1;
  });
  $('.empty-state')?.remove();
  if (!visible) list.insertAdjacentHTML('beforeend', '<p class="empty-state">這片海域沒有符合的島，再換個關鍵字看看。</p>');
}

function renderCredits() {
  $('#credits-list').innerHTML = photoCredits.map(([title, creator, license]) => `
    <div class="credit-entry"><b>${title}</b><br>${creator}・${license}・<a href="https://commons.wikimedia.org/" target="_blank" rel="noreferrer">Wikimedia Commons</a></div>`).join('');
}

renderNavigation();
renderCredits();

$('#detail-close').addEventListener('click', () => detailDialog.close());
$('#credits-close').addEventListener('click', () => creditsDialog.close());
$('#credits-button').addEventListener('click', () => creditsDialog.showModal());
$('#guide-button').addEventListener('click', () => introDialog.showModal());
$('#intro-skip').addEventListener('click', () => { introDialog.close(); localStorage.setItem('architect-islands-intro', 'seen'); });
$('#intro-start').addEventListener('click', () => { introDialog.close(); localStorage.setItem('architect-islands-intro', 'seen'); document.querySelector('.hotspot')?.focus(); });

$('#search').addEventListener('input', applyFilters);
$$('.filter-chip').forEach(chip => chip.addEventListener('click', () => {
  $$('.filter-chip').forEach(c => c.classList.toggle('active', c === chip));
  applyFilters();
}));

$$('[data-light]').forEach(button => button.addEventListener('click', () => {
  $$('[data-light]').forEach(item => { item.classList.toggle('active', item === button); item.setAttribute('aria-pressed', String(item === button)); });
  stage.classList.toggle('dusk', button.dataset.light === 'dusk');
  $('#log-text').textContent = button.dataset.light === 'dusk' ? '黃昏落在海面上，島嶼的燈慢慢亮了。' : '清晨的渡輪正駛向混凝土之島。';
}));

$('#labels-toggle').addEventListener('click', event => {
  const pressed = event.currentTarget.getAttribute('aria-pressed') === 'true';
  event.currentTarget.setAttribute('aria-pressed', String(!pressed));
  stage.classList.toggle('labels-hidden', pressed);
});

$('#motion-toggle').addEventListener('click', event => {
  const pressed = event.currentTarget.getAttribute('aria-pressed') === 'true';
  event.currentTarget.setAttribute('aria-pressed', String(!pressed));
  document.body.classList.toggle('motion-paused', !pressed);
  event.currentTarget.querySelector('small').textContent = pressed ? '暫停' : '播放';
});

$('#home-button').addEventListener('click', () => {
  detailDialog.open && detailDialog.close();
  window.scrollTo({ top: 0, behavior: 'smooth' });
  $('.world-image').animate([{ transform: 'scale(1.08)' }, { transform: 'scale(1.035)' }], { duration: 700, easing: 'ease-out' });
});

$('#list-button').addEventListener('click', () => {
  if (window.innerWidth <= 760) $('#sidebar').scrollIntoView({ behavior: 'smooth' });
  else $('#search').focus();
});

[detailDialog, creditsDialog, introDialog].forEach(dialog => dialog.addEventListener('click', event => {
  const box = dialog.getBoundingClientRect();
  if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) dialog.close();
}));

window.addEventListener('keydown', event => {
  if (event.key.toLowerCase() === 'f' && !['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) { event.preventDefault(); $('#search').focus(); }
});

try {
  if (!localStorage.getItem('architect-islands-intro')) setTimeout(() => introDialog.showModal(), 420);
} catch { setTimeout(() => introDialog.showModal(), 420); }
