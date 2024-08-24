import { Inter, Lexend_Deca } from "next/font/google";
import "./globals.css";
import { ClientProvider } from "./api/ClientProvide";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const lexendDeca = Lexend_Deca({ subsets: ["latin"], variable: "--font-lexa" });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${lexendDeca.variable}`}>
        <ClientProvider>{children}</ClientProvider>
      </body>
    </html>
  );
}
