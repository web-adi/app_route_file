import localFont from "next/font/local";
import Wrapper from "@/layout/Wrapper/Wrapper";
import Banner from "@/Components/Banner/Banner";
import FlashSales from "@/Components/FlashSales/FlashSales";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  return (
    <Wrapper>
      <Banner />
      <FlashSales />
    </Wrapper>
  );
}
