import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

/* The supplied logo (app/icon.svg) on the site's night background, as the 180 x 180 Home Screen icon. */
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "#0b0d17" }}>
        <svg width="140" height="140" viewBox="0 0 48 48">
          <circle cx="24" cy="24" r="24" fill="#ffffff" />
          <path fill="#0b0d17" d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z" />
        </svg>
      </div>
    ),
    size,
  );
}
