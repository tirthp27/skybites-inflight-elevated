import { useRef, useMemo, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Text, Html } from "@react-three/drei";
import * as THREE from "three";

// Airport coordinates (lat, lon) - approximate positions for major airports
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

// Convert lat/lon to 3D coordinates on a sphere
function latLonToVector3(lat: number, lon: number, radius: number = 2) {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lon + 180) * (Math.PI / 180);
  
  const x = -(radius * Math.sin(phi) * Math.cos(theta));
  const z = radius * Math.sin(phi) * Math.sin(theta);
  const y = radius * Math.cos(phi);
  
  return new THREE.Vector3(x, y, z);
}

function Globe() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.002;
    }
  });

  // Create globe geometry with more segments for smoother appearance
  const geometry = useMemo(() => new THREE.SphereGeometry(2, 64, 32), []);
  
  // Create a simple earth-like material
  const material = useMemo(() => {
    return new THREE.MeshPhongMaterial({
      color: "#2563eb",
      shininess: 100,
      transparent: true,
      opacity: 0.8,
    });
  }, []);

  return (
    <mesh ref={meshRef} geometry={geometry} material={material}>
      {/* Add wireframe overlay for continents effect */}
      <mesh>
        <sphereGeometry args={[2.01, 32, 16]} />
        <meshBasicMaterial color="#1e40af" wireframe transparent opacity={0.3} />
      </mesh>
    </mesh>
  );
}

function AirportPin({ code, position, city }: { code: string; position: THREE.Vector3; city: string }) {
  const [hovered, setHovered] = useState(false);
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.lookAt(state.camera.position);
    }
  });

  return (
    <group position={position}>
      <mesh
        ref={meshRef}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <sphereGeometry args={[0.02, 8, 8]} />
        <meshBasicMaterial color={hovered ? "#fbbf24" : "#dc2626"} />
      </mesh>
      
      {hovered && (
        <Html>
          <div className="bg-black/80 text-white px-2 py-1 rounded text-xs whitespace-nowrap pointer-events-none">
            <div className="font-bold">{code}</div>
            <div className="text-gray-300">{city}</div>
          </div>
        </Html>
      )}
      
      {/* Pin line extending from surface */}
      <mesh position={[0, 0.1, 0]}>
        <cylinderGeometry args={[0.005, 0.005, 0.2]} />
        <meshBasicMaterial color={hovered ? "#fbbf24" : "#dc2626"} />
      </mesh>
    </group>
  );
}

interface InteractiveGlobeProps {
  destinationsData: Record<string, Array<{ code: string; city: string }>>;
}

export default function InteractiveGlobe({ destinationsData }: InteractiveGlobeProps) {
  const airportPins = useMemo(() => {
    const pins: JSX.Element[] = [];
    
    Object.values(destinationsData).flat().forEach((airport) => {
      const coords = airportCoordinates[airport.code];
      if (coords) {
        const [lat, lon] = coords;
        const position = latLonToVector3(lat, lon);
        pins.push(
          <AirportPin
            key={airport.code}
            code={airport.code}
            position={position}
            city={airport.city}
          />
        );
      }
    });
    
    return pins;
  }, [destinationsData]);

  return (
    <div className="w-full h-[600px] bg-gradient-to-b from-slate-900 to-blue-900 rounded-lg overflow-hidden">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        gl={{ antialias: true, alpha: true }}
      >
        {/* Lighting */}
        <ambientLight intensity={0.4} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, -10, -5]} intensity={0.5} />
        
        {/* Globe */}
        <Globe />
        
        {/* Airport pins */}
        {airportPins}
        
        {/* Controls */}
        <OrbitControls
          enableDamping
          dampingFactor={0.05}
          minDistance={3}
          maxDistance={8}
          enablePan={false}
        />
        
        {/* Stars background */}
        <mesh>
          <sphereGeometry args={[50, 32, 32]} />
          <meshBasicMaterial color="#000011" side={THREE.BackSide} />
        </mesh>
        
        {/* Add some stars */}
        {Array.from({ length: 100 }, (_, i) => {
          const position = new THREE.Vector3(
            (Math.random() - 0.5) * 100,
            (Math.random() - 0.5) * 100,
            (Math.random() - 0.5) * 100
          );
          return (
            <mesh key={i} position={position}>
              <sphereGeometry args={[0.1, 4, 4]} />
              <meshBasicMaterial color="white" />
            </mesh>
          );
        })}
      </Canvas>
      
      {/* Instructions overlay */}
      <div className="absolute bottom-4 left-4 text-white/70 text-sm">
        <p>🖱️ Drag to rotate • 🔍 Scroll to zoom • 📍 Hover pins for details</p>
      </div>
    </div>
  );
}