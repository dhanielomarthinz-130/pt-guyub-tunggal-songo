import SiteHeader from "@/components/SiteHeader";
import Link from "next/link";
import { Calendar, Clock, ArrowRight, BookOpen, Tag, Sparkles } from "lucide-react";

export default function Berita() {
  const articles = [
    {
      id: 1,
      title: "Strategi Mengurangi Biaya Fulfillment E-Commerce hingga 30%",
      tag: "Insight Logistik",
      date: "24 Agustus 2026",
      readTime: "5 min baca",
      desc: "Pelajari bagaimana standardisasi packaging, batch picking otomatis, dan negosiasi kurir terpusat dapat menghemat biaya operasional brand Anda secara signifikan.",
    },
    {
      id: 2,
      title: "WMS Berbasis Cloud: Kunci Visibilitas Stok Real-Time Antar Marketplace",
      tag: "Teknologi",
      date: "18 Agustus 2026",
      readTime: "4 min baca",
      desc: "Mengapa brand modern membutuhkan sinkronisasi multi-channel untuk mencegah overselling dan meningkatkan kepuasan pelanggan secara konsisten.",
    },
    {
      id: 3,
      title: "Persiapan Menghadapi Lonjakan Pesanan Saat Event Mega Sale & Harbolnas",
      tag: "Operational Excellence",
      date: "10 Agustus 2026",
      readTime: "6 min baca",
      desc: "Langkah-langkah strategis dalam menyusun buffer stock, penambahan shift picking, dan koordinasi armada pengiriman sebelum tanggal kembar.",
    },
    {
      id: 4,
      title: "Pentingnya Value-Added Services dalam Rantai Pasok Produk Kecantikan",
      tag: "Insight Logistik",
      date: "02 Agustus 2026",
      readTime: "4 min baca",
      desc: "Bagaimana layanan kitting, penempelan stiker BPOM, dan custom box unboxing meningkatkan reputasi brand di mata konsumen akhir.",
    },
    {
      id: 5,
      title: "Panduan Memilih Lokasi Pergudangan Strategis di Kawasan Industri Bekasi",
      tag: "Pergudangan",
      date: "25 Juli 2026",
      readTime: "5 min baca",
      desc: "Aksesibilitas tol, bebas hambatan logistik, dan kedekatan dengan jalur distribusi utama menjadi faktor penentu efisiensi biaya transport.",
    },
    {
      id: 6,
      title: "Standar Keamanan Gudang dan Proteksi Barang Nilai Tinggi",
      tag: "Keamanan & SOP",
      date: "14 Juli 2026",
      readTime: "3 min baca",
      desc: "Mengenal sistem keamanan berlapis, kontrol akses biometrik, dan audit stock opname berkala yang diterapkan di PT Guyub Tunggal Songo.",
    },
  ];

  return (
    <>
      <SiteHeader />

      <main className="page-main">
        <div className="container">
          {/* Header Banner */}
          <div style={{ maxWidth: 740, marginBottom: 44 }}>
            <div className="eyebrow-pill">Pusat Informasi & Edukasi</div>
            <h1 className="h1" style={{ margin: "14px 0 16px" }}>
              Berita, Tren & Insight Rantai Pasok Modern
            </h1>
            <p className="muted">
              Dapatkan wawasan terkini mengenai tren logistik, otomasi pergudangan, optimasi fulfillment e-commerce, dan efisiensi supply chain di Indonesia.
            </p>
          </div>

          {/* Featured Article Card */}
          <div
            className="card"
            style={{
              padding: "36px 32px",
              background: "linear-gradient(135deg, #005840 0%, #007a58 100%)",
              color: "#ffffff",
              marginBottom: 44,
            }}
          >
            <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 12 }}>
              <span
                style={{
                  background: "rgba(255,255,255,0.2)",
                  padding: "4px 12px",
                  borderRadius: 999,
                  fontSize: 12,
                  fontWeight: 800,
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                }}
              >
                Artikel Utama
              </span>
              <span style={{ fontSize: 13, opacity: 0.85 }}>• 24 Agustus 2026</span>
            </div>
            <h2
              style={{
                fontSize: "clamp(24px, 3.2vw, 36px)",
                fontWeight: 800,
                lineHeight: 1.2,
                marginBottom: 14,
                letterSpacing: "-0.02em",
              }}
            >
              Masa Depan Fulfillment Indonesia: Otomasi, Akurasi, dan Skalabilitas
            </h2>
            <p style={{ fontSize: 15, color: "rgba(255,255,255,0.88)", maxWidth: 780, lineHeight: 1.7, marginBottom: 24 }}>
              Bagaimana integrasi antara warehouse management system mutakhir dan tim operasional yang terlatih dapat memberikan lompatan performa bagi brand yang ingin menembus skala ratusan ribu pengiriman per bulan.
            </p>
            <Link href="/kontak" className="btn btn-white btn-sm" style={{ width: "fit-content" }}>
              Konsultasikan Rantai Pasok Anda <ArrowRight size={15} />
            </Link>
          </div>

          {/* Articles Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
              gap: 24,
            }}
          >
            {articles.map((art) => (
              <article key={art.id} className="card card-hover" style={{ padding: 28, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <div>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
                    <span className="eyebrow" style={{ margin: 0, fontSize: 11 }}>
                      {art.tag}
                    </span>
                    <span style={{ fontSize: 12, color: "var(--muted)" }}>
                      {art.readTime}
                    </span>
                  </div>

                  <h3 style={{ fontSize: 18, fontWeight: 800, color: "var(--ink)", lineHeight: 1.35, marginBottom: 10 }}>
                    {art.title}
                  </h3>

                  <p style={{ fontSize: 13.5, color: "var(--muted)", lineHeight: 1.65, marginBottom: 20 }}>
                    {art.desc}
                  </p>
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    paddingTop: 16,
                    borderTop: "1px solid var(--line)",
                    fontSize: 12.5,
                    color: "var(--muted)",
                  }}
                >
                  <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
                    <Calendar size={14} color="var(--primary)" /> {art.date}
                  </span>
                  <Link href="/kontak" style={{ display: "inline-flex", alignItems: "center", gap: 4, color: "var(--primary)", fontWeight: 700 }}>
                    Baca Selengkapnya <ArrowRight size={14} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="site-footer">
        <div className="container">
          <div className="footer-bottom" style={{ borderTop: "none", paddingTop: 0 }}>
            <span className="footer-copyright">© 2026 PT Guyub Tunggal Songo. Tim Publikasi & Riset Supply Chain.</span>
            <div className="footer-legal-links">
              <span className="footer-legal-link">Jl. Rambutan No.52, Jatimekar, Jatiasih, Kota Bekasi 17422</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
