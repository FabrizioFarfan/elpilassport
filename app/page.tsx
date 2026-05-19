import { Nav }          from "@/components/Nav";
import { Hero }         from "@/components/Hero";
import { BigMarquee }   from "@/components/BigMarquee";
import { Categories }   from "@/components/Bento";
import { Bestsellers }  from "@/components/Showcase";
import { Editorial }    from "@/components/Manifesto";
import { Drops }        from "@/components/Drops";
import { TiendaFisica } from "@/components/TiendaFisica";
import { TrustStrip }   from "@/components/TrustStrip";
import { Newsletter }   from "@/components/Newsletter";
import { Footer }       from "@/components/Footer";

export default function Home() {
  return (
    <div className="page">
      <Nav />
      <Hero />
      <BigMarquee />
      <hr className="rule" />
      <Categories />
      <hr className="rule" />
      <Bestsellers />
      <Editorial />
      <Drops />
      <TiendaFisica />
      <TrustStrip />
      <Newsletter />
      <Footer />
    </div>
  );
}
