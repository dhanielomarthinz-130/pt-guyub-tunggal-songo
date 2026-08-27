import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ShieldCheck,
  Clock,
  Cpu,
  Users2,
  Warehouse,
  PackageCheck,
  Truck,
  Layers,
  CheckCircle,
  PhoneCall,
  Mail,
  MapPin,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import SiteHeader from "@/components/SiteHeader";

const services = [
  {
    title: "Warehousing Modern",
    desc: "Penyimpanan berstandar tinggi dengan kontrol inventori otomatis, racking rapi, dan keamanan 24 jam.",
    icon: Warehouse,
    features: ["Kontrol Stok Real-Time", "Keamanan CCTV 24/7", "Flexible Space Allocation"],
  },
  {
    title: "E-Commerce Fulfillment",
    desc: "Layanan inbound, picking presisi berbasis barcode, custom packaging, hingga serah terima kurir di hari yang sama.",
    icon: PackageCheck,
    features: ["Same-Day Dispatch", "Integrasi Multi-Marketplace", "Retur & QC Management"],
  },
  {
    title: "Distribusi & Fleet",
    desc: "Pengiriman barang antarkota dan last-mile delivery dengan visibilitas rute dan SLA pengiriman yang terjamin.",
    icon: Truck,
    features: ["Coverage Nasional", "Live GPS Tracking", "Dedicated Fleet & Kurir"],
  },
  {
    title: "Value Added Services",
    desc: "Layanan tambahan seperti kitting, bundling promosi, tagging/labeling BPOM/SNI, dan repackaging produk.",
    icon: Layers,
    features: ["Kitting & Bundling", "Custom Labeling", "Inspeksi Kualitas Produk"],
  },
];

const keyHighlights = [
  "Sistem Manajemen Gudang (WMS) terintegrasi secara digital",
  "Akurasi picking & inventori mencapai 99.8%",
  "Dukungan tim operasional & account manager yang responsif",
  "Efisiensi biaya logistik hingga 30% untuk skala bisnis Anda",
];

const stats = [
  { num: "1.5M+", label: "Order Sukses Diproses" },
  { num: "10+", label: "Pusat Gudang Strategis" },
  { num: "500+", label: "Mitra Bisnis & Brand" },
  { num: "120+", label: "Kota Terjangkau di Indonesia" },
];

