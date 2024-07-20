import prisma from "../lib/prisma";
import { initialData } from "./seed";

async function main() {
  //console.log(initialData);

  // 1. Borrar registros existentes
  await prisma.productImage.deleteMany();
  await prisma.product.deleteMany();
  await prisma.category.deleteMany();

  // 2. Insertar Categorias
  const { categories, products } = initialData;

  const categoriesData = categories.map((name) => ({
    name,
  }));

  await prisma.category.createMany({
    data: categoriesData,
  });

  const categoriesDB = await prisma.category.findMany();
  // console.log(categoriesDB);
  const categoriesMap = categoriesDB.reduce((map, category) => {
    map[category.name.toLowerCase()] = category.id;
    return map;
  }, {} as Record<string, string>);
  // console.log(categoriesMap);

  // Productos
  // const { images, type, ...product1 } = products[0];
  // await prisma.product.createMany({
  //   data: {
  //     ...product1,
  //     categoryId: categoriesMap[type],
  //   },
  // });

  products.forEach(async (product) => {
    const { type, images, ...rest } = product;
    const dbProduct = await prisma.product.create({
      data: {
        ...rest,
        categoryId: categoriesMap[type.toLowerCase()],
      },
    });

    // Images
    const imagesData = images.map((image) => ({
      url: image,
      productId: dbProduct.id,
    }));

    await prisma.productImage.createMany({
      data: imagesData,
    });
  });

  console.log("Seed ejecutado correctamente");
}

(() => {
  if (process.env.NODE_ENV === "production") return;

  main();
})();
