"use client";

import { useSearchContext } from "@/contexts/SearchContext";
import ProductType from "@/types/ProductType";
import Product from "./Product";

export default function ClientSideProducts({
  children,
  products,
}: {
  children: React.ReactNode;
  products: ProductType[];
}) {
  const { searchValue } = useSearchContext();
  if (searchValue)
    return (
      <section className="mx-auto grid grid-cols-1 justify-items-center gap-4 py-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products
          .filter((product) =>
            product.title.toLowerCase().includes(searchValue.toLowerCase()),
          )
          .map((product) => (
            <Product
              key={product.id}
              id={product.id}
              title={product.title}
              description={product.description}
              imageURL={product.imageURL}
            />
          ))}
      </section>
    );
  return <>{children}</>;
}
