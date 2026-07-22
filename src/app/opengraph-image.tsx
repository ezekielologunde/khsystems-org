import { ImageResponse } from "next/og";
import { company } from "@/lib/content/company";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const CROWN_PATH =
  "M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #0b1220 0%, #1d4ed8 100%)",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 72,
            height: 72,
            borderRadius: "50%",
            background: "#ffffff",
            marginBottom: 32,
          }}
        >
          <svg width="38" height="38" viewBox="0 0 24 24" fill="none">
            <path d={CROWN_PATH} fill="#1d4ed8" />
            <path d="M5 21h14" stroke="#1d4ed8" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>
        <div style={{ fontSize: 56, fontWeight: 700, lineHeight: 1.15, display: "flex" }}>
          {company.name}
        </div>
        <div style={{ fontSize: 28, marginTop: 20, color: "#dbe6ff", display: "flex" }}>
          {company.tagline}
        </div>
        <div style={{ fontSize: 22, marginTop: 40, color: "#b9cdf5", display: "flex" }}>
          Mental Health Services in Baltimore &amp; Laurel, Maryland
        </div>
      </div>
    ),
    size
  );
}
