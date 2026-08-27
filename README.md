# PT Guyub Tunggal Songo — Full-stack Website

Website corporate modern untuk PT Guyub Tunggal Songo dengan Next.js App Router + Tailwind CSS v4.

## Fitur
- Homepage corporate responsif mengikuti UI/UX mockup.
- Section About, Services, Solutions/CTA.
- Halaman Kontak dengan form aktif.
- Backend API untuk menyimpan inquiry ke `data/inquiries.json`.
- API health check: `GET /api/health`.
- API daftar inquiry: `GET /api/contact`.
- Halaman Karir dan Berita sebagai placeholder yang siap dikembangkan.

## Menjalankan

Requirement: Node.js 20.9+.

```bash
npm install
npm run dev
```

Buka http://localhost:3000

## API

### POST /api/contact
Payload JSON:
```json
{
  "name": "Budi",
  "email": "budi@company.com",
  "phone": "0812xxxx",
  "company": "PT Contoh",
  "service": "Fulfillment",
  "message": "Butuh fulfillment 10.000 order/hari."
}
```

### GET /api/contact
Mengembalikan seluruh inquiry yang tersimpan secara lokal.

### GET /api/health
Health check service.

## Catatan produksi
Penyimpanan inquiry ke JSON dimaksudkan sebagai starter/local development. Untuk produksi, ganti layer penyimpanan pada `app/api/contact/route.ts` dengan PostgreSQL/MySQL/Supabase dan tambahkan autentikasi untuk endpoint admin.
