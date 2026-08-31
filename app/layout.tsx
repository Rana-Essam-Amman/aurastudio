import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aura Studio | AI Video Generator",
  description: "Studio-grade AI video generation. Every top model in one workspace.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
