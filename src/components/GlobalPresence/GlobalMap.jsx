import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker
} from "react-simple-maps";

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const markers = [
  { name: "PAKISTAN", coordinates: [69.3451, 30.3753], status: "hub", offset: 18 },
  { name: "USA", coordinates: [-95.7129, 37.0902], status: "active", offset: -12 },
  { name: "UK", coordinates: [-3.4360, 55.3781], status: "active", offset: -12 },
  { name: "UAE", coordinates: [55.2708, 25.2048], status: "active", offset: 18 },
  { name: "VIETNAM", coordinates: [108.2772, 14.0583], status: "active", offset: 18 },
  { name: "GERMANY", coordinates: [10.4515, 51.1657], status: "active", offset: -12 },
  { name: "NIGERIA", coordinates: [8.6753, 9.0820], status: "active", offset: 18 },
];

const GlobalMap = () => {
  return (
    <div className="w-full bg-slate-50 py-16 px-4 rounded-3xl">
      <div className="max-w-7xl mx-auto">
        
        {/* Colorful Header */}
        <div className="mb-12 text-center md:text-left">
          <h2 className="text-4xl font-black text-slate-900 uppercase tracking-tighter">
            Global <span className="text-teal-600">Footprint</span>
          </h2>
          <p className="text-slate-500 font-medium">Spanning continents with quality healthcare solutions</p>
        </div>

        <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-2xl shadow-teal-900/5 p-4 md:p-8">
          <ComposableMap projectionConfig={{ scale: 200 }}>
            <Geographies geography={geoUrl}>
              {({ geographies }) =>
                geographies.map((geo) => {
                  // Check if this country is in our markers for highlighting
                  const isHighlighted = markers.some(m => m.name === geo.properties.name?.toUpperCase());
                  
                  return (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      fill={isHighlighted ? "#ccfbf1" : "#F8FAFC"} // Emerald tint for active countries
                      stroke={isHighlighted ? "#5eead4" : "#E2E8F0"}
                      strokeWidth={0.5}
                      style={{
                        default: { outline: "none" },
                        hover: { fill: "#f1f5f9", outline: "none" }
                      }}
                    />
                  );
                })
              }
            </Geographies>

            {markers.map(({ name, coordinates, status, offset }) => (
              <Marker key={name} coordinates={coordinates}>
                {/* Glowing Pulse Effect */}
                <circle
                  r={status === "hub" ? 8 : 6}
                  fill={status === "hub" ? "#0d9488" : "#ef4444"}
                  className="animate-ping opacity-20"
                />
                
                {/* Main Dot */}
                <circle
                  r={status === "hub" ? 4 : 3}
                  fill={status === "hub" ? "#0d9488" : "#ef4444"}
                  stroke="#fff"
                  strokeWidth={2}
                  className="drop-shadow-md"
                />
                
                {/* Dynamic Label Color */}
                <text
                  textAnchor="middle"
                  y={offset}
                  className="pointer-events-none"
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fill: status === "hub" ? "#0f766e" : "#b91c1c", // Darker teal/red for text
                    fontSize: "9px",
                    fontWeight: "800",
                    textTransform: "uppercase",
                    letterSpacing: "0.5px",
                    paintOrder: "stroke",
                    stroke: "#fff",
                    strokeWidth: "2px",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                  }}
                >
                  {name}
                </text>
              </Marker>
            ))}
          </ComposableMap>
        </div>

        {/* Legend with Color Cards */}
        <div className="mt-12 flex flex-wrap gap-4 justify-center">
          <div className="flex items-center gap-3 px-5 py-2 bg-teal-50 border border-teal-100 rounded-full">
            <div className="w-3 h-3 rounded-full bg-teal-600 shadow-lg shadow-teal-300"></div>
            <span className="text-[11px] font-black text-teal-900 uppercase tracking-widest">Seeyas Hub</span>
          </div>
          <div className="flex items-center gap-3 px-5 py-2 bg-red-50 border border-red-100 rounded-full">
            <div className="w-3 h-3 rounded-full bg-red-500 shadow-lg shadow-red-300"></div>
            <span className="text-[11px] font-black text-red-900 uppercase tracking-widest">Active Markets</span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default GlobalMap;