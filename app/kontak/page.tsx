import SiteHeader from "@/components/SiteHeader";
import ContactForm from "@/components/ContactForm";
import { MapPin, Phone, Mail, Clock, MessageSquare, HelpCircle, CheckCircle2 } from "lucide-react";

export default function Kontak() {
  const faqs = [
    {
      q: "Berapa kapasitas minimum order untuk layanan fulfillment?",
      a: "Kami melayani berbagai skala bisnis, mulai dari brand bertumbuh (50+ order/hari) hingga enterprise (10.000+ order/hari) dengan alokasi ruang dan PIC yang fleksibel.",
    },
    {
      q: "Apakah sistem gudang PT Guyub Tunggal Songo terhubung ke marketplace?",
      a: "Ya, sistem WMS kami terintegrasi secara otomatis dengan Shopee, Tokopedia, TikTok Shop, Lazada, serta sistem ERP / WooCommerce Anda.",
    },
    {
      q: "Berapa lama proses serah terima dan onboarding gudang?",
      a: "Proses inbound awal, barcode tagging, dan integrasi sistem rata-rata selesai dalam 2-4 hari kerja sehingga operasional dapat langsung berjalan.",
    },
  ];

  return (
    <>
      <SiteHeader />

      <main className="page-main">
        <div className="container">
          {/* Header */}
          <div style={{ maxWidth: 740, marginBottom: 40 }}>
            <div className="eyebrow-pill">Hubungi Konsultan Kami</div>
            <h1 className="h1" style={{ margin: "14px 0 16px" }}>
              Mari Diskusikan Solusi Logistik & Rantai Pasok Anda
            </h1>
            <p className="muted">
              Isi formulir konsultasi di bawah ini atau hubungi saluran komunikasi resmi kami. Tim ahli kami siap membantu menyusun rencana operasional yang paling efisien untuk bisnis Anda.
            </p>
          </div>

          {/* 2-Column Responsive Layout */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: 32,
              alignItems: "start",
            }}
          >
            {/* Left: Contact Form Card */}
            <div className="card" style={{ padding: "36px 32px" }}>
              <div style={{ marginBottom: 24 }}>
                <h2 className="h3">Formulir Permintaan Konsultasi</h2>
                <p style={{ fontSize: 14, color: "var(--muted)", marginTop: 4 }}>
                  Kami akan merespons dalam waktu 1x24 jam kerja dengan proposal & estimasi biaya.
                </p>
              </div>
              <ContactForm />
            </div>

            {/* Right: Contact Details & Info */}
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              {/* Info Card 1: Direct WhatsApp */}
              <div
                className="card"
                style={{
                  padding: 26,
                  background: "linear-gradient(135deg, #005840 0%, #007a58 100%)",
                  color: "#ffffff",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                  <MessageSquare size={24} color="#a7f3d0" />
                  <h3 style={{ fontSize: 18, fontWeight: 800 }}>Respon Cepat via WhatsApp</h3>
                </div>
                <p style={{ fontSize: 14, color: "rgba(255,255,255,0.85)", marginBottom: 18, lineHeight: 1.6 }}>
                  Butuh informasi mendesak atau ingin konsultasi langsung dengan account manager?
                </p>
                <a
                  href="https://wa.me/6285777163774?text=Halo%20PT%20Guyub%20Tunggal%20Songo%2C%20saya%20ingin%20konsultasi%20layanan%20logistik."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-white btn-sm"
                  style={{ width: "fit-content" }}
                >
                  Chat WhatsApp Sekarang
                </a>
              </div>

              {/* Info Card 2: Contact List */}
              <div className="card" style={{ padding: 28 }}>
                <h3 className="h3" style={{ fontSize: 18, marginBottom: 20 }}>
                  Informasi Kantor & Gudang
                </h3>

                <div style={{ display: "grid", gap: 20 }}>
                  <div style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                    <div className="trust-icon-box" style={{ width: 40, height: 40 }}>
                      <MapPin size={20} />
                    </div>
                    <div>
                      <div style={{ fontSize: 14, fontWeight: 800, color: "var(--ink)" }}>
                        Kantor & Alamat Resmi
                      </div>
                      <div style={{ fontSize: 13, color: "var(--muted)", marginTop: 2, lineHeight: 1.6 }}>
                        Jl Rambutan No.52 RT 005/011, Jatimekar, Jatiasih, Kota Bekasi 17422
                      </div>
                    </div>
                  </div>

                  <div style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                    <div className="trust-icon-box" style={{ width: 40, height: 40 }}>
                      <Phone size={20} />
                    </div>
                    <div>
                      <div style={{ fontSize: 14, fontWeight: 800, color: "var(--ink)" }}>
                        Telepon & Hotline WhatsApp
                      </div>
                      <div style={{ fontSize: 13, color: "var(--muted)", marginTop: 2 }}>
                        <a href="tel:+6285777163774" style={{ color: "inherit", textDecoration: "none" }}>
                          +62 8577-7163-774
                        </a>
                      </div>
                    </div>
                  </div>

                  <div style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                    <div className="trust-icon-box" style={{ width: 40, height: 40 }}>
                      <Mail size={20} />
                    </div>
                    <div>
                      <div style={{ fontSize: 14, fontWeight: 800, color: "var(--ink)" }}>
                        Email Resmi
                      </div>
                      <div style={{ fontSize: 13, color: "var(--muted)", marginTop: 2 }}>
                        <a href="mailto:marketing@ptguyubtunggalsongo.vercel.app" style={{ color: "inherit", textDecoration: "none" }}>
                          marketing@ptguyubtunggalsongo.vercel.app
                        </a>
                      </div>
                    </div>
                  </div>

                  <div style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                    <div className="trust-icon-box" style={{ width: 40, height: 40 }}>
                      <Clock size={20} />
                    </div>
                    <div>
                      <div style={{ fontSize: 14, fontWeight: 800, color: "var(--ink)" }}>
                        Jam Layanan Operasional
                      </div>
                      <div style={{ fontSize: 13, color: "var(--muted)", marginTop: 2, lineHeight: 1.6 }}>
                        Senin – Jumat: 08.00 – 17.00 WIB<br />
                        Operasional Gudang (Inbound/Outbound): 24/7 Sesuai SLA
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div style={{ marginTop: 60 }}>
            <div style={{ textAlign: "center", maxWidth: 640, margin: "0 auto 36px" }}>
              <div className="eyebrow">Frequently Asked Questions</div>
              <h2 className="h2" style={{ fontSize: 28 }}>
                Pertanyaan yang Sering Diajukan
              </h2>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: 20,
              }}
            >
              {faqs.map((f, i) => (
                <div key={i} className="card" style={{ padding: 24 }}>
                  <div style={{ display: "flex", alignItems: "flex-start", gap: 12, marginBottom: 8 }}>
                    <HelpCircle size={20} color="var(--primary)" style={{ flexShrink: 0, marginTop: 2 }} />
                    <h3 style={{ fontSize: 16, fontWeight: 800, color: "var(--ink)" }}>{f.q}</h3>
                  </div>
                  <p style={{ fontSize: 13.5, color: "var(--muted)", lineHeight: 1.6, paddingLeft: 32 }}>
                    {f.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="site-footer">
        <div className="container">
          <div className="footer-bottom" style={{ borderTop: "none", paddingTop: 0 }}>
            <span className="footer-copyright">© 2026 PT Guyub Tunggal Songo. All rights reserved.</span>
            <div className="footer-legal-links">
              <span className="footer-legal-link">Jl. Rambutan No.52, Jatimekar, Jatiasih, Kota Bekasi 17422</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
