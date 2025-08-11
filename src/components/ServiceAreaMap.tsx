// components/ServiceAreaMap.tsx
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const stokenchurchCoords: [number, number] = [51.66677088086126, -0.9021356750397019];

const ServiceAreaMap: React.FC = () => {
  return (
    <section
      id="service-area"
      className="max-w-4xl mx-auto mt-10 px-4 sm:px-6 lg:px-12 py-8 bg-custom-silver text-blue-950 shadow-xl rounded-xl"
      aria-label="Service area map"
    >
      <h2 className="text-2xl sm:text-3xl font-serif font-bold mb-4 drop-shadow-md">
        📍 Service Area
      </h2>
      <p className="mb-6 text-base sm:text-lg">
        All around the High Wycombe to Reading area.
      </p>

      <div className="rounded-lg overflow-hidden border border-white shadow-lg">
        <MapContainer
          center={stokenchurchCoords}
          zoom={13}
          scrollWheelZoom={false}
          className="h-[300px] sm:h-[400px] w-full z-10"
          dragging={true}
          style={{ touchAction: 'none' }}
        >
          <TileLayer
            attribution='&copy; OpenStreetMap contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={stokenchurchCoords}>
            <Popup className="text-sm font-medium">Anthony's Decorating</Popup>
          </Marker>
        </MapContainer>
      </div>
    </section>
  );
};

export default ServiceAreaMap