# 🚀 Emciar — Enterprise Consulting & Recruitment Platform

Platform digital **Enterprise Management Consulting (EMC)** yang menyediakan layanan konsultasi karier, rekrutmen, dan pengembangan profesional. Emciar menjembatani talenta terbaik dengan perusahaan yang membutuhkan.

## ✨ Fitur

### Landing Page
- **Hero Section** — Pengenalan platform dengan call-to-action
- **Tentang Emciar** — Informasi tentang visi, misi, dan layanan
- **Konsultasi** — Informasi jenis layanan konsultasi yang tersedia

### Layanan Utama
- **📋 Career Counseling** — Konsultasi karier untuk pengembangan profesional
  - Interview preparation
  - Resume review & optimization
  - Career path planning
- **🔍 Recruitment** — Solusi rekrutmen untuk perusahaan
- **📞 Contact** — Formulir kontak untuk informasi lebih lanjut

### Halaman Khusus
- `/counseling` — Layanan konseling dengan tahapan: interview, job counseling, resume review
- `/recruitment` — Informasi rekrutmen
- `/contact` — Form kontak lengkap dengan detail dan footer

## 🛠️ Tech Stack

| Kategori | Teknologi |
|----------|-----------|
| **Framework** | Next.js (App Router) |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS |
| **UI Library** | shadcn/ui (Radix UI primitives) |
| **Headless Components** | @headlessui/react |
| **Icons** | Lucide React, React Icons |
| **Animation** | Framer Motion |

## 📁 Struktur Proyek

```
├── app/
│   ├── page.tsx              # Landing page
│   ├── counseling/           # Halaman layanan konseling
│   │   └── page.tsx
│   ├── recruitment/          # Halaman rekrutmen
│   │   └── page.tsx
│   └── contact/              # Halaman kontak
│       └── page.tsx
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx        # Navigasi utama
│   │   ├── Footer.tsx        # Footer
│   │   └── LoadingWrapper.tsx # Loading state
│   └── pages/
│       ├── landing-page/     # Komponen landing
│       │   ├── About.tsx
│       │   └── Consul.tsx
│       ├── counseling-page/  # Komponen konseling
│       │   ├── interview.tsx
│       │   ├── job-counseling.tsx
│       │   ├── resume.tsx
│       │   └── stages-counseling.tsx
│       ├── contacts-page/    # Komponen kontak
│       │   ├── hero-contacts.tsx
│       │   ├── detail-contacts.tsx
│       │   └── footer-contacts.tsx
│       └── recruitment-page/ # Komponen rekrutmen
└── constants/index.ts        # Data konstan
```

## 🚀 Cara Menjalankan

```bash
npm install
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000).

## 📄 Lisensi

MIT License

---

> Dibuat oleh [Pandu Pangestu](https://github.com/pandupan)
