// src/types/product.ts
export interface Product {
  id: number;
  name: string;
  price: number;
  oldPrice?: number;
  image: string;
  rating?: number;
}

export interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  return (
    <div className="border rounded-xl overflow-hidden shadow hover:-translate-y-1 hover:shadow-xl transition">
      <img src={product.image} className="w-full h-48 object-cover" />

      <div className="p-4">
        <h3 className="font-semibold mb-2">{product.name}</h3>
        <p className="text-blue-600 font-bold">
          {product.price.toLocaleString()}₫
        </p>
      </div>
    </div>
  );
}
