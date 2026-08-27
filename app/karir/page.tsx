import SiteHeader from "@/components/SiteHeader";
import Link from "next/link";
import {
  Briefcase,
  MapPin,
  Clock,
  Sparkles,
  Award,
  GraduationCap,
  HeartHandshake,
  ArrowRight,
  Mail,
} from "lucide-react";

export default function Karir() {
  const benefits = [
    {
      icon: HeartHandshake,
      title: "Budaya Kerja Guyub & Solid",
      desc: "Lingkungan kerja yang suportif, kekeluargaan, dan saling mendukung perkembangan individu.",
    },
    {
      icon: Award,
      title: "Jenjang Karir Transparan",
      desc: "Penilaian kinerja objektif dengan peluang promosi berkala bagi setiap talenta berprestasi.",
    },
    {
      icon: GraduationCap,
      title: "Pelatihan & Pengembangan",
      desc: "Program sertifikasi logistik, pelatihan WMS modern, dan kepemimpinan operasional berkala.",
    },
  ];

  const jobs = [
    {
      id: "wh-sup",
      title: "Warehouse Operations Supervisor",
      department: "Operasional Gudang",
      type: "Penuh Waktu (Full-time)",
      location: "Kawasan Industri, Cikarang - Bekasi",
      requirements: [
        "Pengalaman minimal 3 tahun di supervisi pergudangan atau fulfillment",
        "Menguasai sistem WMS, stock opname, dan alur inbound/outbound",
        "Kemampuan kepemimpinan tim dan manajemen shift kerja",
      ],
    },
    {
      id: "qc-inv",
      title: "Inventory & QC Specialist",
      department: "Fulfillment & Quality",
      type: "Penuh Waktu (Full-time)",
      location: "Gudang Utama, Bekasi",
      requirements: [
        "Pengalaman 1-2 tahun di bidang inventory control atau quality checking",
        "Teliti dalam penghitungan SKU, barcode scanning, dan laporan selisih stok",
        "Familiar dengan operasional fulfillment e-commerce",
      ],
    },
    {
      id: "fleet-coord",
      title: "Fleet & Logistics Route Coordinator",
      department: "Distribusi & Transportasi",
      type: "Penuh Waktu (Full-time)",
      location: "Bekasi & Jabodetabek",
      requirements: [
        "Pengalaman mengelola armada pengiriman dan jadwal driver",
        "Memahami rute distribusi Jabodetabek dan jalur antarkota",
        "Mampu memonitor SLA pengiriman via GPS tracking secara disiplin",
      ],
    },
    {
      id: "it-support",
      title: "Supply Chain IT Support Specialist",
      department: "Teknologi & Sistem",
      type: "Penuh Waktu (Full-time)",
      location: "Bekasi (Hybrid)",
      requirements: [
        "Pendidikan min. D3/S1 Teknik Informatika / Sistem Informasi",
        "Memahami integrasi API marketplace, hardware barcode scanner, dan printer thermal",
        "Kemampuan troubleshooting jaringan LAN/WLAN di area gudang",
      ],
    },
  ];

  return (
    <>
      <SiteHeader />

      <main className="page-main">
        <div className="container">
          {/* Header Banner */}
          <div style={{ maxWidth: 740, marginBottom: 44 }}>
            <div className="eyebrow-pill">Peluang Karir & Talenta</div>
            <h1 className="h1" style={{ margin: "14px 0 16px" }}>
              Tumbuh dan Berkembang Bersama PT Guyub Tunggal Songo
            </h1>
            <p className="muted">
              Kami membuka kesempatan bagi para profesional yang berdedikasi untuk bersama-sama merevolusi industri pergudangan dan rantai pasok modern di Indonesia.
            </p>
          </div>

          {/* Benefits Grid */}
          <div style={{ marginBottom: 60 }}>
            <h2 className="h2" style={{ fontSize: 24, marginBottom: 20 }}>
              Mengapa Berkarir Bersama Kami?
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: 20,
              }}
            >
              {benefits.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="card" style={{ padding: 26 }}>
                  <div className="trust-icon-box" style={{ width: 44, height: 44, marginBottom: 16 }}>
                    <Icon size={22} />
                  </div>
                  <h3 style={{ fontSize: 17, fontWeight: 800, color: "var(--ink)", marginBottom: 8 }}>
                    {title}
                  </h3>
                  <p style={{ fontSize: 13.5, color: "var(--muted)", lineHeight: 1.6 }}>{desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Open Positions */}
          <div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 16, marginBottom: 24 }}>
              <div>
                <div className="eyebrow">Posisi Terbuka</div>
                <h2 className="h2" style={{ fontSize: 26, margin: 0 }}>
                  Lowongan Pekerjaan Aktif
                </h2>
              </div>
              <span className="eyebrow-pill" style={{ background: "#e2e8f0", color: "#334155", borderColor: "#cbd5e1" }}>
                {jobs.length} Posisi Tersedia
              </span>
            </div>

            <div style={{ display: "grid", gap: 20 }}>
              {jobs.map((job) => (
                <div key={job.id} className="card card-hover" style={{ padding: "28px 30px" }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      flexWrap: "wrap",
                      gap: 16,
                      marginBottom: 16,
                    }}
                  >
                    <div>
                      <div
                        style={{
                          fontSize: 12,
                          fontWeight: 800,
                          color: "var(--primary)",
                          textTransform: "uppercase",
                          letterSpacing: "0.06em",
                          marginBottom: 4,
                        }}
                      >
                        {job.department}
                      </div>
                      <h3 style={{ fontSize: 20, fontWeight: 800, color: "var(--ink)" }}>
                        {job.title}
                      </h3>
                    </div>

                    <a
                      href={`mailto:hr@guyubtunggalsongo.co.id?subject=Lamaran%20Pekerjaan%20-%20${encodeURIComponent(
                        job.title
                      )}`}
                      className="btn btn-primary btn-sm"
                    >
                      Lamar Posisi Ini <ArrowRight size={15} />
                    </a>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      gap: 20,
                      flexWrap: "wrap",
                      fontSize: 13,
                      color: "var(--muted)",
                      marginBottom: 16,
                      paddingBottom: 16,
                      borderBottom: "1px solid var(--line)",
                    }}
                  >
                    <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
                      <Clock size={15} color="var(--primary)" /> {job.type}
                    </span>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
                      <MapPin size={15} color="var(--primary)" /> {job.location}
                    </span>
                  </div>

                  <div>
                    <div style={{ fontSize: 13, fontWeight: 700, color: "var(--ink)", marginBottom: 8 }}>
                      Kualifikasi Utama:
                    </div>
                    <ul style={{ paddingLeft: 18, fontSize: 13, color: "var(--muted)", lineHeight: 1.7 }}>
                      {job.requirements.map((req, i) => (
                        <li key={i}>{req}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* General Application Card */}
          <div
            className="card"
            style={{
              padding: 32,
              marginTop: 40,
              background: "var(--bg-subtle)",
              borderColor: "var(--primary-border)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: 20,
            }}
          >
            <div>
              <h3 style={{ fontSize: 18, fontWeight: 800, color: "var(--ink)", marginBottom: 4 }}>
                Tidak menemukan posisi yang sesuai?
              </h3>
              <p style={{ fontSize: 14, color: "var(--muted)", margin: 0 }}>
                Kirimkan CV dan portofolio Anda ke database talent pool kami untuk lowongan mendatang.
              </p>
            </div>
            <a
              href="mailto:hr@guyubtunggalsongo.co.id?subject=General%20Talent%20Pool%20Submission"
              className="btn btn-secondary btn-sm"
            >
              <Mail size={16} /> Kirim CV ke HR
            </a>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="site-footer">
        <div className="container">
          <div className="footer-bottom" style={{ borderTop: "none", paddingTop: 0 }}>
            <span className="footer-copyright">© 2026 PT Guyub Tunggal Songo. Tim Rekrutmen & SDM.</span>
            <div className="footer-legal-links">
              <span className="footer-legal-link">Kawasan Industri Bekasi, Jawa Barat</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
