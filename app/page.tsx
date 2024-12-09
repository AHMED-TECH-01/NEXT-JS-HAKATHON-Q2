import { Button } from '@/components/ui/button';
import { products } from '@/lib/data';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?w=2000&auto=format&fit=crop"
            alt="Hero background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Welcome to ASTRO
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Transform your space with our curated collection of modern furniture and home decor
          </p>
          <Button asChild size="lg">
            <Link href="/products">Shop Now</Link>
          </Button>
        </div>
      </section>

      {/* Featured Products */}
      <section className="container py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.slice(0, 3).map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.id}`}
              className="group"
            >
              <div className="relative aspect-square mb-4 overflow-hidden rounded-lg">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <h3 className="font-semibold mb-2">{product.name}</h3>
              <p className="text-muted-foreground mb-2">
                {product.description}
              </p>
              <p className="font-bold">${product.price}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-muted py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Free Shipping</h3>
              <p className="text-muted-foreground">
                On orders over $50
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Secure Payment</h3>
              <p className="text-muted-foreground">
                100% secure payment
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">24/7 Support</h3>
              <p className="text-muted-foreground">
                Dedicated support
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}