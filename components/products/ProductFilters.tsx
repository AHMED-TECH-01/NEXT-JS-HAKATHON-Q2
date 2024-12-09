export default function ProductFilters() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-4">Categories</h3>
        <div className="space-y-2">
          {['Living Room', 'Bedroom', 'Dining Room', 'Office', 'Outdoor'].map((category) => (
            <label key={category} className="flex items-center">
              <input type="checkbox" className="mr-2" />
              {category}
            </label>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Price Range</h3>
        <div className="space-y-2">
          <label className="flex items-center">
            <input type="radio" name="price" className="mr-2" />
            Under $100
          </label>
          <label className="flex items-center">
            <input type="radio" name="price" className="mr-2" />
            $100 - $500
          </label>
          <label className="flex items-center">
            <input type="radio" name="price" className="mr-2" />
            $500 - $1000
          </label>
          <label className="flex items-center">
            <input type="radio" name="price" className="mr-2" />
            Over $1000
          </label>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Material</h3>
        <div className="space-y-2">
          {['Wood', 'Metal', 'Glass', 'Fabric', 'Leather'].map((material) => (
            <label key={material} className="flex items-center">
              <input type="checkbox" className="mr-2" />
              {material}
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}