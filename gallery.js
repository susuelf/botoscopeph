/* ─────────────────────────────────────────────────────────────
   CLOUDINARY GALÉRIA KONFIGURÁCIÓ
   ─────────────────────────────────────────────────────────────
   1. Hozz létre egy ingyenes fiókot: https://cloudinary.com
   2. A Cloud Name megjelenik a Dashboard-on — írd be ide:
   3. Töltsd fel a képeket a Cloudinary Media Library-be,
      mappastruktúrával: portre/, esemeny/, taj/
   4. Az id mező = a Cloudinary-n látható "Public ID"
      (pl. "portre/portre-1" ha a portre mappába töltötted fel
       "portre-1" névvel — kiterjesztés nélkül)
   ─────────────────────────────────────────────────────────────
   Ha új képet adsz hozzá: csak adj egy új sort a GALLERY tömbhöz,
   majd push-old GitHub-ra. Kész!
   ───────────────────────────────────────────────────────────── */

const CLOUD = 'dchgtjqbr';

/* ─────────────────────────────────────────────────────────────
   OLDAL KÉPEK (favicon, hero háttér, rólam fotó)
   id = Cloudinary Public ID, kiterjesztés nélkül
   ───────────────────────────────────────────────────────────── */
const SITE = {
  favicon: 'favicon_kehgty',  // favicon Public ID-je Cloudinary-n
  logo:    'logo-mark_xk7x1d',       // logó (nav, hero, footer)
  hero:    'taj-4_cpq5ta',    // hero szekció háttérképe
  about:   'self_jpntqy',     // Rólam szekció fotója
};

const GALLERY = [
  /* ── Portré ── */
  { id: 'portre-1_vy6ily',                   cat: 'portrait',  alt: 'Portré 1' },
  { id: 'portre-2_fnnvzu',                   cat: 'portrait',  alt: 'Portré 2' },
  { id: 'portre-3_qcstpt',                   cat: 'portrait',  alt: 'Portré 3' },
  { id: 'portre-4_ibqajr',                   cat: 'portrait',  alt: 'Portré 4' },
  { id: 'portre-5_yqumzt',                   cat: 'portrait',  alt: 'Portré 5' },
  { id: 'szureti_bal_gif_2025-55_halybo',    cat: 'portrait',  alt: 'Portré 6' },
  { id: 'fius-bekas-29_coxgo6',              cat: 'portrait',  alt: 'Portré 7' },
  { id: 'kozseg_unnepe_2025_07-75_u9mjku',   cat: 'portrait',  alt: 'Portré 8' },
  { id: 'IMG_131-Enhanced-NR_ldoznf',        cat: 'portrait',  alt: 'Portré 9' },
  { id: 'gyt-32_vjo2b4',                     cat: 'portrait',  alt: 'Portré 10' },

  /* ── Esemény ── */
  { id: 'event-1_x4nj40',                    cat: 'wedding',   alt: 'Esemény 1' },
  { id: 'event-2_gwmt26',                    cat: 'wedding',   alt: 'Esemény 2' },
  { id: 'event-3_oiryqn',                    cat: 'wedding',   alt: 'Esemény 3' },
  { id: 'event-4_jm1nsm',                    cat: 'wedding',   alt: 'Esemény 4' },
  { id: 'event-5_qaxkct',                    cat: 'wedding',   alt: 'Esemény 5' },
  { id: 'kozseg_unnepe_2025_07-164_mibgt4',  cat: 'wedding',   alt: 'Esemény 6' },
  { id: 'szureti_bal_gif_2025-2_z4ysnv',     cat: 'wedding',   alt: 'Esemény 7' },
  { id: 'nemzeti-4_qxnucv',                  cat: 'wedding',   alt: 'Esemény 8' },
  { id: 'kozseg_unnepe_2025_07-174_h90mc0',  cat: 'wedding',   alt: 'Esemény 9' },
  { id: 'szureti_bal_gif_2025-67_kkbpac',    cat: 'wedding',   alt: 'Esemény 10' },
  { id: 'nemzeti-2_muukjm',                  cat: 'wedding',   alt: 'Esemény 11' },
  { id: 'szureti_bal_gif_2025-137_egr3vc',   cat: 'wedding',   alt: 'Esemény 12' },
  { id: 'konfirmalas-76_zd0rrq',             cat: 'wedding',   alt: 'Esemény 13' },

  /* ── Táj & Természet ── */
  { id: 'taj-1_rssgpu',                      cat: 'landscape', alt: 'Táj 1' },
  { id: 'taj-2_htfqrd',                      cat: 'landscape', alt: 'Táj 2' },
  { id: 'taj-3_o7q5qw',                      cat: 'landscape', alt: 'Táj 3' },
  { id: 'taj-4_cpq5ta',                      cat: 'landscape', alt: 'Táj 4' },
  { id: 'taj-5_coiwyf',                      cat: 'landscape', alt: 'Táj 5' },
  { id: 'Gyimes_2025-10_idbku6',             cat: 'landscape', alt: 'Táj 6' },
  { id: 'bekasi_szoros-14_jknpxh',           cat: 'landscape', alt: 'Táj 7' },
  { id: 'Bekasi_2025-3_qxvyse',              cat: 'landscape', alt: 'Táj 8' },
  { id: 'Bekasi_2025-5_uudjar',              cat: 'landscape', alt: 'Táj 9' },
  { id: 'kari_2025-122_vacbxo',              cat: 'landscape', alt: 'Táj 10' },
  { id: 'mvh-1-3_wf5l4u',                   cat: 'landscape', alt: 'Táj 11' },
];

