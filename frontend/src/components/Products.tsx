import getData from '@/requests/getData';

export default async function Products() {
  const products = await getData();

  if (products)
    return (
      <section className="flex flex-row flex-wrap">
        {products.map((product) => (
          <p key={product.id}>{product.title}</p>
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
