import type { Metadata, Viewport } from "next";
import "./globals.css";

const isGitHubPagesBuild = process.env.GITHUB_PAGES === "true";
const assetBase = isGitHubPagesBuild ? "/customdance-project-page" : "";

export const metadata: Metadata = {
  title: {
    default: "CustomDance | Interactive 3D Choreography Authoring",
    template: "%s | CustomDance",
  },
  description:
    "CustomDance is a coarse-to-fine, human-in-the-loop system for customized 3D dance generation.",
  keywords: [
    "CustomDance",
    "3D dance generation",
    "interactive choreography",
    "human-in-the-loop",
    "SIGGRAPH Asia 2026",
  ],
  authors: [
    { name: "Xulong Tang" },
    { name: "Kaixing Yang" },
    { name: "Xiaohu Guo" },
    { name: "Balakrishnan Prabhakaran" },
    { name: "Rawan Alghofaili" },
  ],
  icons: {
    icon: `${assetBase}/favicon.png`,
  },
  openGraph: {
    title: "CustomDance",
    description:
      "Customized 3D dance generation through coarse-to-fine human-centered authoring.",
    type: "website",
    images: [
      {
        url: `${assetBase}/assets/media/hero-teaser.webp`,
        width: 2800,
        height: 870,
        alt: "CustomDance choreography results.",
      },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: "#090b0c",
  colorScheme: "dark light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
