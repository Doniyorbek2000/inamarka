const paths = {
  'arrow-up-right':'M7 17 17 7M7 7h10v10', 'arrow-right':'M4 12h16m-6-6 6 6-6 6', 'arrow-down':'M12 4v16m-6-6 6 6 6-6', 'arrow-up':'M12 20V4m-6 6 6-6 6 6',
  phone:'M7 3H4a1 1 0 0 0-1 1c0 9.4 7.6 17 17 17a1 1 0 0 0 1-1v-3l-5-2-2 2a13 13 0 0 1-7-7l2-2z',
  menu:'M4 6h16M4 12h16M4 18h16',x:'m6 6 12 12M6 18 18 6',play:'m9 5 11 7-11 7z',
  search:'M21 21l-5-5M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0',bookmark:'M6 3h12v18l-6-4-6 4z',plus:'M12 5v14M5 12h14',
  car:'M5 11 7 5h10l2 6M3 11h18v7H3zM6 18v3m12-3v3M6 14h2m8 0h2',chart:'M4 4v16h16M8 15l4-5 4 2 5-7m-5 0h5v5',
  tool:'M14 6a5 5 0 0 0-6 6L3 17a3 3 0 0 0 4 4l5-5a5 5 0 0 0 6-6l-3 3-4-4z',
  telegram:'m3 11 18-7-4 17-5-5-3 3v-6l8-6-10 8z',instagram:'M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0M17 7h.01',
  lock:'M6 10h12v11H6zM8 10V6a4 4 0 0 1 8 0v4M12 14v3',copy:'M8 8h13v13H8zM16 8V3H3v13h5'
};
const icon = (name) => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.65" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${paths[name] || paths['arrow-up-right']}"/></svg>`;
function applyIcons(root = document) { root.querySelectorAll('[data-icon]').forEach(el => { const svg = document.createElement('span'); svg.innerHTML = icon(el.dataset.icon); const actual = svg.firstElementChild; actual.setAttribute('class',el.className); el.replaceWith(actual); }); }
applyIcons();
// These are public Instagram video previews, not a live vehicle inventory.
const videos = [
  { id:'gmc', title:'GMC. Katta xarakter.', subtitle:'Kuchli ko‘rinish. Katta imkoniyatlar.', category:'suv', label:'SUV & KROSSOVER', image:'1cb60e9d046b612e', reel:'DeWLexaNBcp' },
  { id:'mercedes', title:'Mercedes-Benz. O‘zgacha hissiyot.', subtitle:'Premium avtomobilga yaqindan nigoh.', category:'suv', label:'PREMIUM SUV', image:'a53ed6db8df721cf', reel:'DeV8NkINAXl' },
  { id:'sedan', title:'Yangi avlod elektr sedani.', subtitle:'Dizayn va texnologiya bir joyda.', category:'sedan', label:'ELEKTROMOBIL', image:'52ab887a8a464d57', reel:'DeWBPx-tuEy' },
  { id:'chevrolet', title:'Chevrolet. Yo‘lga tayyor.', subtitle:'Oilaviy safarlarga yangicha qarash.', category:'suv', label:'SUV & KROSSOVER', image:'c2ba32204f8af2fe', reel:'DeWLk6qNY1P' },
  { id:'audi', title:'Audi bilan bir suhbat.', subtitle:'Nodirxo‘ja bilan avtomobil hikoyalari.', category:'sedan', label:'SEDAN', image:'01f44486ab222df4', reel:'DeWO_hhthzP' },
  { id:'minivan', title:'Kenglik. Qulaylik. Uslub.', subtitle:'Premium minivenga yaqindan nigoh.', category:'suv', label:'MINIVEN', image:'b4986249bebf5911', reel:'DeWEn6Ytpfo' },
  { id:'inside', title:'Rul ortidan yangicha nigoh.', subtitle:'Avtomobil ichidagi ilk taassurotlar.', category:'stories', label:'SHARHLAR', image:'252a144aacd345a6', reel:'DeE3d-xteB_' },
  { id:'cadillac', title:'Cadillac. E’tiborni tortadi.', subtitle:'Katta avtomobil, katta taassurot.', category:'suv', label:'PREMIUM SUV', image:'16e06841ba8416e6', reel:'DeT7TOWtNva' },
  { id:'story', title:'Inomarka Hayda kundaligi.', subtitle:'Avtomobillardan tashqari hikoyalar.', category:'stories', label:'HAYOT & HIKOYALAR', image:'7b6f7bff812ebc75', reel:'DeUZxTqNro6' }
];
let saved = new Set();
try { const value = JSON.parse(localStorage.getItem('inomarka-saved') || '[]'); if(Array.isArray(value)) saved = new Set(value.filter(id => videos.some(v => v.id === id))); } catch { /* Browsing works even when storage is unavailable. */ }
let activeFilter = 'all', visibleLimit = 3;
const grid = document.getElementById('video-grid'), search = document.getElementById('video-search');
const toast = document.getElementById('toast'); let toastTimer;
function showToast(message) { toast.textContent = message; toast.classList.add('show'); clearTimeout(toastTimer); toastTimer = setTimeout(() => toast.classList.remove('show'), 3000); }
function renderVideos() {
  const query = search.value.trim().toLocaleLowerCase();
  const matches = videos.filter(v => (activeFilter === 'all' || (activeFilter === 'saved' ? saved.has(v.id) : v.category === activeFilter)) && `${v.title} ${v.subtitle} ${v.label}`.toLocaleLowerCase().includes(query));
  grid.innerHTML = matches.slice(0,visibleLimit).map(v => `<article class="video-card"><div class="video-visual"><a href="https://www.instagram.com/inomarka.hayda/reel/${v.reel}/" target="_blank" rel="noopener noreferrer" aria-label="${v.title} — Instagramda tomosha qilish"><img src="assets/instagram/${v.image}.jpg" alt="${v.title} — profil videolavhasi" loading="lazy"><span class="video-play">${icon('play')} VIDEONI KO‘RISH</span></a><span class="video-tag">${v.label}</span><button class="save-video" data-save="${v.id}" aria-pressed="${saved.has(v.id)}" aria-label="${v.title} — ${saved.has(v.id) ? 'saqlanganlardan olib tashlash' : 'saqlash'}">${icon('bookmark')}</button></div><div class="video-info"><div class="video-meta"><span>INOMARKA HAYDA</span><span>${icon('instagram')} VIDEOLAVHA</span></div><h3><a href="https://www.instagram.com/inomarka.hayda/reel/${v.reel}/" target="_blank" rel="noopener noreferrer">${v.title}</a></h3><p>${v.subtitle}</p></div></article>`).join('');
  document.getElementById('empty-state').hidden = matches.length > 0;
  document.getElementById('load-more').hidden = matches.length <= visibleLimit;
  document.getElementById('result-count').textContent = `${matches.length} ta videolavha topildi. ${Math.min(matches.length,visibleLimit)} tasi ko‘rsatilmoqda.`;
  document.getElementById('saved-count').textContent = saved.size;
  grid.querySelectorAll('img').forEach(img => img.addEventListener('error', () => {
    const fallback = document.createElement('span');
    fallback.className = 'image-fallback';
    fallback.textContent = 'Surat yuklanmadi. Videoni Instagramda ko‘ring.';
    img.hidden = true;
    img.after(fallback);
  }, {once:true}));
}
function setFilter(filter) { activeFilter = filter; visibleLimit = 3; document.querySelectorAll('[data-filter]').forEach(btn => { const active = btn.dataset.filter === filter; btn.classList.toggle('active',active); btn.setAttribute('aria-pressed',String(active)); }); renderVideos(); }
document.querySelectorAll('[data-filter]').forEach(btn => btn.addEventListener('click', () => setFilter(btn.dataset.filter)));
search.addEventListener('input', () => { visibleLimit = 3; renderVideos(); });
document.getElementById('reset-filters').addEventListener('click', () => { search.value = ''; setFilter('all'); });
document.getElementById('load-more').addEventListener('click', () => { visibleLimit += 3; renderVideos(); });
grid.addEventListener('click', e => { const btn = e.target.closest('[data-save]'); if(!btn) return; const id = btn.dataset.save; saved.has(id) ? saved.delete(id) : saved.add(id); let stored = true; try { localStorage.setItem('inomarka-saved',JSON.stringify([...saved])); } catch { stored = false; } renderVideos(); const updated = grid.querySelector(`[data-save="${id}"]`); if(updated) updated.focus({preventScroll:true}); showToast(saved.has(id) ? (stored ? 'Video saqlanganlarga qo‘shildi' : 'Video shu tashrif davomida saqlandi') : 'Video saqlanganlardan olib tashlandi'); });
renderVideos();
const menuToggle = document.querySelector('.menu-toggle'), navigation = document.getElementById('navigation');
function closeMenu() { navigation.classList.remove('open'); menuToggle.setAttribute('aria-expanded','false'); menuToggle.setAttribute('aria-label','Menyuni ochish'); menuToggle.innerHTML = icon('menu'); }
menuToggle.addEventListener('click', () => { const open = !navigation.classList.contains('open'); navigation.classList.toggle('open',open); menuToggle.setAttribute('aria-expanded',String(open)); menuToggle.setAttribute('aria-label',open ? 'Menyuni yopish' : 'Menyuni ochish'); menuToggle.innerHTML = icon(open ? 'x' : 'menu'); });
navigation.querySelectorAll('a').forEach(a => a.addEventListener('click',closeMenu));
document.addEventListener('keydown',e => { if(e.key === 'Escape' && navigation.classList.contains('open')) { closeMenu(); menuToggle.focus(); } });
const serviceSelect = document.getElementById('service-select');
document.querySelectorAll('[data-service]').forEach(a => a.addEventListener('click', () => { serviceSelect.value = a.dataset.service; }));
const form = document.getElementById('contact-form'), dialog = document.getElementById('request-dialog'), messageField = document.getElementById('prepared-message');
form.addEventListener('submit', e => { e.preventDefault(); if(!form.reportValidity()) return; const data = new FormData(form); const name = data.get('name').trim(), message = data.get('message').trim(); if(!name || !message) { showToast('Ism va xabarni to‘ldiring.'); return; } const service = data.get('service'); messageField.value = `Assalomu alaykum, Inomarka Hayda!\n\nIsm: ${name}\nTelefon: ${data.get('phone').trim()}\nXizmat: ${service}\n\n${message}`; document.getElementById('copy-status').textContent = ''; const phone = service === 'Biznes reklamasi' ? '+998990730007' : '+998704000000'; const phoneLabel = service === 'Biznes reklamasi' ? '+998 99 073 00 07' : '+998 70 400 00 00'; const phoneLink = document.getElementById('request-phone'); phoneLink.href = `tel:${phone}`; phoneLink.textContent = `Yoki qo‘ng‘iroq qiling: ${phoneLabel}`; document.getElementById('telegram-request').href = `https://t.me/abrorxon_jigar?text=${encodeURIComponent(messageField.value)}`; dialog.showModal(); });
document.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click',e => { if(e.target === dialog) { const rect = dialog.getBoundingClientRect(); if(e.clientX < rect.left || e.clientX > rect.right || e.clientY < rect.top || e.clientY > rect.bottom) dialog.close(); } });
document.getElementById('copy-message').addEventListener('click',async () => { const status = document.getElementById('copy-status'); try { await navigator.clipboard.writeText(messageField.value); status.textContent = 'Matn nusxalandi. Telegramda yuborishingiz mumkin.'; } catch { messageField.focus(); messageField.select(); status.textContent = 'Matnni Ctrl+C yoki telefonning nusxalash tugmasi bilan nusxalang.'; } });
