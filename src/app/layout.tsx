import type { Metadata } from "next";
import "./globals.css";
import { ViewProvider } from "@/context";

export const metadata: Metadata = {
  title: "Kabby | Freelance Next.js Developer & UI/UX Portfolio",
  description:
    "Hire a freelance web developer and UI/UX expert building modern, fast‑loading Next.js applications. See full stack projects and portfolio case studies.",
  keywords: [
    "web development services",
    "frontend development",
    "full stack development",
    "Next.js developer",
    "web developer portfolio",
    "web design and development",
    "Backend Developer",
    "Backend Developement",
    "React Developer",
    "Typescript",
    "Website Designers",
  ],
  openGraph: {
    title:
      "Kabby | Next.js, Express.js, Typescript, Fullstack Developer, Software Engineer Portfolio",
    description:
      "Explore a modern software engineer portfolio built with Next.js, Typescript and Framermotion. Full stack web developer delivering responsive UI/UX design for startups and brands.",
    url: "https://www.kabby.pro",
    siteName: "Kabby",
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
    title:
      "Kabby | Software Engineer | Fullstack Developer | Backend Developer | Frontend Developer",
    description:
      "Modern full-stack web developer portfolio using Next.js and Typescript. View case studies and contact to hire.",
    images: ["https://www.kabby.pro/og-image.jpg"],
  },
};

// app/layout.tsx
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Kabby",
              url: "https://www.kabby.pro",
              description:
                "Software Engineer, Fullstack Developer, Frontend Developer, Backend Developer Developer Portfolio.",
              publisher: {
                "@type": "Person",
                name: "Kabby",
                url: "https://www.kabby.pro",
              },
              potentialAction: {
                "@type": "SearchAction",
                target: "https://www.kabby.pro/search?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Kabby",
              url: "https://www.kabby.pro",
              sameAs: [
                "https://github.com/akeemkabiru",
                "https://www.linkedin.com/in/kabiruakeem",
                "https://twitter.com/kabiruakem",
              ],
              jobTitle: "Fullstack | Frontend | Backend Web Developer",
              worksFor: {
                "@type": "Organization",
                name: "Kabby",
              },
              alumniOf: {
                "@type": "CollegeOrUniversity",
                name: "Obafemi Awolowo University",
              },
              knowsAbout: [
                "Next.js",
                "React",
                "Express.js",
                "Node.js",
                "Typescript",
                "MongoDB",
                "SQL Database",
                "Frontend Development",
                "Backend Development",
                "Full Stack Web Development",
              ],
            }),
          }}
        />
      </head>
      <body>
        <ViewProvider>
          <main>{children}</main>
        </ViewProvider>
      </body>
    </html>
  );
}
