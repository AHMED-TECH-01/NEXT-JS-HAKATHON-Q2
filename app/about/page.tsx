import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="container py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">About ASTRO</h1>
        
        <div className="relative h-[400px] mb-8 rounded-lg overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&auto=format&fit=crop"
            alt="ASTRO showroom"
            fill
            className="object-cover"
          />
        </div>

        <div className="prose prose-lg max-w-none">
          <p className="lead text-lg text-muted-foreground mb-6">
            ASTRO is a premier destination for contemporary home furniture and decor, 
            bringing together exceptional design, quality craftsmanship, and sustainable practices.
          </p>

          <div className="grid gap-8 mb-12">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
              <p className="text-muted-foreground">
                Founded in 2023, ASTRO emerged from a passion for creating living spaces that inspire. 
                We believe that well-designed furniture has the power to transform not just rooms, 
                but the way we live in them.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
              <p className="text-muted-foreground">
                To provide exceptional home furnishings that combine aesthetics with functionality, 
                while maintaining our commitment to sustainability and ethical manufacturing practices.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                  Quality craftsmanship in every piece
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                  Sustainable materials and practices
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                  Customer satisfaction as our priority
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                  Innovation in design and function
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}