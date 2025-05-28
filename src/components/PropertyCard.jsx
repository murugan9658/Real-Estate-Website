const PropertyCard = ({ item }) => {
  return (
    <div className="bg-white shadow-md hover:shadow-2xl transition duration-300 mx-auto rounded-2xl overflow-hidden w-full max-w-sm">
      <div className="relative">
        <img src={item.image} alt={item.title} className="w-full h-56 hover:scale-105 transition-transform duration-500 object-fill" />
        <span className={`absolute bottom-2 left-2 z-10 text-xs font-bold px-2 py-1 font-playfair rounded-full ${
          item.status === "For Rent" ? "bg-blue-600 text-white" : "bg-emerald-500 text-white"
        }`}>
          {item.status}
        </span>
      </div>
      <div className="p-4 space-y-2">
        <h2 className="text-xl font-bold font-playfair">{item.title}</h2>
        <p className="text-sm text-gray-500">{item.address}</p>
        <p className="text-yellow-600 font-bold text-lg">{item.price}</p>
        <div className="flex justify-between mt-2 text-sm">
          <div>🛏 {item.beds} Beds</div>
          <div>🛁 {item.baths} Baths</div>
          <div>🛋 {item.hall} Hall</div>
        </div>
        <hr />
        <div className="text-sm mt-2">
          <h3 className="font-semibold text-emerald-600 font-playfair mb-1">Other Details</h3>
          <ul className="list-disc list-inside text-gray-600">
            {item.kitchen.map((detail, idx) => (
              <li key={idx}>{detail}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default PropertyCard;
