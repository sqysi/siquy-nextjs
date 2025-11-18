interface Category {
  id: number;
  name: string;
  image: string;
}

interface Props {
  category: Category;
}
export default function CategoryCard({ category }: Props) {
  return (
    <div className="rounded-lg overflow-hidden shadow hover:shadow-lg transition">
      <img src={category.image} className="w-full h-40 object-cover" />
      <div className="p-3 text-center font-semibold">{category.name}</div>
    </div>
  );
}
