interface GoogleAirportMapProps {
  destinationsData: Record<string, Array<{ code: string; city: string }>>;
}

export default function GoogleAirportMap({ destinationsData }: GoogleAirportMapProps) {
  // Create a search query with all airport cities for better coverage
  const allAirports = Object.values(destinationsData).flat();
  const majorCities = allAirports.slice(0, 10).map(airport => airport.city).join('|');
  
  return (
    <div className="w-full h-[600px] bg-gradient-to-b from-slate-100 to-blue-50 rounded-lg overflow-hidden relative">
      <iframe
        src={`https://www.google.com/maps/embed/v1/view?key=AIzaSyBFBhbVa9sUxFk5CQPM-zPQGYJ1_h5NDmo&center=40.7128,-74.0060&zoom=2&maptype=roadmap`}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="rounded-lg"
      />
      
      {/* Airport list overlay */}
      <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm p-4 rounded-lg shadow-lg max-w-xs max-h-96 overflow-y-auto">
        <h3 className="font-semibold text-sm mb-3 text-gray-800">Our Airport Destinations</h3>
        <div className="space-y-1 text-xs">
          {Object.entries(destinationsData).map(([region, airports]) => (
            <div key={region} className="mb-3">
              <div className="font-medium text-primary mb-1">{region}</div>
              <div className="grid grid-cols-1 gap-1 pl-2">
                {airports.map((airport) => (
                  <div key={airport.code} className="text-gray-600">
                    <span className="font-mono text-xs bg-gray-100 px-1 rounded">
                      {airport.code}
                    </span>{' '}
                    {airport.city}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Instructions overlay */}
      <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm text-gray-700 text-sm px-3 py-2 rounded-lg shadow-md">
        <p>🗺️ Zoom and pan to explore our global destinations</p>
      </div>
    </div>
  );
}