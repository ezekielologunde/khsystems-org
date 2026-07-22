import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

const CROWN_PATH =
  "M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#1d4ed8",
          borderRadius: "50%",
        }}
      >
        <svg width="19" height="19" viewBox="0 0 24 24" fill="none">
          <path d={CROWN_PATH} fill="#f2c94c" />
          <path d="M5 21h14" stroke="#f2c94c" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </div>
    ),
    size
  );
}
