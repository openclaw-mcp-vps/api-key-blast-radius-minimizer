import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "API Key Blast Radius Minimizer",
  description: "Minimize damage when API keys leak. Automatically scope API keys to minimum required permissions and monitor for unauthorized usage patterns."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="aababb47-51b2-45b5-a073-ef67a5c86340"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
