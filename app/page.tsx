import { TickerStrip } from "@/components/TickerStrip";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { BigMarquee } from "@/components/BigMarquee";
import { Bento } from "@/components/Bento";
import { Showcase } from "@/components/Showcase";
import { Manifesto } from "@/components/Manifesto";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <TickerStrip />
      <Nav />
      <Hero />
      <BigMarquee />
      <Bento />
      <Showcase />
      <Manifesto />
      <Footer />
    </>
  );
}
