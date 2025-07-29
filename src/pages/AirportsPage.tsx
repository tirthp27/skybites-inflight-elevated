import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Search, MapPin, ArrowRight, Plane } from "lucide-react";

const AirportsPage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const destinationsData = {
    "North America": [
      { code: "KTEB", city: "Teterboro", country: "USA" },
      { code: "KLAS", city: "Las Vegas", country: "USA" },
      { code: "KDAL", city: "Dallas", country: "USA" },
      { code: "KVNY", city: "Los Angeles", country: "USA" },
      { code: "KHPN", city: "Westchester County", country: "USA" },
      { code: "KIAD", city: "Washington", country: "USA" },
      { code: "KPBI", city: "West Palm Beach", country: "USA" },
      { code: "KHOU", city: "Houston", country: "USA" },
      { code: "KMDW", city: "Chicago", country: "USA" },
      { code: "CYYZ", city: "Toronto", country: "Canada" },
      { code: "KSDL", city: "Phoenix", country: "USA" },
      { code: "KPDK", city: "Atlanta", country: "USA" },
      { code: "KOPF", city: "Miami", country: "USA" },
      { code: "KAPF", city: "Naples", country: "USA" },
      { code: "KBNA", city: "Nashville", country: "USA" },
      { code: "KAUS", city: "Austin", country: "USA" }
    ],
    "Europe": [
      { code: "LFPB", city: "Paris", country: "France" },
      { code: "LFMN", city: "Nice", country: "France" },
      { code: "LSGG", city: "Geneva", country: "Switzerland" },
      { code: "EGLF", city: "London", country: "UK" },
      { code: "LSZH", city: "Zurich", country: "Switzerland" },
      { code: "LIRA", city: "Rome", country: "Italy" },
      { code: "EDDM", city: "Munich", country: "Germany" },
      { code: "LIML", city: "Milan", country: "Italy" },
      { code: "LEMD", city: "Madrid", country: "Spain" },
      { code: "LEPA", city: "Palma de Mallorca", country: "Spain" },
      { code: "LEIB", city: "Ibiza", country: "Spain" },
      { code: "EHAM", city: "Amsterdam", country: "Netherlands" },
      { code: "LEBL", city: "Barcelona", country: "Spain" },
      { code: "LKPR", city: "Prague", country: "Czech Republic" },
      { code: "LEMG", city: "Malaga", country: "Spain" },
      { code: "LGAV", city: "Athens", country: "Greece" }
    ],
    "Islands": [
      { code: "MYNN", city: "Bahamas Nassau", country: "Bahamas" },
      { code: "MBPV", city: "Providenciales", country: "Turks and Caicos" },
      { code: "TJSJ", city: "San Juan", country: "Puerto Rico" },
      { code: "TNCM", city: "St Maarten", country: "St Maarten" },
      { code: "MYAM", city: "Marsh Harbour", country: "Bahamas" },
      { code: "TXKF", city: "Bermuda Hamilton", country: "Bermuda" },
      { code: "TBPB", city: "Barbados Bridgetown", country: "Barbados" },
      { code: "TIST", city: "St Thomas", country: "US Virgin Islands" },
      { code: "TCLK", city: "Larnaca", country: "Cyprus" },
      { code: "VRMM", city: "Maldives Hulule Island", country: "Maldives" },
      { code: "FSIA", city: "Seychelles Mahe Island", country: "Seychelles" }
    ],
    "Middle East": [
      { code: "LTBA", city: "Istanbul", country: "Turkey" },
      { code: "OERK", city: "Riyadh", country: "Saudi Arabia" },
      { code: "VHHH", city: "Hong Kong", country: "Hong Kong" },
      { code: "LTAC", city: "Ankara", country: "Turkey" },
      { code: "OEJN", city: "Jeddah", country: "Saudi Arabia" },
      { code: "RJTT", city: "Tokyo", country: "Japan" },
      { code: "OMAD", city: "Abu Dhabi", country: "UAE" }
    ]
  };

  const topCities = {
    "North America": [
      "Atlanta", "Chicago", "Cleveland", "Columbus",
      "Dallas", "Denver", "Detroit", "Greenville",
      "Houston", "Indianapolis", "Jacksonville", "Las Vegas",
      "Miami", "Minneapolis", "Montreal", "New York",
      "Norfolk", "Orlando", "Phoenix", "Sacramento",
      "San Antonio", "San Diego", "Tampa", "Toronto",
      "West Palm Beach", "Wichita"
    ],
    "Europe": [
      "Madrid", "Dusseldorf", "Paris", "Moscow",
      "London"
    ],
    "Middle East": [
      "Abu Dhabi"
    ],
    "South America": [
      "Sao Paulo"
    ]
  };

  const londonAirports = [
    {
      name: "London Luton Airport",
      code: "EGGW / LTN",
      image: "/lovable-uploads/30723741-53dd-46fc-85f3-4688c04255c7.png"
    },
    {
      name: "London Biggin Hill Airport", 
      code: "EGKB / BOH",
      image: "/lovable-uploads/30723741-53dd-46fc-85f3-4688c04255c7.png"
    },
    {
      name: "London Stansted Airport",
      code: "EGSS / STN", 
      image: "/lovable-uploads/30723741-53dd-46fc-85f3-4688c04255c7.png"
    },
    {
      name: "London City Airport",
      code: "EGLC / LCY",
      image: "/lovable-uploads/30723741-53dd-46fc-85f3-4688c04255c7.png"
    },
    {
      name: "Oxford (Kidlington) Airport",
      code: "EGTK / OXF",
      image: "/lovable-uploads/30723741-53dd-46fc-85f3-4688c04255c7.png"
    },
    {
      name: "RAF Northolt",
      code: "EGWU / NHT",
      image: "/lovable-uploads/30723741-53dd-46fc-85f3-4688c04255c7.png"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Private Jet */}
      <section className="relative min-h-screen flex items-center text-white">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `url('/lovable-uploads/c5ff4d16-9fa0-48d3-b4cc-ab18c531c992.png')` 
          }}
        />
        <div className="absolute inset-0 bg-black/50" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm text-[#B8860B] mb-6 tracking-widest uppercase">Private Jet Catering</p>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="text-white">WORLDWIDE VIP</span><br />
            <span className="text-[#B8860B]">PRIVATE JET</span><br />
            <span className="text-white">CATERING</span>
          </h1>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Because you deserve only the best
          </p>
          <p className="text-sm text-[#B8860B] mb-12 tracking-widest uppercase">
            Private Jet VIP Catering
          </p>
        </div>
      </section>

      {/* Airport Search Section */}
      <section className="py-20 bg-emerald-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-16 bg-[#B8860B] rounded-full mx-auto mb-8 flex items-center justify-center">
            <MapPin className="w-8 h-8 text-white" />
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            FIND YOUR AIRPORT
          </h2>
          <h3 className="text-2xl font-bold mb-8">
            FOR JET CATERING SERVICES
          </h3>
          
          <div className="relative max-w-2xl mx-auto mb-8">
            <Input
              type="text"
              placeholder="What's your airport ? (OACI, IATA, City ...)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full py-4 px-6 text-lg bg-white text-black border-2 border-[#B8860B] rounded-full"
            />
            <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-muted-foreground" />
          </div>
          
          <p className="text-sm text-white/80 mb-8">
            Type and press enter on keyboard for search
          </p>
          
          <p className="text-lg font-semibold mb-4">
            SELECT YOUR AIRPORT IN THE LIST BELOW :
          </p>
        </div>
      </section>

      {/* 3-Step Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
            <div className="text-center">
              <div className="text-6xl font-bold text-emerald-800 mb-4">1</div>
              <h3 className="text-xl font-bold text-muted-foreground mb-4 uppercase">
                Find your<br />Airport
              </h3>
              <p className="text-muted-foreground mb-4">
                Start your search bellow<br />
                or email our team 24/7
              </p>
            </div>
            
            <div className="flex justify-center">
              <ArrowRight className="w-8 h-8 text-[#B8860B]" />
            </div>

            <div className="text-center">
              <div className="text-6xl font-bold text-emerald-800 mb-4">2</div>
              <h3 className="text-xl font-bold text-muted-foreground mb-4 uppercase">
                Request and<br />Confirm your<br />Quote
              </h3>
              <p className="text-muted-foreground mb-4">
                Our jet catering experts<br />
                are here to assist you
              </p>
            </div>

            <div className="flex justify-center">
              <ArrowRight className="w-8 h-8 text-[#B8860B]" />
            </div>

            <div className="text-center">
              <div className="text-6xl font-bold text-emerald-800 mb-4">3</div>
              <h3 className="text-xl font-bold text-muted-foreground mb-4 uppercase">
                Receive your<br />Catering to<br />your jet
              </h3>
              <p className="text-muted-foreground mb-4">
                Our logistic team are here to<br />
                ensure the best delivery process
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Regions Grid */}
      <section className="py-20 bg-gradient-to-b from-slate-100 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#B8860B] mb-4">
            WORLD'S LEADING
          </h2>
          <h3 className="text-2xl font-bold text-[#B8860B] mb-16">
            INFLIGHT CATERER NETWORK
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-16">
            {[
              { name: "AFRICA", icon: "🌍" },
              { name: "ANTARCTICA", icon: "🐧" },
              { name: "ASIA", icon: "🌏" },
              { name: "AUSTRALIA", icon: "🇦🇺" },
              { name: "EUROPE", icon: "🇪🇺" },
              { name: "NORTH AMERICA", icon: "🇺🇸" },
              { name: "SOUTH AMERICA", icon: "🇧🇷" }
            ].map((region, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-8 text-center">
                  <div className="text-4xl mb-4">{region.icon}</div>
                  <h4 className="text-xl font-bold text-[#B8860B]">{region.name}</h4>
                  <div className="w-12 h-12 bg-[#B8860B] rounded-full mx-auto mt-4 flex items-center justify-center">
                    <ArrowRight className="w-6 h-6 text-white" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Airport Listings */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl md:text-4xl font-bold text-[#B8860B] mb-6 leading-tight">
                ORDER YOUR<br />
                PRIVATE JET<br />
                CATERING<br />
                FOR OUR TOP<br />
                DESTINATIONS
              </h2>
              <p className="text-muted-foreground mb-6">
                Enjoy premium and seamless inflight catering service for your private flight with Inflight Chef Delight.
              </p>
              <p className="text-muted-foreground mb-8">
                Choose your airport departure from our top trending destinations at the moment.
              </p>
            </div>

            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {Object.entries(destinationsData).map(([region, airports]) => (
                  <div key={region} className="space-y-4">
                    <h3 className="text-lg font-bold text-[#B8860B] mb-4">{region}</h3>
                    <div className="space-y-2">
                      {airports.slice(0, 12).map((airport) => (
                        <div key={airport.code} className="flex justify-between items-center text-sm hover:bg-muted/50 p-2 rounded transition-colors">
                          <span className="font-medium">{airport.code}</span>
                          <span className="text-muted-foreground text-xs">{airport.city}</span>
                          <ArrowRight className="w-3 h-3 text-[#B8860B]" />
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="text-center mt-12">
                <Button className="bg-[#B8860B] hover:bg-[#B8860B]/90 text-white px-8 py-3">
                  MORE AIRPORTS <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Top Cities */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#B8860B] text-center mb-16">
            TOP CITIES
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(topCities).map(([region, cities]) => (
              <div key={region} className="space-y-4">
                <h3 className="text-xl font-bold text-muted-foreground text-center mb-6">{region}</h3>
                <div className="space-y-2">
                  {cities.map((city, index) => (
                    <div key={index} className="flex justify-between items-center text-sm hover:bg-white p-2 rounded transition-colors">
                      <span className="text-foreground">{city}</span>
                      <ArrowRight className="w-3 h-3 text-[#B8860B]" />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kitchen Based Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#B8860B] mb-4">
              OUR KITCHEN BASED
            </h2>
            <h3 className="text-2xl font-bold text-[#B8860B]">
              FOR VIP JET CATERING
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {londonAirports.map((airport, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-gradient-to-br from-blue-400 to-purple-600"></div>
                <CardContent className="p-6 bg-emerald-800 text-white">
                  <h4 className="text-xl font-bold text-[#B8860B] mb-2">LONDON</h4>
                  <p className="text-white/90 mb-4">{airport.name}</p>
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-lg">{airport.code}</span>
                    <div className="w-8 h-8 bg-[#B8860B] rounded-full flex items-center justify-center">
                      <ArrowRight className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AirportsPage;