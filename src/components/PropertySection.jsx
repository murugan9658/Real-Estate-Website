import PropertyCard from "../components/PropertyCard";
import CategoryFilter from "../components/CategoryFilter";
import { useState } from "react";
import { products } from "../data/Products.js";

const PropertySection = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filtered = selectedCategory === "All"
    ? products
    : products.filter((item) => item.status === selectedCategory);

  return (
    <div className="min-h-screen max-w-6xl mx-auto shadow-black shadow-lg bg-gray-100 p-6">
      <h1 className="text-3xl text-center font-bold mb-6">
        <a className="py-1 px-2 bg-cyan-500 rounded-lg font-playfair text-white">Find Your Property</a>
      </h1>

      <div className="flex items-center justify-center mb-4">
        <CategoryFilter
          selectedCategory={selectedCategory}
          onSelect={setSelectedCategory}
        />
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-6">
        {filtered.map((item) => (
          <PropertyCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default PropertySection;
