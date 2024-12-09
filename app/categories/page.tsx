import { categories } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';

export default function CategoriesPage() {
  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold mb-8">Shop by Category</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((category) => (
          <Link
            key={category.id}
            href={`/categories/${category.id}`}
            className="group relative overflow-hidden rounded-lg"
          >
            <div className="aspect-[4/3] relative">
              <Image
                src={category.image}
                alt={category.name}
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 transition-opacity group-hover:bg-black/50" />
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <h2 className="text-2xl font-bold text-white mb-2">{category.name}</h2>
                <p className="text-white/90 mb-2">{category.description}</p>
                <span className="text-white/80 text-sm">{category.itemCount} items</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}