import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Container } from "./components/Container";
import Header from "./components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: 'The Blog - Este é um blog com Next.js',
    template: '%s | The Blog'
  },
  description: 'Meu blog aleatório'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Container>
          <Header />
          {children}
          <footer><h1 className='text-6x1 font-bold text-center py-8'>footer</h1></footer>
        </Container>
      </body>
    </html>
  );
}
