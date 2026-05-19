import { notFound } from "next/navigation";
import { PRODUCTS }  from "@/lib/data";
import { Nav }       from "@/components/Nav";
import { Footer }    from "@/components/Footer";
import { PDPClient } from "@/components/PDPClient";

type Params = { id: string };

export default async function ProductoPage({
  params,
}: {
  params: Promise<Params> | Params;
}) {
  const { id } = params instanceof Promise ? await params : params;
  const product = PRODUCTS.find((p) => p.id === id);

  if (!product) notFound();

  return (
    <div className="page">
      <Nav />
      <PDPClient product={product} />
      <Footer />
    </div>
  );
}

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ id: p.id }));
}
