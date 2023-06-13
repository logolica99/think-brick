import "./globals.css";
import { Inter, Montserrat, Josefin_Sans } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});
const josefin_sans = Josefin_Sans({
  subsets: ["latin"],
  variable: "--font-josefin",
});

export const metadata = {
  title: "Think Bricks",
  description: "Best IT solution and we bring success to you",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${montserrat.variable} ${josefin_sans.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
