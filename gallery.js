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

/* ── URL segédfüggvények ─────────────────────────────────────── */
function thumbUrl(id) {
  // c_scale: megtartja az eredeti képarányt, nem vágja körbe
  return `https://res.cloudinary.com/${CLOUD}/image/upload/f_auto,q_auto,w_900,c_scale/${id}`;
}
function fullUrl(id) {
  return `https://res.cloudinary.com/${CLOUD}/image/upload/f_auto,q_auto,w_1920/${id}`;
}

/* ── Galéria renderelés ──────────────────────────────────────── */
(function renderGallery() {
  const grid = document.getElementById('galGrid');
  if (!grid) return;

  grid.innerHTML = GALLERY.map(item => `
    <div class="gal-item fi" data-cat="${item.cat}" data-full="${fullUrl(item.id)}">
      <img src="${thumbUrl(item.id)}" alt="${item.alt}" loading="lazy" decoding="async">
      <div class="gal-overlay"><span class="gal-icon">⊕</span></div>
    </div>
  `).join('');
})();

/* ── Oldal képek beállítása ──────────────────────────────────── */
(function renderSite() {
  const base = `https://res.cloudinary.com/${CLOUD}/image/upload`;

  // Favicon
  const faviconPng  = `${base}/w_64,f_png/${SITE.favicon}`;
  const faviconIco  = `${base}/w_32,f_ico/${SITE.favicon}`;
  const touchIcon   = `${base}/w_180,f_png/${SITE.favicon}`;
  document.querySelectorAll('link[rel="icon"]').forEach(el => {
    el.href = el.type === 'image/png' ? faviconPng : faviconIco;
  });
  const touch = document.querySelector('link[rel="apple-touch-icon"]');
  if (touch) touch.href = touchIcon;

  // Hero háttérkép
  const heroBg = document.getElementById('heroBg');
  if (heroBg) {
    heroBg.style.backgroundImage =
      `url('${base}/f_auto,q_auto,w_1920/${SITE.hero}')`;
  }

  // Rólam fotó
  const aboutImg = document.querySelector('img[alt="Botos Kristóf"]');
  if (aboutImg) {
    aboutImg.src = `${base}/f_auto,q_auto,w_600/${SITE.about}`;
  }

  // Logó (nav, hero, footer)
  const logoUrl = `${base}/f_auto,q_auto,w_200/${SITE.logo}`;
  document.querySelectorAll('img[alt="Botoscope"]').forEach(el => {
    el.src = logoUrl;
  });
})();
