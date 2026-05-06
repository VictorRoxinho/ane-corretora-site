import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ane França Corretora | Minha Casa Minha Vida em Salvador/BA",
  description:
    "Corretora oficial do Minha Casa Minha Vida em Salvador e região. Apartamentos com subsídio de até R$ 55.000, parcelas que cabem no bolso e sem burocracia. Simule grátis pelo WhatsApp.",
  keywords:
    "minha casa minha vida salvador, corretora imóveis salvador ba, apartamento mcmv salvador, financiamento imóvel salvador, ane franca corretora, apartamento subsidiado salvador",
  authors: [{ name: "Ane França Corretora" }],
  metadataBase: new URL("https://corretoraanefranca.com.br"),
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "https://corretoraanefranca.com.br/",
    siteName: "Ane França Corretora",
    title: "Ane França Corretora | Minha Casa Minha Vida em Salvador/BA",
    description:
      "Corretora oficial do Minha Casa Minha Vida em Salvador e região. Apartamentos com subsídio de até R$ 55.000, parcelas que cabem no bolso e sem burocracia.",
    images: [
      {
        url: "/images/banner-mrv-bela-vista.jpeg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ane França Corretora | Minha Casa Minha Vida em Salvador/BA",
    description:
      "Corretora oficial do Minha Casa Minha Vida em Salvador e região. Simule grátis pelo WhatsApp.",
    images: ["/images/banner-mrv-bela-vista.jpeg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  name: "Ane França Corretora de Imóveis",
  description:
    "Corretora oficial do programa Minha Casa Minha Vida em Salvador e região. Especializada em apartamentos MCMV para famílias baianas.",
  url: "https://corretoraanefranca.com.br",
  telephone: "+5571998193275",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Salvador",
    addressRegion: "BA",
    addressCountry: "BR",
  },
  areaServed: [
    { "@type": "City", name: "Salvador" },
    { "@type": "City", name: "Camaçari" },
    { "@type": "City", name: "Lauro de Freitas" },
  ],
  sameAs: [
    "https://instagram.com/anefranca.corretora",
    "https://wa.me/5571998193275",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Figtree:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
