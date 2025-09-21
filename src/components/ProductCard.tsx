import Image from "next/image";

interface Product {
  id: number;
  productName: string;
  category: string;
  brand: string;
  price: number;
  imageUrl: string;
}

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  console.log(product.imageUrl);
  return (
    <div className="max-w-sm mx-auto bg-white rounded-lg shadow-md overflow-hidden">
      <Image
        src={product.imageUrl}
        height={500}
        width={500}
        alt={product.productName}
        className="w-full h-48 object-cover"
        unoptimized={true}
      />
      <div className="p-4">
        <h2 className="text-xl font-bold text-gray-800">{product.productName}</h2>
        <p className="text-gray-600">{product.category}</p>
        <p className="text-gray-500">{product.brand}</p>
        <p className="text-2xl font-semibold text-green-600 mt-2">${product.price}</p>
      </div>
    </div>
  );
}
