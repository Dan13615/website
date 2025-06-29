// ╔════════════════════════════════════════════════╗
// - Authors :
//     >> Daniil STEPANOV - { daniil.stepanov@epitech.eu }
//     >> Nathan TIROLF - { nathan.tirolf@epitech.eu }
// ╚════════════════════════════════════════════════╝

/* ----- IMPORTS ----- */
import { useEffect, useRef } from "react";
import * as L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix for default markers in some build environments
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
	iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
	iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
	shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

/* ----- INTERFACE ----- */
interface ContactMapProps {
	address: string;
	latitude: number;
	longitude: number;
}

/* ----- COMPONENT ----- */
export default function ContactMap({ address, latitude, longitude }: ContactMapProps) {
	const mapRef = useRef<HTMLDivElement>(null);
	const mapInstanceRef = useRef<L.Map | null>(null);

	useEffect(() => {
		if (!mapRef.current || mapInstanceRef.current) return;

		const map = L.map(mapRef.current).setView([latitude, longitude], 15);
		L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
			attribution: "© OpenStreetMap contributors",
		}).addTo(map);

		const customIcon = L.divIcon({
			html: `
        <div style="
          background-color: #8B4513;
          width: 30px;
          height: 30px;
          border-radius: 50% 50% 50% 0;
          transform: rotate(-45deg);
          border: 3px solid #fff;
          box-shadow: 0 2px 5px rgba(0,0,0,0.3);
          position: relative;
        ">
          <div style="
            width: 12px;
            height: 12px;
            background-color: #fff;
            border-radius: 50%;
            position: absolute;
            top: 6px;
            left: 6px;
            transform: rotate(45deg);
          "></div>
        </div>
      `,
			className: "custom-marker",
			iconSize: [30, 30],
			iconAnchor: [15, 30],
			popupAnchor: [0, -30],
		});

		L.marker([latitude, longitude], { icon: customIcon })
			.addTo(map)
			.bindPopup(
				`
        <div style="text-align: center; padding: 12px; font-family: Arial, sans-serif;">
          <strong style="color: #8B4513; font-size: 16px;">${address}</strong><br>
          <small style="color: #666; font-size: 12px;">Venez nous rendre visite !</small><br>
          <small style="color: #999; font-size: 11px;">🥖 Boulangerie artisanale</small>
        </div>
      `,
				{
					maxWidth: 200,
					className: "custom-popup",
				}
			)
			.openPopup();

		mapInstanceRef.current = map;

		return () => {
			if (mapInstanceRef.current) {
				mapInstanceRef.current.remove();
				mapInstanceRef.current = null;
			}
		};
	}, [latitude, longitude, address]);

	return <div ref={mapRef} className="w-full h-96 rounded-lg shadow-lg border-4 border-white/20" style={{ minHeight: "600px", maxWidth: "80%", placeSelf: "center" }} />;
}
