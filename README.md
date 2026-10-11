# Inomarka Hayda

GitHub loyihasi: `inamarka` — https://github.com/Doniyorbek2000/inamarka

Nodirxo‘janing @inomarka.hayda profili asosida tayyorlangan o‘zbekcha, telefon va kompyuterga mos brend sayti.

## Ishga tushirish

Node.js 18+ bilan `npm run dev`, keyin http://127.0.0.1:4173 manzilini oching. Kutubxonalar o‘rnatish talab qilinmaydi. `index.html` faylini brauzerda to‘g‘ridan-to‘g‘ri ochish ham mumkin.

`npm run build` hostingga yuklash uchun `dist/` papkasini tayyorlaydi. `dist/` ichidagi fayllarni istalgan statik hostingga yuklash mumkin. Sayt hali ommaviy internetga joylashtirilmagan.

## Vercelga joylashtirish

1. Vercelda **Add New → Project** tugmasini bosing.
2. GitHubdagi `Doniyorbek2000/inamarka` repozitoriyasini **Import** qiling.
3. Root Directory: loyihaning asosiy papkasi. Framework Preset: **Other**.
4. Build Command: `npm run build`; Output Directory: `dist`. `vercel.json` bu sozlamalarni saqlaydi.
5. **Deploy** tugmasini bosing. Environment Variables kerak emas.

GitHubga manba kodlari, suratlar va shriftlar yuklanadi. `dist/`, tekshiruv suratlari va ZIP arxiv Git tarixiga qo‘shilmaydi; Vercel saytni manbadan yig‘adi.

## Imkoniyatlar

- Asl profil suratlari va Instagramdagi videolarga havolalar.
- Qidiruv, toifa filtrlari va brauzerda saqlanadigan tanlangan videolar.
- Brend haqida, reklama xizmatlari, haqiqiy telefon va ijtimoiy tarmoq havolalari.
- Tekshiriladigan murojaat formasi: Telegramga yuborish uchun matn tayyorlaydi va nusxalash imkonini beradi. Xabar avtomatik yuborilmaydi; server yoki CRM mavjud emas.
- Klaviatura navigatsiyasi, fokus ko‘rsatkichlari, modal oynada fokusni cheklash va kam harakat rejimi.
- Mahalliy shriftlar va suratlar: sayt ko‘rinishi tashqi CDNga bog‘liq emas.

## Kontentni yangilash

Videolar `app.js` ichidagi `videos` ro‘yxatida. Sarlavhalar tahririy tavsiflar; narxlar va sotuvdagi mavjudlik ko‘rsatilmagan. Ro‘yxat Instagramdan avtomatik yangilanmaydi.

Profil ma’lumotlari 2026-10-11 kuni tekshirildi:

- Instagram: https://www.instagram.com/inomarka.hayda/
- Telegram: https://t.me/inomarkahayda
- Qo‘shimcha aloqa sahifasi: https://inomarka-hayda.github.io/info/

Telefonlar: avtomobil reklamasi +998 70 400 00 00; biznes reklamasi +998 99 073 00 07; Tuning Profi +998 90 444 44 47. Instagram hamjamiyati 3 million, Telegram obunachilari 78 mingdan ortiq; bu raqamlar vaqt bilan o‘zgaradi.

Suratlar brendning ochiq Instagram profilidan olingan. Ommaviy chiqarishdan oldin brend egasi kontent va rasmlardan foydalanishni tasdiqlashi kerak. Google Fonts: Manrope va Barlow Condensed (SIL Open Font License).

## Tekshiruv

`npm run check` JavaScript sintaksisini tekshiradi. Brauzer tekshiruvi va suratlar `evidence/` papkasida. Telefon menyusi, qidiruv, natija topilmagan holat, saqlanganlarning qayta ochilganda tiklanishi, ko‘proq videolar va Telegram uchun murojaat matni tekshirildi.
