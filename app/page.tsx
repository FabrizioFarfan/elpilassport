import { Nav }        from "@/components/Nav";
import { AWALoader }  from "@/components/AWALoader";
import { AWAHero }    from "@/components/AWAHero";
import { AWAMarquee } from "@/components/AWAMarquee";
import { AWABrands }  from "@/components/AWABrands";
import { AWACats }    from "@/components/AWACats";
import { AWAGallery } from "@/components/AWAGallery";
import { AWAStory }   from "@/components/AWAStory";
import { AWADrops }   from "@/components/AWADrops";
import { AWAStore }   from "@/components/AWAStore";
import { AWANews }    from "@/components/AWANews";
import { AWAFooter }  from "@/components/AWAFooter";

export default function Home() {
  return (
    <>
      <AWALoader />
      <Nav />
      <AWAHero />
      <AWAMarquee />
      <AWABrands />
      <AWACats />
      <AWAGallery />
      <AWAStory />
      <AWADrops />
      <AWAStore />
      <AWANews />
      <AWAFooter />
    </>
  );
}
