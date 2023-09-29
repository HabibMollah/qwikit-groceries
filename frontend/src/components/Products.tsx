import getData from '@/requests/getData';
import Product from './Product';

export default async function Products() {
  const products = await getData();

  if (products)
    return (
      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  py-10 mx-auto">
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
    );

  return (
    <section className="grid place-items-center">
      <p className="text-red-500 text-2xl">
        Something went wrong. Please try later.
      </p>
    </section>
  );
}
