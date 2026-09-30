import { ImageResponse } from "next/og";

export const alt = "Jenkins Uwagbai, Software Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#2A44F5",
          color: "#F4F1FF",
          padding: 72,
        }}
      >
        <div style={{ display: "flex", fontSize: 36, fontWeight: 700 }}>jenkinsuwagbai.online</div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 128, fontWeight: 800, lineHeight: 1 }}>
            Jenkins Uwagbai
          </div>
          <div style={{ display: "flex", fontSize: 48, marginTop: 24 }}>
            Software Developer. Frontend and automation.
          </div>
        </div>
        <div style={{ display: "flex", gap: 16 }}>
          {["React", "Next.js", "TypeScript", "Supabase"].map((t) => (
            <div
              key={t}
              style={{
                display: "flex",
                background: "#FFD23F",
                color: "#0F1B2D",
                fontSize: 30,
                fontWeight: 700,
                padding: "10px 28px",
                borderRadius: 999,
                border: "3px solid #0F1B2D",
              }}
            >
              {t}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size },
  );
}