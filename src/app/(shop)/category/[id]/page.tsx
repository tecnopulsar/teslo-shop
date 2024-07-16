import { ProductsGrid, Title } from "@/components";
import { Category } from "@/interfaces";
import { initialData } from "@/seed/seed";
import { notFound } from "next/navigation";
import React from "react";

const seedProducts = initialData.products;

interface Props {
  params: {
    id: Category;
  };
}

const labels: Record<Category, string> = {
  men: "para hombres",
  women: "para mujeres",
  kid: "para niños",
  unisex: "para todos",
};

export default function CategoryPage({ params }: Props) {
  const { id } = params;
  const products = seedProducts.filter((product) => product.gender === id);

  // if ( (id !== "men") ) {
  //   notFound();
  // }

  return (
    <>
      <Title
        title={`Articulos ${labels[id]}`}
        subtitle="Todos los productos"
        className="mb-2"
      />
      <ProductsGrid products={products} />
    </>
  );
}
