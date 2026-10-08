import { ImageResponse } from "next/og";

export const alt = "Space Tourism: so, you want to travel to space";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 96px", background: "linear-gradient(135deg, #0b0d17 55%, #1d2340)" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 34, letterSpacing: 6, color: "#d0d6f9" }}>SO, YOU WANT TO TRAVEL TO</div>
          <div style={{ fontSize: 190, color: "#ffffff", lineHeight: 1.1 }}>SPACE</div>
          <div style={{ fontSize: 30, color: "#d0d6f9" }}>Destinations, crew and the technology behind the trip.</div>
        </div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 240, height: 240, borderRadius: 120, background: "#ffffff", color: "#0b0d17", fontSize: 36, letterSpacing: 2 }}>EXPLORE</div>
      </div>
    ),
    size,
  );
}
