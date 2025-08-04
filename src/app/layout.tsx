import type { Metadata } from "next";
import "./globals.css";
import { ViewProvider } from "@/context";

export const metadata: Metadata = {
  title: "Kabby | Freelance Next.js Developer & UI/UX Portfolio",
  description:
    "Hire a freelance web developer and UI/UX expert building modern, fast‑loading Next.js applications. See full stack projects and portfolio case studies.",
  keywords: [
    "freelance web developer",
    "web development services",
    "frontend development",
    "full stack development",
    "Next.js developer",
    "web developer portfolio",
    "web design and development",
    "UI UX developer",
  ],
  openGraph: {
    title: "Kabby | Freelance Next.js Developer & UI/UX Portfolio",
    description:
      "Explore a modern freelance portfolio built with Next.js. Full stack web developer delivering responsive UI/UX design for startups and brands.",
    url: "https://www.kabby.pro",
    siteName: "Kabby Pro",
    images: [
      {
        url: "https://www.kabby.pro/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Kabby web development portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kabby | Freelance Web Developer & UI/UX Expert",
    description:
      "Modern full-stack web developer portfolio using Next.js and React. View case studies and contact to hire.",
    images: ["https://www.kabby.pro/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ViewProvider>
          <main>{children}</main>
        </ViewProvider>
      </body>
    </html>
  );
}