/* ── Kategória címkék + akcentus színek (hover felirat) ──────── */
const CATS = {
  portrait:  { label: 'Portré',          color: '#6a8fad' },
  wedding:   { label: 'Esemény',         color: '#a87b4d' },
  landscape: { label: 'Táj & Természet', color: '#5f7f5f' },
};

/* ── URL segédfüggvények ─────────────────────────────────────── */
const BASE = `https://res.cloudinary.com/${CLOUD}/image/upload`;

function imgUrl(id, w) {
  // c_scale: megtartja az eredeti képarányt, nem vágja körbe
  return `${BASE}/f_auto,q_auto,w_${w},c_scale/${id}`;
}
function lqipUrl(id) {
  // pici, elmosott előnézet (blur-up)
  return `${BASE}/f_auto,q_auto:low,w_32,e_blur:800,c_scale/${id}`;
}
function fullUrl(id) {
  return `${BASE}/f_auto,q_auto,w_1920/${id}`;
}

/* ── Galéria renderelés ──────────────────────────────────────── */
(function renderGallery() {
  const grid = document.getElementById('galGrid');
  if (!grid) return;

  const SIZES = '(max-width:600px) 85vw, (max-width:900px) 46vw, 31vw';

  grid.innerHTML = GALLERY.map(item => {
    const c = CATS[item.cat] || { label: item.cat, color: '#6a8fad' };
    const cap = item.title ? `<b>${c.label}</b><span>${item.title}</span>` : `<b>${c.label}</b>`;
    return `
    <div class="gal-item fi" data-cat="${item.cat}" data-full="${fullUrl(item.id)}"
         style="background-image:url('${lqipUrl(item.id)}');background-size:cover;background-position:center;">
      <img src="${imgUrl(item.id, 900)}"
           srcset="${imgUrl(item.id, 480)} 480w, ${imgUrl(item.id, 900)} 900w, ${imgUrl(item.id, 1400)} 1400w"
           sizes="${SIZES}"
           alt="${item.alt}" loading="lazy" decoding="async"
           onload="this.classList.add('ld')">
      <div class="gal-overlay"><span class="gal-icon">⊕</span></div>
      <div class="gal-cap" style="--cap:${c.color}">${cap}</div>
    </div>`;
  }).join('');

  // cache-ből azonnal betöltött képek
  grid.querySelectorAll('img').forEach(im => { if (im.complete && im.naturalWidth) im.classList.add('ld'); });
})();

/* ── Oldal képek beállítása ──────────────────────────────────── */
(function renderSite() {
  const base = BASE;

  // Favicon
  const faviconPng  = `${base}/w_64,f_png/${SITE.favicon}`;
  const faviconIco  = `${base}/w_32,f_ico/${SITE.favicon}`;
  const touchIcon   = `${base}/w_180,f_png/${SITE.favicon}`;
  document.querySelectorAll('link[rel="icon"]').forEach(el => {
    el.href = el.type === 'image/png' ? faviconPng : faviconIco;
  });
  const touch = document.querySelector('link[rel="apple-touch-icon"]');
  if (touch) touch.href = touchIcon;

  // Hero háttérkép — kijelzőhöz illő méret + preload
  const heroBg = document.getElementById('heroBg');
  if (heroBg) {
    const w = window.innerWidth <= 720 ? 1080 : 1920;
    const heroUrl = `${base}/f_auto,q_auto,w_${w}/${SITE.hero}`;
    const pre = document.createElement('link');
    pre.rel = 'preload'; pre.as = 'image'; pre.href = heroUrl;
    document.head.appendChild(pre);
    heroBg.style.backgroundImage = `url('${heroUrl}')`;
  }

  // Rólam fotó — responsive srcset
  const aboutImg = document.querySelector('img[alt="Botos Kristóf"]');
  if (aboutImg) {
    aboutImg.src = `${base}/f_auto,q_auto,w_600/${SITE.about}`;
    aboutImg.srcset = `${base}/f_auto,q_auto,w_400/${SITE.about} 400w, ` +
                      `${base}/f_auto,q_auto,w_600/${SITE.about} 600w, ` +
                      `${base}/f_auto,q_auto,w_900/${SITE.about} 900w`;
    aboutImg.sizes = '(max-width:600px) 62vw, (max-width:900px) 360px, 46vw';
    aboutImg.loading = 'lazy';
    aboutImg.decoding = 'async';
  }

  // Logó (nav, hero, footer)
  const logoUrl = `${base}/f_auto,q_auto,w_200/${SITE.logo}`;
  document.querySelectorAll('img[alt="Botoscope"]').forEach(el => {
    el.src = logoUrl;
  });
})();
