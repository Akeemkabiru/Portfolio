import type { Metadata } from "next";
import "./globals.css";
import { ViewProvider } from "@/context";

export const metadata: Metadata = {
  title:
    "Kabby - Senior Software Engineer | Full-Stack Developer | Expert in Next.js and Express.js",
  description:
    "Kabby is a Senior Software Engineer and Full-Stack Developer with expertise in building scalable, high-performance web applications using Next.js, React, Node.js, Express.js, and Typescript. With years of experience in modern web development practices, Kabby delivers reliable, secure, and maintainable solutions for businesses and tech startups. Explore Kabby's portfolio to see the impact of successful, real-world full-stack projects, including robust backend architectures and dynamic frontend implementations.",
  keywords: [
    "Senior Software Engineer",
    "Full-Stack Developer",
    "Next.js Developer",
    "Express.js Developer",
    "Node.js Developer",
    "Typescript Developer",
    "Backend Developer",
    "Web Application Developer",
    "Software Engineering Portfolio",
    "Web Development Services",
    "Backend Architecture",
    "React Developer",
  ],
  openGraph: {
    title:
      "Kabby | Senior Software Engineer | Full-Stack Developer | Next.js and Express.js Expert",
    description:
      "Explore Kabby's senior-level software engineering portfolio, showcasing scalable, high-performance web applications built with Next.js, Express.js, and Typescript. Learn about the backend and frontend technologies that power dynamic digital solutions for businesses.",
    url: "https://www.kabby.pro",
    siteName: "Kabby",
    images: [
      {
        url: "https://www.kabby.pro/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Kabby's web development portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Kabby | Senior Software Engineer | Full-Stack Developer | Backend and Frontend Expertise",
    description:
      "View Kabby's senior-level software engineering portfolio featuring Next.js, Express.js, Typescript, and modern web application technologies. See case studies and get in touch to collaborate.",
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
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />

        <meta name="android-chrome" content="true" />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/android-chrome-192x192.png"
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Kabby",
              url: "https://www.kabby.pro",
              description:
                "Senior Software Engineer and Full-Stack Developer Portfolio showcasing expertise in Next.js, Express.js, Node.js, and Typescript for scalable web applications.",
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
              jobTitle: "Senior Software Engineer | Full-Stack Developer",
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
                "Backend Development",
                "Full-Stack Web Development",
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
