import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jhony Wesley Laurindo | Estrategista Digital & Dev. Python",
  description: "Portfólio de Jhony Wesley Laurindo, transformando dados em insights e soluções de software inteligentes.",
  openGraph: {
    title: "Jhony Wesley Laurindo | Estrategista Digital & Dev. Python",
    description: "Conheça meus projetos em análise de dados, machine learning e desenvolvimento backend.",
    url: 'https://seu-dominio.com', // Futuramente, seu domínio principal
    siteName: 'Portfólio de Jhony W. Laurindo',
    images: [
      {
        url: '/og-image.png', // Crie uma imagem de preview de 1200x630 e coloque na pasta `public`
        width: 1200,
        height: 630,
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
};

// O resto do arquivo permanece o mesmo
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className="dark" style={{ scrollBehavior: 'smooth' }}>
      <body className={`${inter.className} bg-gray-950 text-gray-100 antialiased`}>
        {children}
      </body>
    </html>
  );
}