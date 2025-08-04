import Home from "@/components/main";

export const metadata = {
  title: "Kabiru Akeem – Software Engineer | Next.js, TypeScript, Node.js",
  description:
    "Kabiru Akeem is a software engineer specializing in building scalable, high-performance web applications using Next.js, TypeScript, Node.js, and modern web technologies.",
  keywords:
    "Kabiru Akeem, Software Engineer, Next.js Developer, TypeScript Developer, Node.js Developer, Full-Stack Engineer, Express.js, Web Application Development, JavaScript, React, Backend Developer, Frontend Developer, Kabiru Akeem Portfolio",
  openGraph: {
    title: "Kabiru Akeem – Software Engineer | Next.js, TypeScript, Node.js",
    description:
      "Explore the professional portfolio of Kabiru Akeem, a software engineer focused on performance, clean architecture, and user-centric design with technologies like Next.js, Node.js, and TypeScript.",
    url: "https://www.kabby.pro",
    siteName: "Kabby Pro",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://www.kabby.pro/og-image.png",
        width: 1200,
        height: 630,
        alt: "Kabiru Akeem – Software Engineer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kabiru Akeem – Software Engineer | Next.js, TypeScript, Node.js",
    description:
      "Discover projects and code insights from Kabiru Akeem, a software engineer who builds modern, scalable web apps using Next.js, TypeScript, and Node.js.",
    creator: "@kabbydev",
    images: ["https://www.kabby.pro/og-image.png"],
  },
};

export default function Page() {
  return <Home />;
}
