# Bucheen - Modern Landing Page

Bu proje, modern UI/UX tasarım prensiplerine uygun olarak geliştirilmiş, tamamen duyarlı (responsive) bir web açılış sayfasıdır (landing page). Çeşitli cihaz boyutlarına (mobil, tablet, masaüstü) kusursuz uyum sağlayacak şekilde kodlanmıştır.

## 🚀 Teknolojiler ve Araçlar

- **React:** Kullanıcı arayüzü inşası ve bileşen (component) yönetimi.
- **Tailwind CSS:** Hızlı ve esnek stil yapılandırması, responsive tasarım ve özel tasarım token'larının (renkler, fontlar) uygulanması.
- **React Icons:** Proje genelindeki vektörel ikonların (navigasyon, iletişim, değerlendirme yıldızları) entegrasyonu.

## 📁 Mimari ve Klasör Yapısı

Proje, sürdürülebilirliği ve ölçeklenebilirliği en üst düzeye çıkarmak için **özellik odaklı (feature-based)** modüler bir klasör yapısı kullanılarak inşa edilmiştir. Geleneksel kategori tabanlı organizasyon yerine, projenin her bir ana bölümü kendi bağımsız klasöründe kapsüllenmiştir.

```text
src/
├── assets/
├── components/
│   ├── Container.jsx
│   └── PhoneMockup.jsx
├── features/
│   ├── About/
│   ├── Footer/
│   ├── Hero/
│   ├── HowItWorks/
│   ├── Navigation/
│   ├── PopularProfiles/
│   └── Testimonials/
├── App.jsx
└── main.jsx