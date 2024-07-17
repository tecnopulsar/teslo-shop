import { ProductsGrid, Title } from "@/components";
import { initialData } from "@/seed/seed";
import { headers } from 'next/headers'

function getClientIP() {
  const forwardedFor = headers().get('x-forwarded-for')
  return forwardedFor ? forwardedFor.split(',')[0].split(':')[3] : null
}

const products = initialData.products;

export default function Home() {
  let ip = getClientIP();
  console.log(ip);
  return (
    <>
      <Title title="Tienda" subtitle="Todos los productos" className="mb-2" />
      <ProductsGrid products={products} />
    </>
  );
}
