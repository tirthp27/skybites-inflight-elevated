import { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

// Airport coordinates (lat, lon) - same as before
const airportCoordinates: Record<string, [number, number]> = {
  // North America
  "KTEB": [40.8501, -74.0606], // Teterboro
  "KLAS": [36.0840, -115.1537], // Las Vegas
  "KDAL": [32.8471, -96.8518], // Dallas
  "KVNY": [34.2098, -118.4897], // Los Angeles
  "KHPN": [41.0670, -73.7076], // Westchester County
  "KIAD": [38.9445, -77.4558], // Washington
  "KPBI": [26.6832, -80.0956], // West Palm Beach
  "KHOU": [29.6454, -95.2789], // Houston
  "KMDW": [41.7868, -87.7522], // Chicago
  "CYYZ": [43.6777, -79.6248], // Toronto
  "KSDL": [33.6103, -111.9011], // Phoenix
  "KPDK": [33.8756, -84.3020], // Atlanta
  "KOPF": [25.9074, -80.2781], // Miami
  "KAPF": [26.1525, -81.7752], // Naples
  "KBNA": [36.1245, -86.6782], // Nashville
  "KAUS": [30.1945, -97.6699], // Austin
  
  // Europe
  "LFPB": [48.9694, 2.4414], // Paris
  "LFMN": [43.6584, 7.2157], // Nice
  "LSGG": [46.2381, 6.1089], // Geneva
  "EGLF": [51.3307, -0.7624], // London
  "LSZH": [47.4647, 8.5492], // Zurich
  "LIRA": [41.8003, 12.2389], // Rome
  "EDDM": [48.3538, 11.7861], // Munich
  "LIML": [45.6306, 8.7281], // Milan
  "LEMD": [40.4719, -3.5626], // Madrid
  "LEPA": [39.5517, 2.7388], // Palma de Mallorca
  "LEIB": [38.8729, 1.3731], // Ibiza
  "EHAM": [52.3086, 4.7639], // Amsterdam
  "LEBL": [41.2971, 2.0833], // Barcelona
  "LKPR": [50.1008, 14.2632], // Prague
  "LEMG": [36.6749, -4.4991], // Malaga
  "LGAV": [37.9365, 23.9445], // Athens
  
  // Islands
  "MYNN": [25.0389, -77.4661], // Bahamas Nassau
  "MBPV": [21.7737, -72.2656], // Providenciales
  "TJSJ": [18.4394, -66.0018], // San Juan
  "TNCM": [18.0431, -63.1089], // St Maarten
  "MYAM": [26.5110, -77.0832], // Marsh Harbour
  "TXKF": [32.3639, -64.6789], // Bermuda Hamilton
  "TBPB": [13.0749, -59.4925], // Barbados Bridgetown
  "TIST": [18.3370, -64.9734], // St Thomas
  "TCLK": [34.8751, 33.6249], // Larnaca
  "VRMM": [4.1917, 73.5289], // Maldives Hulule Island
  "FSIA": [-4.6740, 55.5181], // Seychelles Mahe Island
  
  // Middle East
  "LTBA": [41.2753, 28.7519], // Istanbul
  "OERK": [24.9576, 46.6988], // Riyadh
  "VHHH": [22.3080, 113.9185], // Hong Kong
  "LTAC": [40.1281, 32.9956], // Ankara
  "OEJN": [21.6796, 39.1565], // Jeddah
  "RJTT": [35.7647, 140.3864], // Tokyo
  "OMAD": [24.4339, 54.6510], // Abu Dhabi
};

interface AirportMapProps {
  destinationsData: Record<string, Array<{ code: string; city: string }>>;
}

export default function AirportMap({ destinationsData }: AirportMapProps) {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState('');
  const [showTokenInput, setShowTokenInput] = useState(true);

  const initializeMap = (token: string) => {
    if (!mapContainer.current || !token) return;

    mapboxgl.accessToken = token;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/light-v11',
      zoom: 1.5,
      center: [20, 20],
      attributionControl: false,
    });

    // Add navigation controls
    map.current.addControl(
      new mapboxgl.NavigationControl({
        visualizePitch: false,
      }),
      'top-right'
    );

    // Add airport markers
    map.current.on('load', () => {
      Object.values(destinationsData).flat().forEach((airport) => {
        const coords = airportCoordinates[airport.code];
        if (coords && map.current) {
          const [lat, lon] = coords;

          // Create custom marker element
          const markerElement = document.createElement('div');
          markerElement.className = 'airport-marker';
          markerElement.style.cssText = `
            width: 12px;
            height: 12px;
            background-color: #dc2626;
            border: 2px solid white;
            border-radius: 50%;
            cursor: pointer;
            box-shadow: 0 2px 4px rgba(0,0,0,0.3);
          `;

          // Create popup
          const popup = new mapboxgl.Popup({
            offset: 15,
            closeButton: false,
            closeOnClick: false,
          }).setHTML(`
            <div style="font-family: system-ui; padding: 8px;">
              <div style="font-weight: bold; color: #1f2937;">${airport.code}</div>
              <div style="color: #6b7280; font-size: 12px;">${airport.city}</div>
            </div>
          `);

          // Create marker
          const marker = new mapboxgl.Marker(markerElement)
            .setLngLat([lon, lat])
            .addTo(map.current);

          // Add hover events
          markerElement.addEventListener('mouseenter', () => {
            markerElement.style.backgroundColor = '#fbbf24';
            markerElement.style.transform = 'scale(1.2)';
            popup.addTo(map.current!);
            marker.setPopup(popup);
            popup.addTo(map.current!);
          });

          markerElement.addEventListener('mouseleave', () => {
            markerElement.style.backgroundColor = '#dc2626';
            markerElement.style.transform = 'scale(1)';
            popup.remove();
          });
        }
      });
    });
  };

  const handleTokenSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (mapboxToken.trim()) {
      setShowTokenInput(false);
      initializeMap(mapboxToken.trim());
    }
  };

  useEffect(() => {
    return () => {
      map.current?.remove();
    };
  }, []);

  if (showTokenInput) {
    return (
      <div className="w-full h-[600px] bg-gradient-to-b from-slate-100 to-blue-50 rounded-lg flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full mx-4">
          <h3 className="text-lg font-semibold mb-4 text-center">Enter Mapbox Token</h3>
          <p className="text-sm text-muted-foreground mb-4 text-center">
            Please enter your Mapbox public token to display the airport map.
            Get your token at{' '}
            <a href="https://mapbox.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
              mapbox.com
            </a>
          </p>
          <form onSubmit={handleTokenSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="pk.ey..."
              value={mapboxToken}
              onChange={(e) => setMapboxToken(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              required
            />
            <button
              type="submit"
              className="w-full bg-primary text-primary-foreground py-2 px-4 rounded-lg hover:bg-primary/90 transition-colors"
            >
              Load Map
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-[600px] bg-gradient-to-b from-slate-100 to-blue-50 rounded-lg overflow-hidden relative">
      <div ref={mapContainer} className="absolute inset-0" />
      
      {/* Instructions overlay */}
      <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm text-gray-700 text-sm px-3 py-2 rounded-lg shadow-md">
        <p>🖱️ Drag to pan • 🔍 Scroll to zoom • 📍 Hover pins for details</p>
      </div>
    </div>
  );
}