import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Chrome Extension Privacy Scanner – Audit Extensions for Privacy Violations",
  description: "Scan Chrome extensions for excessive permissions, data collection practices, and privacy policy violations. Get detailed compliance reports with risk scoring."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="c319fcb1-158f-4793-8ff9-43747a099905"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