export default function Home() {
  return (
    <>
      <SiteHeader />

      <main>
        {/* =========================================
            HERO SECTION
            ========================================= */}
        <section className="hero-section">
          <Image
            src="/hero-warehouse.png"
            alt="Pusat Logistik dan Pergudangan Modern PT Guyub Tunggal Songo"
            fill
            priority
            className="hero-bg-media"
          />
          <div className="hero-gradient-overlay" />

          <div className="container relative z-10">
            <div className="hero-grid">
              {/* Left Column: Copy & Actions */}
              <div className="hero-content">
                <div className="eyebrow-pill">
                  <Sparkles size={14} style={{ display: "inline", marginRight: 6 }} />
                  Partner Rantai Pasok & Logistik Terdepan
                </div>
                <h1 className="hero-title">
                  Solusi Logistik & Fulfillment Terpercaya untuk{" "}
                  <span className="hero-title-highlight">Bisnis Modern</span>
                </h1>
                <p className="hero-copy">
                  PT Guyub Tunggal Songo menyediakan solusi <span style={{ whiteSpace: "nowrap" }}>end-to-end</span> warehousing,{" "}
                  <span style={{ whiteSpace: "nowrap" }}>e-commerce fulfillment</span>, dan distribusi terintegrasi teknologi untuk mengakselerasi pertumbuhan bisnis Anda.
                </p>

                <div className="hero-cta-group">
                  <Link href="/kontak" className="btn btn-primary">
                    Konsultasi Gratis <ArrowRight size={17} />
                  </Link>
                  <Link href="#layanan" className="btn btn-secondary">
                    Jelajahi Layanan
                  </Link>
                </div>

                <div className="hero-badges-row">
                  <div className="hero-badge-item">
                    <CheckCircle size={17} color="var(--primary)" />
                    <span>SLA 99.8% Tepat Waktu</span>
                  </div>
                  <div className="hero-badge-item">
                    <CheckCircle size={17} color="var(--primary)" />
                    <span>Sistem WMS Real-Time</span>
                  </div>
                  <div className="hero-badge-item">
                    <CheckCircle size={17} color="var(--primary)" />
                    <span>CCTV & Keamanan 24/7</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Hero Visual Card */}
              <div className="hero-card-preview">
                <Image
                  src="/hero-warehouse.png"
                  alt="Operasional Pergudangan PT Guyub Tunggal Songo"
                  width={640}
                  height={420}
                  className="hero-card-img"
                  priority
                />
                <div className="hero-floating-badge">
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: 10,
                      background: "var(--primary-light)",
                      color: "var(--primary)",
                      display: "grid",
                      placeItems: "center",
                      flexShrink: 0,
                    }}
                  >
                    <TrendingUp size={22} />
                  </div>
                  <div>
                    <div style={{ fontSize: 15, fontWeight: 800, color: "var(--ink)" }}>
                      50.000+ Paket / Hari
                    </div>
                    <div style={{ fontSize: 12, color: "var(--muted)" }}>
                      Kapasitas throughput operasional teruji
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================
            TRUST / KEUNGGULAN SECTION
            ========================================= */}
        <section className="trust-section">
          <div className="container">
            <div className="trust-container-card">
              <div className="trust-grid">
                <div className="trust-item">
                  <div className="trust-icon-box">
                    <ShieldCheck size={26} />
                  </div>
                  <div>
                    <div className="trust-title">Keamanan 24/7</div>
                    <div className="trust-desc">
                      SOP ketat, asuransi komprehensif, dan monitoring CCTV setiap sudut gudang.
                    </div>
                  </div>
                </div>

                <div className="trust-item">
                  <div className="trust-icon-box">
                    <Clock size={26} />
                  </div>
                  <div>
                    <div className="trust-title">Tepat Waktu & Akurat</div>
                    <div className="trust-desc">
                      Proses cepat picking-packing dengan SLA dispatch hari yang sama ke seluruh kurir.
                    </div>
                  </div>
                </div>

                <div className="trust-item">
                  <div className="trust-icon-box">
                    <Cpu size={26} />
                  </div>
                  <div>
                    <div className="trust-title">WMS Terintegrasi</div>
                    <div className="trust-desc">
                      Dashboard visibilitas inventori real-time terhubung ke channel penjualan Anda.
                    </div>
                  </div>
                </div>

                <div className="trust-item">
                  <div className="trust-icon-box">
                    <Users2 size={26} />
                  </div>
                  <div>
                    <div className="trust-title">Tim Ahli Dedicated</div>
                    <div className="trust-desc">
                      Dukungan personel logistik profesional siap membantu operasional harian bisnis.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================
            ABOUT & STATS SECTION
            ========================================= */}
        <section id="tentang" className="section">
          <div className="container">
            <div className="about-grid">
              {/* Left Column */}
              <div className="card about-content-card">
                <div className="eyebrow">Tentang PT Guyub Tunggal Songo</div>
                <h2 className="h2">Logistik Tangguh yang Tumbuh Bersama Skala Bisnis Anda</h2>
                <p className="muted">
                  Didirikan dengan semangat kebersamaan dan keandalan operasional, PT Guyub Tunggal Songo hadir sebagai mitra rantai pasok strategis bagi brand e-commerce, manufaktur, dan distributor nasional.
                </p>

                <div className="feature-check-list">
                  {keyHighlights.map((item) => (
                    <div className="feature-check-item" key={item}>
                      <CheckCircle size={20} color="var(--primary)" style={{ flexShrink: 0, marginTop: 2 }} />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <Link href="/kontak" className="btn btn-primary">
                  Pelajari Skema Kerjasama <ArrowRight size={16} />
                </Link>
              </div>

              {/* Right Column: Stats */}
              <div className="stats-card">
                <div className="eyebrow" style={{ color: "#a7f3d0" }}>
                  Pencapaian Kami
                </div>
                <h3 className="h3" style={{ color: "#ffffff", marginBottom: 8 }}>
                  Kinerja Operasional yang Teruji & Terpercaya
                </h3>
                <p style={{ color: "rgba(255,255,255,0.8)", fontSize: 14 }}>
                  Kami terus meningkatkan efisiensi dan jangkauan untuk mendukung ratusan brand sukses di Indonesia.
                </p>

                <div className="stat-grid">
                  {stats.map(({ num, label }) => (
                    <div className="stat-box" key={label}>
                      <div className="stat-num">{num}</div>
                      <div className="stat-label">{label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================
            SERVICES SECTION
            ========================================= */}
        <section id="layanan" className="section section-alt">
          <div className="container">
            <div style={{ textAlign: "center", maxWidth: 720, margin: "0 auto 10px" }}>
              <div className="eyebrow">Layanan Logistik Komprehensif</div>
              <h2 className="h2">Solusi End-to-End untuk Rantai Pasok Anda</h2>
              <p className="muted">
                Pilih paket layanan yang sesuai dengan model bisnis, volume order, dan target Service Level Agreement (SLA) Anda.
              </p>
            </div>

            <div className="services-grid">
              {services.map(({ title, desc, icon: Icon, features }) => (
                <div className="card card-hover service-card" key={title}>
                  <div>
                    <div className="service-icon-wrap">
                      <Icon size={28} />
                    </div>
                    <h3 className="service-title">{title}</h3>
                    <p className="service-desc">{desc}</p>

                    <div style={{ display: "grid", gap: 8, marginBottom: 20 }}>
                      {features.map((f) => (
                        <div
                          key={f}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: 8,
                            fontSize: 13,
                            color: "var(--ink-light)",
                            fontWeight: 600,
                          }}
                        >
                          <div
                            style={{
                              width: 6,
                              height: 6,
                              borderRadius: "50%",
                              background: "var(--primary)",
                            }}
                          />
                          <span>{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link href="/kontak" className="service-link">
                    Konsultasikan Layanan <ArrowRight size={16} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================
            CTA SECTION
            ========================================= */}
        <section id="solusi" className="section">
          <div className="container">
            <div className="cta-banner">
              <div>
                <div className="eyebrow" style={{ color: "#a7f3d0" }}>
                  Siap Melangkah Lebih Cepat?
                </div>
                <h2 className="cta-heading">
                  Optimalkan Efisiensi Pergudangan & Pengiriman Bisnis Anda Hari Ini
                </h2>
                <p className="cta-subtext">
                  Diskusikan kebutuhan spesifik bisnis Anda bersama konsultan supply chain kami. Dapatkan analisis kelayakan dan penawaran biaya yang kompetitif.
                </p>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 12, flexShrink: 0 }}>
                <Link href="/kontak" className="btn btn-white">
                  Hubungi Tim Kami <ArrowRight size={17} />
                </Link>
                <a
                  href="https://wa.me/6281234567890?text=Halo%20PT%20Guyub%20Tunggal%20Songo%2C%20saya%20ingin%20konsultasi%20pergudangan."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn"
                  style={{
                    background: "rgba(255,255,255,0.15)",
                    color: "#ffffff",
                    border: "1px solid rgba(255,255,255,0.3)",
                  }}
                >
                  Chat WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* =========================================
          SITE FOOTER
          ========================================= */}
      <footer className="site-footer">
        <div className="container">
          <div className="footer-top">
            {/* Brand Col */}
            <div>
              <div className="brand" style={{ marginBottom: 18 }}>
                <div className="logo-badge" style={{ background: "#ffffff", color: "var(--primary)" }}>
                  G
                </div>
                <div className="brand-text">
                  <span className="brand-name" style={{ color: "#ffffff" }}>
                    PT GUYUB TUNGGAL SONGO
                  </span>
                  <span className="brand-tagline" style={{ color: "rgba(255,255,255,0.7)" }}>
                    Guyub Bersama, Sukses Bersama
                  </span>
                </div>
              </div>
              <p style={{ fontSize: 14, color: "rgba(255,255,255,0.75)", lineHeight: 1.7, maxWidth: 320 }}>
                Penyedia solusi pergudangan modern, fulfillment presisi, dan distribusi logistik terpadu untuk percepatan bisnis di Indonesia.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="footer-col-title">Navigasi</h4>
              <div className="footer-links-list">
                <Link href="/" className="footer-link">Beranda</Link>
                <Link href="/#tentang" className="footer-link">Tentang Kami</Link>
                <Link href="/#layanan" className="footer-link">Layanan</Link>
                <Link href="/karir" className="footer-link">Karir</Link>
                <Link href="/berita" className="footer-link">Berita & Insight</Link>
                <Link href="/kontak" className="footer-link">Hubungi Kami</Link>
              </div>
            </div>

            {/* Services Links */}
            <div>
              <h4 className="footer-col-title">Layanan</h4>
              <div className="footer-links-list">
                <Link href="/#layanan" className="footer-link">Warehousing Modern</Link>
                <Link href="/#layanan" className="footer-link">E-Commerce Fulfillment</Link>
                <Link href="/#layanan" className="footer-link">Distribusi & Last-Mile</Link>
                <Link href="/#layanan" className="footer-link">Value Added Service</Link>
                <Link href="/kontak" className="footer-link">Custom Supply Chain</Link>
              </div>
            </div>

            {/* Contact Col */}
            <div>
              <h4 className="footer-col-title">Kontak Operasional</h4>
              <div className="footer-contact-item">
                <MapPin size={18} style={{ flexShrink: 0, marginTop: 4, color: "#34d399" }} />
                <span>
                  Kawasan Industri Terpadu, Jl. Raya Industri No. 123, Bekasi, Jawa Barat 17530
                </span>
              </div>
              <div className="footer-contact-item">
                <PhoneCall size={18} style={{ flexShrink: 0, marginTop: 2, color: "#34d399" }} />
                <span>+62 21 1234 5678 / +62 812-3456-7890</span>
              </div>
              <div className="footer-contact-item">
                <Mail size={18} style={{ flexShrink: 0, marginTop: 2, color: "#34d399" }} />
                <span>info@guyubtunggalsongo.co.id</span>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <span className="footer-copyright">
              © 2026 PT Guyub Tunggal Songo. Seluruh hak cipta dilindungi undang-undang.
            </span>
            <div className="footer-legal-links">
              <span className="footer-legal-link">Kebijakan Privasi</span>
              <span className="footer-legal-divider">•</span>
              <span className="footer-legal-link">Syarat & Ketentuan</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
