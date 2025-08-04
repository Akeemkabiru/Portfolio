import type { Metadata } from "next";
import "./globals.css";
import { ViewProvider } from "@/context";

export const metadata: Metadata = {
  title: "Software Engineer",
  description:
    "Professional Software Engineer, Frontend Developer and Backend Engineer",
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
