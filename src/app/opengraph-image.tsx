import { ImageResponse } from "next/og";
import { site } from "@/data/site";

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
          background: "#09090b",
          backgroundImage:
            "radial-gradient(ellipse 60% 60% at 15% 10%, rgba(232,165,76,0.14), transparent)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            fontSize: 26,
            fontFamily: "monospace",
            color: "#9a9aa2",
          }}
        >
          marciosouza<span style={{ color: "#e8a54c" }}>dev</span>
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 28,
            fontSize: 60,
            fontWeight: 700,
            color: "#f5f5f7",
            lineHeight: 1.15,
            maxWidth: 920,
          }}
        >
          {site.role}
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 24,
            fontSize: 26,
            color: "#9a9aa2",
          }}
        >
          Frontend · Full Stack · UI · Produtos Digitais
        </div>
      </div>
    ),
    { ...size },
  );
}
