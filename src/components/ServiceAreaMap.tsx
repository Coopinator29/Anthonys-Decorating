import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const stokenchurchCoords: [number, number] = [51.66677088086126, -0.9021356750397019];

export const ServiceAreaMap: React.FC = () => {
  return (
    <section className="max-w-4xl mx-auto mt-10 px-6 py-8 bg-custom-silver text-blue-950 shadow-lg rounded-lg">
      <h2 className="text-3xl font-serif font-bold mb-4 drop-shadow-md">📍 Service Area</h2>
      <p className="mb-6 text-lg">We proudly serve Falmouth and surrounding communities.</p>

      <div className="rounded-lg overflow-hidden border border-white shadow-lg">
        <MapContainer center={stokenchurchCoords} zoom={13} scrollWheelZoom={false} className="h-[400px] w-full z-20" dragging={false}>
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