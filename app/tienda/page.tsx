import { Nav }       from "@/components/Nav";
import { Footer }    from "@/components/Footer";
import { PLPClient } from "@/components/PLPClient";

type SearchParams = {
  cat?:      string;
  drops?:    string;
  limitada?: string;
};

export default async function TiendaPage({
  searchParams,
}: {
  searchParams: Promise<SearchParams> | SearchParams;
}) {
  // Next.js 15+ makes searchParams async; support both
  const sp: SearchParams = searchParams instanceof Promise
    ? await searchParams
    : searchParams;

  return (
    <div className="page">
      <Nav />
      <PLPClient
        initialCat={sp.cat ?? "all"}
        initialDrops={sp.drops === "true"}
        initialLimitada={sp.limitada === "true"}
      />
      <Footer />
    </div>
  );
}
