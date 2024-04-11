import React from "react";
import { MapContainer, TileLayer, Polygon } from "react-leaflet";
import L from "leaflet"; // Import Leaflet
import "leaflet/dist/leaflet.css";

const center = [1.4183340301778824, 124.98599678565967];

// Define the Leaflet icon outside of the component
const greenIcon = L.icon({
  iconUrl: "leaf-green.png",
  shadowUrl: "leaf-shadow.png",
  iconSize: [38, 95], // size of the icon
  shadowSize: [50, 64], // size of the shadow
  iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
  shadowAnchor: [4, 62], // the same for the shadow
  popupAnchor: [-3, -76], // point from which the popup should open relative to the iconAnchor
});

export default function Maaap() {
  return (
    <MapContainer
      center={center}
      zoom={10}
      style={{ width: "100vw", height: "100vh" }}
    >
      <TileLayer
        url="https://api.maptiler.com/maps/streets-v2/256/{z}/{x}/{y}.png?key=2j7jEwdmf24Pw7bYNaBJ"
        attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
      />
      {/* Use the defined icon here */}
      <Polygon
        pathOptions={{ color: "recyclin-center.png" }}
        positions={[
          [51.509, -0.08],
          [51.503, -0.06],
          [51.51, -0.047],
        ]}
        icon={greenIcon}
      />
    </MapContainer>
  );
}
