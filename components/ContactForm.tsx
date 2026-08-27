"use client";

import { FormEvent, useState } from "react";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      setLoading(false);

      if (!res.ok) {
        setError(data.message || "Terjadi kesalahan saat mengirim pesan.");
        return;
      }

      setDone(true);
      form.reset();
    } catch {
      setLoading(false);
      setError("Koneksi gagal. Silakan periksa jaringan internet Anda dan coba lagi.");
    }
  }

  if (done) {
    return (
      <div className="card" style={{ padding: "44px 28px", textAlign: "center" }}>
        <div
          style={{
            width: 64,
            height: 64,
            borderRadius: "50%",
            background: "var(--primary-light)",
            display: "grid",
            placeItems: "center",
            margin: "0 auto 16px",
          }}
        >
          <CheckCircle2 size={36} color="var(--primary)" />
        </div>
        <h3 className="h3" style={{ marginBottom: 8 }}>
          Permintaan Terkirim!
        </h3>
        <p className="muted" style={{ maxWidth: 420, margin: "0 auto 24px" }}>
          Terima kasih telah menghubungi kami. Tim konsultan logistik <strong>PT Guyub Tunggal Songo</strong> akan segera menghubungi Anda dalam waktu 1x24 jam kerja.
        </p>
        <button
          type="button"
          onClick={() => setDone(false)}
          className="btn btn-secondary btn-sm"
        >
          Kirim Pesan Lainnya
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="form-shell">
      <div className="form-grid">
        <div className="form-field">
          <label className="form-label" htmlFor="name">
            Nama Lengkap <span style={{ color: "#ef4444" }}>*</span>
          </label>
          <input
            id="name"
            name="name"
            required
            className="form-input"
            placeholder="Contoh: Budi Santoso"
          />
        </div>

        <div className="form-field">
          <label className="form-label" htmlFor="email">
            Alamat Email <span style={{ color: "#ef4444" }}>*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="form-input"
            placeholder="nama@perusahaan.com"
          />
        </div>

        <div className="form-field">
          <label className="form-label" htmlFor="phone">
            Nomor Telepon / WhatsApp
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            className="form-input"
            placeholder="0812-3456-7890"
          />
        </div>

        <div className="form-field">
          <label className="form-label" htmlFor="company">
            Nama Perusahaan / Brand
          </label>
          <input
            id="company"
            name="company"
            className="form-input"
            placeholder="PT / CV / Toko Anda"
          />
        </div>

        <div className="form-field full">
          <label className="form-label" htmlFor="service">
            Kebutuhan Layanan
          </label>
          <select id="service" name="service" defaultValue="" className="form-select">
            <option value="" disabled>
              -- Pilih Layanan yang Dibutuhkan --
            </option>
            <option value="Warehousing">Warehousing & Manajemen Penyimpanan</option>
            <option value="Fulfillment">E-Commerce & B2B Fulfillment (Pick, Pack, Ship)</option>
            <option value="Distribusi">Distribusi Antarkota & Last-Mile Delivery</option>
            <option value="Value Added Service">Value Added Service (Kitting, Labeling, Bundling)</option>
            <option value="Dedicated Supply Chain">Solusi Supply Chain Kustom / Lainnya</option>
          </select>
        </div>

        <div className="form-field full">
          <label className="form-label" htmlFor="message">
            Detail Kebutuhan & Estimasi Volume <span style={{ color: "#ef4444" }}>*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            className="form-textarea"
            placeholder="Ceritakan jenis produk, perkiraan volume order/hari, lokasi target pengiriman, atau SLA yang diharapkan..."
          />
        </div>
      </div>

      {error && (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            padding: "12px 16px",
            background: "#fef2f2",
            border: "1px solid #fecaca",
            borderRadius: "var(--radius-sm)",
            color: "#991b1b",
            fontSize: 14,
            marginTop: 16,
          }}
        >
          <AlertCircle size={18} style={{ flexShrink: 0 }} />
          <span>{error}</span>
        </div>
      )}

      <div style={{ marginTop: 24 }}>
        <button
          type="submit"
          className="btn btn-primary"
          disabled={loading}
          style={{ width: "100%", opacity: loading ? 0.7 : 1 }}
        >
          {loading ? (
            <>
              <Loader2 size={18} className="animate-spin" />
              Memproses Permintaan...
            </>
          ) : (
            <>
              Kirim Permintaan Konsultasi <Send size={16} />
            </>
          )}
        </button>
      </div>
    </form>
  );
}
