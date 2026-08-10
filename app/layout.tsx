import type { Metadata, Viewport } from "next";
import "./globals.css";

const isGitHubPagesBuild = process.env.GITHUB_PAGES === "true";
const assetBase = isGitHubPagesBuild ? "/customdance-project-page" : "";
const canonicalUrl = "https://xulongt.github.io/customdance-project-page/";
const paperPdfUrl = "https://arxiv.org/pdf/2608.06722";
const paperTitle =
  "CustomDance: Customized 3D Dance Generation with Coarse-to-Fine Human-Centered Interactive Control";

export const metadata: Metadata = {
  metadataBase: new URL("https://xulongt.github.io"),
  title: paperTitle,
  description:
    "CustomDance is an interactive, human-centered system for customized 3D dance generation through music-aware planning, phrase retrieval, and iterative refinement.",
  alternates: {
    canonical: canonicalUrl,
    types: {
      "application/pdf": paperPdfUrl,
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  keywords: [
    "CustomDance",
    "3D dance generation",
    "interactive choreography",
    "human-in-the-loop",
    "3D human motion generation",
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
    title: paperTitle,
    description:
      "Interactive, human-centered 3D choreography authoring through music-aware planning, phrase retrieval, and iterative refinement.",
    type: "website",
    url: canonicalUrl,
    images: [
      {
        url: `${assetBase}/assets/media/hero-teaser.webp`,
        width: 2800,
        height: 870,
        alt: "CustomDance choreography results.",
      },
    ],
  },
  other: {
    citation_title: paperTitle,
    citation_pdf_url: paperPdfUrl,
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
