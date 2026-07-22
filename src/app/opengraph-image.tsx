import { ImageResponse } from "next/og";
import { company } from "@/lib/content/company";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

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
          background: "linear-gradient(135deg, #1b3a5c 0%, #0f6e6a 100%)",
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
            color: "#0f6e6a",
            fontSize: 36,
            fontWeight: 700,
            marginBottom: 32,
          }}
        >
          K
        </div>
        <div style={{ fontSize: 56, fontWeight: 700, lineHeight: 1.15, display: "flex" }}>
          {company.name}
        </div>
        <div style={{ fontSize: 28, marginTop: 20, color: "#e0efee", display: "flex" }}>
          {company.tagline}
        </div>
        <div style={{ fontSize: 22, marginTop: 40, color: "#c9dedd", display: "flex" }}>
          Mental Health Services in Baltimore &amp; Laurel, Maryland
        </div>
      </div>
    ),
    size
  );
}
