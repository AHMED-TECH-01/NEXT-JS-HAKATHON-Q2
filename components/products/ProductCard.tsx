'use client';

import { Product } from '@/lib/types';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { dispatch } = useCart();

  const addToCart = () => {
    dispatch({ type: 'ADD_ITEM', payload: product });
  };

  return (
    <div className="group relative">
      <Link href={`/products/${product.id}`}>
        <div className="aspect-square relative overflow-hidden rounded-lg">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-transform group-hover:scale-105"
          />
          {product.discount && (
            <span className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded text-sm">
              {product.discount}% OFF
            </span>
          )}
        </div>
      </Link>
      
      <div className="mt-4">
        <Link href={`/products/${product.id}`}>
          <h3 className="text-lg font-semibold">{product.name}</h3>
        </Link>
        <p className="text-muted-foreground text-sm mb-2">{product.description}</p>
        <div className="flex items-center justify-between">
          <div>
            <span className="font-bold">${product.price}</span>
            {product.discount && (
              <span className="text-muted-foreground line-through ml-2">
                ${(product.price * (1 + product.discount / 100)).toFixed(2)}
              </span>
            )}
          </div>
          <Button size="icon" onClick={addToCart}>
            <ShoppingCart className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}