import ProductCard from "../../../components/ProductCard";

export default async function page({ params }: { params: { id: string } }) {
  const res = await fetch(`http://localhost:5000/products/${params.id}`, {
    next: {
      revalidate: 30,
      tags: [`products`],
    },
  });
  const product = await res.json();
  console.log(product);
  return (
    <div>
      <ProductCard product={product} />
    </div>
  );
}
