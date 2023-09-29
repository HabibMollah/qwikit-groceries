import getData from "@/requests/getData";
import Product from "./Product";
import ClientSideProducts from "./ClientSideProducts";

export default async function Products() {
  const products = await getData();

  if (products)
    return (
      <>
        <ClientSideProducts products={products}>
          <section className="mx-auto grid grid-cols-1 justify-items-center gap-4 py-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {products.map((product) => (
              <Product
                key={product.id}
                id={product.id}
                title={product.title}
                description={product.description}
                imageURL={product.imageURL}
              />
            ))}
          </section>
        </ClientSideProducts>
      </>
    );

  return (
    <section className="grid place-items-center">
      <p className="text-2xl text-red-500">
        Something went wrong. Please try later.
      </p>
    </section>
  );
}
