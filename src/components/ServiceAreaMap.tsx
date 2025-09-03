// components/ServiceAreaMap.tsx
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const stokenchurchCoords: [number, number] = [51.66677088086126, -0.9021356750397019];

const ServiceAreaMap: React.FC = () => {
  return (
    <div>
      <h2 className="text-2xl sm:text-3xl font-serif font-bold mb-4 drop-shadow-md text-white">
        📍 Service Area
      </h2>
      <p className="mb-6 text-base sm:text-lg text-white">
        All around the High Wycombe to Reading area.
      </p>

      <div className="rounded-lg overflow-hidden border border-white shadow-lg">
        <MapContainer
          center={stokenchurchCoords}
          zoom={10}
          scrollWheelZoom={false}
          className="h-[300px] sm:h-[400px] w-full z-10"
          dragging={false}
          style={{ touchAction: 'none' }}
          zoomControl={false}
        >
          <TileLayer
            attribution='&copy; OpenStreetMap contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        </MapContainer>
      </div>
      </div>
  );
};

export default ServiceAreaMap