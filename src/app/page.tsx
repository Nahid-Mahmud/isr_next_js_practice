import Link from "next/link";

export default async function Products() {
  const res = await fetch("http://localhost:5000/products", {
    cache: "force-cache",
  });
  const products = (await res.json()) || [];
  // console.log(products);
  // [
  //   ({
  //     id: 1,
  //     productName: "Gaming Laptop",
  //     category: "Electronics",
  //     brand: "Dell",
  //     price: 1200,
  //     imageUrl: "https://via.placeholder.com/300x200?text=Gaming+Laptop",
  //   },
  //   {
  //     id: 2,
  //     productName: "Smartphone",
  //     category: "Electronics",
  //     brand: "Samsung",
  //     price: 800,
  //     imageUrl: "https://placehold.co/600x400",
  //   },
  //   {
  //     id: 3,
  //     productName: "Programming Book",
  //     category: "Books",
  //     brand: "O'Reilly",
  //     price: 50,
  //     imageUrl: "https://placehold.co/600x400",
  //   },
  //   {
  //     id: 4,
  //     productName: "Running Shoes",
  //     category: "Fashion",
  //     brand: "Nike",
  //     price: 150,
  //     imageUrl: "https://placehold.co/600x400",
  //   })
  // ];
  return (
    <div>
      <ol className="space-y-4 list-decimal ml-10">
        {products.map(
          (product: {
            id: number;
            productName: string;
            category: string;
            brand: string;
            price: number;
            imageUrl: string;
          }) => (
            <Link href={`/products/${product.id}`} key={product.id}>
              <li className="text-2xl">{product.productName}</li>
            </Link>
          )
        )}
      </ol>
    </div>
  );
}
