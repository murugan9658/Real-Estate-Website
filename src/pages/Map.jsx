
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// 🔽 Define custom icons
const icons = {
  chennai: new L.Icon({
    iconUrl: "/images/house.png",
    iconSize: [40, 40],
    iconAnchor: [15, 40],
    popupAnchor: [0, -30],
  }),
  bangalore: new L.Icon({
    iconUrl: "/images/factory.png",
    iconSize: [40, 40],
    iconAnchor: [15, 40],
    popupAnchor: [0, -30],
  }),
  kerala: new L.Icon({
    iconUrl: "/images/residential.png",
    iconSize: [40, 40],
    iconAnchor: [15, 40],
    popupAnchor: [0, -30],
  }),
  salem: new L.Icon({
    iconUrl: "/images/mansion.png",
    iconSize: [40, 40],
    iconAnchor: [15, 40],
    popupAnchor: [0, -30],
  }),
  kanyakumari: new L.Icon({
    iconUrl: "/images/house.png",
    iconSize: [40, 40],
    iconAnchor: [15, 40],
    popupAnchor: [0, -30],
  }),
    madurai: new L.Icon({
    iconUrl: "/images/farmhouse.png",
    iconSize: [40, 40],
    iconAnchor: [15, 40],
    popupAnchor: [0, -30],
  }),
};

// 🔽 Places with custom icon references
const places = [
  { name: "Chennai", coords: [13.0827, 80.2707], icon: icons.chennai },
  { name: "Bangalore", coords: [12.9716, 77.5946], icon: icons.bangalore },
  { name: "Kerala", coords: [10.8505, 76.2711], icon: icons.kerala },
  { name: "Salem", coords: [11.6620, 78.1460], icon: icons.salem },
  { name: "Kanyakumari", coords: [8.0883, 77.5385], icon: icons.kanyakumari },
  { name: "Madurai", coords: [9.9252, 78.1198], icon: icons.madurai },
];

const SouthIndiaMap = () => {
  return (
    <div className="relative w-full  h-screen py-15 px-3">

      {/* 🔽 Background image (z-0) */}
        <div className="absolute inset-0 z-0">
                <img
                    src="/images/earth.jpg"
                    alt="Background"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black opacity-40"></div>
       </div>

      {/* 🔼 Foreground content (z-10) */}
      <div className="relative  z-10">

        <div className="  w-full  h-full">
          <MapContainer
            center={[11.5, 78.5]}
            zoom={7}
            className="h-[90vh] w-full rounded-2xl max-w-5xl mx-auto"
          >
            <TileLayer
              attribution='&copy; <a href="https://openstreetmap.org">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {places.map((place, index) => (
              <Marker key={index} position={place.coords} icon={place.icon}>
                <Popup>
                  <div className="text-sm font-medium text-center">
                    {place.name}
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </div>
    </div>
  );
};

export default SouthIndiaMap;
