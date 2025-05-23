const CategoryFilter = ({ selectedCategory, onSelect }) => {
  const categories = ["All", "For Rent", "For Sale"];

  return (
    <div className="flex gap-4 mb-6">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onSelect(cat)}
          className={`px-4 py-2 rounded-lg italic cursor-pointer font-semibold ${
            selectedCategory === cat ? "bg-blue-600 underline text-white " : "bg-gray-200"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};
export default CategoryFilter;