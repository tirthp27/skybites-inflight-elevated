import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Phone, Star, Users, MapPin, Plane, Globe, Utensils } from "lucide-react";
import heroImage from "@/assets/hero-aviation.jpg";
import GoogleAirportMap from "@/components/GoogleAirportMap";

const HomePage = () => {
  const destinationsData = {
    "North America": [
      { code: "KTEB", city: "Teterboro" },
      { code: "KLAS", city: "Las Vegas" },
      { code: "KDAL", city: "Dallas" },
      { code: "KVNY", city: "Los Angeles" },
      { code: "KHPN", city: "Westchester County" },
      { code: "KIAD", city: "Washington" },
      { code: "KPBI", city: "West Palm Beach" },
      { code: "KHOU", city: "Houston" },
      { code: "KMDW", city: "Chicago" },
      { code: "CYYZ", city: "Toronto" },
      { code: "KSDL", city: "Phoenix" },
      { code: "KPDK", city: "Atlanta" },
      { code: "KOPF", city: "Miami" },
      { code: "KAPF", city: "Naples" },
      { code: "KBNA", city: "Nashville" },
      { code: "KAUS", city: "Austin" }
    ],
    "Europe": [
      { code: "LFPB", city: "Paris" },
      { code: "LFMN", city: "Nice" },
      { code: "LSGG", city: "Geneva" },
      { code: "EGLF", city: "London" },
      { code: "LSZH", city: "Zurich" },
      { code: "LIRA", city: "Rome" },
      { code: "EDDM", city: "Munich" },
      { code: "LIML", city: "Milan" },
      { code: "LEMD", city: "Madrid" },
      { code: "LEPA", city: "Palma de Mallorca" },
      { code: "LEIB", city: "Ibiza" },
      { code: "EHAM", city: "Amsterdam" },
      { code: "LEBL", city: "Barcelona" },
      { code: "LKPR", city: "Prague" },
      { code: "LEMG", city: "Malaga" },
      { code: "LGAV", city: "Athens" }
    ],
    "Islands": [
      { code: "MYNN", city: "Bahamas Nassau" },
      { code: "MBPV", city: "Providenciales" },
      { code: "TJSJ", city: "San Juan" },
      { code: "TNCM", city: "St Maarten" },
      { code: "MYAM", city: "Marsh Harbour" },
      { code: "TXKF", city: "Bermuda Hamilton" },
      { code: "TBPB", city: "Barbados Bridgetown" },
      { code: "TIST", city: "St Thomas" },
      { code: "TCLK", city: "Larnaca" },
      { code: "VRMM", city: "Maldives Hulule Island" },
      { code: "FSIA", city: "Seychelles Mahe Island" }
    ],
    "Middle East": [
      { code: "LTBA", city: "Istanbul" },
      { code: "OERK", city: "Riyadh" },
      { code: "VHHH", city: "Hong Kong" },
      { code: "LTAC", city: "Ankara" },
      { code: "OEJN", city: "Jeddah" },
      { code: "RJTT", city: "Tokyo" },
      { code: "OMAD", city: "Abu Dhabi" }
    ]
  };

  const testimonials = [
    {
      name: "OLGA",
      title: "VIP Flight Attendant",
      company: "Falcon 7x",
      text: "Inflight Chef Delight is a simple and efficient management of all my private jet catering orders. It is the guarantee to always have high end quality catering for my jet without having to manage anything. The organization of the flights is already very stressful. It is important to have a partner such as Inflight Chef Delight on whom to count and not to worry anymore about the catering"
    },
    {
      name: "ERIC",
      title: "Manager Operation",
      company: "Jet Aviation",
      text: "At Jet Aviation, we have outsourced our private jet catering orders to Inflight Chef Delight. Their network and tools make them much more efficient and effective than our former in-house catering department. This has saved us money and has allowed us to greatly improve the quality of the meals provided on board our aircraft."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section - TREAT YOURSELF RIGHT */}
      <section className="relative h-screen overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/80"></div>
        </div>
        
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <p className="text-sm md:text-base tracking-[0.3em] uppercase text-amber-200/90 font-light">
              Private Jet Catering
            </p>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-wide">
              <span className="text-white">TREAT</span>
              <span className="text-amber-300"> YOURSELF </span>
              <span className="text-white">RIGHT</span>
            </h1>
            
            <div className="space-y-4 max-w-3xl mx-auto">
              <p className="text-lg md:text-xl lg:text-2xl font-light tracking-wide text-white/90">
                Because you deserve only the best
              </p>
              <p className="text-base md:text-lg lg:text-xl font-light tracking-[0.2em] uppercase text-amber-200/80">
                Private Jet VIP Catering
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
              <Button 
                variant="outline" 
                className="bg-transparent border-2 border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-black transition-all duration-300 px-12 py-4 text-base font-medium tracking-wide uppercase rounded-none"
                asChild
              >
                <Link to="/request">Order Now</Link>
              </Button>
              <Button 
                className="bg-amber-400 hover:bg-amber-500 text-black transition-all duration-300 px-12 py-4 text-base font-medium tracking-wide uppercase rounded-none"
                asChild
              >
                <Link to="/menu">VIP Menu</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Airport Destinations Section */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Find Your Airport Section */}
          <div className="text-center mb-16">
            <div className="mb-8">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                <Globe className="w-10 h-10 text-primary" />
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-12">
              FIND YOUR AIRPORT
            </h2>
            <Button variant="default" className="bg-[#8B7355] hover:bg-[#8B7355]/90 text-white px-8 py-3 mb-12">
              <ArrowRight className="mr-2 w-4 h-4" />
            </Button>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 text-center">
            <div>
              <h3 className="text-5xl md:text-6xl font-bold text-foreground mb-4">2500</h3>
              <p className="text-lg font-semibold text-foreground mb-2">AIRPORTS</p>
              <p className="text-sm text-muted-foreground">where we provide VIP catering for private jets</p>
            </div>
            <div>
              <h3 className="text-5xl md:text-6xl font-bold text-foreground mb-4">250</h3>
              <p className="text-lg font-semibold text-foreground mb-2">PRIVATE JET</p>
              <p className="text-sm text-muted-foreground">DELIVERED PER DAY</p>
            </div>
            <div>
              <h3 className="text-5xl md:text-6xl font-bold text-foreground mb-4">10000</h3>
              <p className="text-lg font-semibold text-foreground mb-2">VIP FA WHO</p>
              <p className="text-sm text-muted-foreground">TRUST US</p>
            </div>
          </div>

          {/* Order Your Private Jet Catering Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8 leading-tight">
              ORDER YOUR<br />
              <span className="text-primary">PRIVATE JET</span><br />
              <span className="text-primary">CATERING</span><br />
              FOR OUR TOP<br />
              DESTINATIONS
            </h1>
            <p className="text-lg text-muted-foreground max-w-md mx-auto mb-8">
              Enjoy premium and seamless inflight catering service for your private flight with Inflight Chef Delight.
            </p>
            <p className="text-base text-muted-foreground mb-8">
              Choose your airport departure from our top trending destinations at the moment.
            </p>
          </div>

          {/* Google Maps Airport Map */}
          <div className="mb-12 relative">
            <GoogleAirportMap destinationsData={destinationsData} />
          </div>

          {/* Airport Lists Below Globe */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {Object.entries(destinationsData).map(([region, airports]) => (
              <div key={region} className="space-y-4">
                <h3 className="text-xl font-bold text-primary text-center mb-6">{region}</h3>
                <div className="space-y-2">
                  {airports.map((airport) => (
                    <div key={airport.code} className="flex justify-between items-center text-sm hover:bg-muted/50 p-2 rounded transition-colors">
                      <span className="font-medium text-foreground">{airport.code}</span>
                      <span className="text-muted-foreground">{airport.city}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button variant="default" className="bg-[#8B7355] hover:bg-[#8B7355]/90 text-white px-8 py-3">
              MORE AIRPORTS <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Cost-Effective Section */}
      <section className="py-20 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src={heroImage}
                alt="Private jet on tarmac" 
                className="rounded-lg shadow-xl w-full"
              />
            </div>
            <div className="text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                COST-EFFECTIVE INFLIGHT<br />
                CATERING SOLUTIONS
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                In the realm of private jet and aviation catering, we focus on streamlining accounting with masterful cost optimization. Our services include efficient cost control, advantageous discounts, flexible payment terms, tax optimization strategies, and streamlined billing, all aimed at saving time and money in inflight catering and jet catering services.
              </p>
              <Button variant="default" className="bg-[#8B7355] hover:bg-[#8B7355]/90 text-white">
                SEE THE BENEFITS <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Jet Catering Connect */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                QUICK JET CATERING<br />
                CONNECT
              </h2>
              <div className="space-y-4 text-muted-foreground mb-8">
                <p>We always reply in less than 10 minutes to your email to ensure the best possible assistance.</p>
                <p>Live chat available through WhatsApp for instant communication</p>
              </div>
              <Button variant="default" className="bg-[#8B7355] hover:bg-[#8B7355]/90 text-white">
                GET THE DETAILS <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-muted to-background rounded-lg p-8 text-center">
                <div className="w-32 h-32 bg-muted rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <Phone className="w-16 h-16 text-primary" />
                </div>
                <p className="text-muted-foreground">Live chat communication</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bespoke Private Jet Catering */}
      <section className="py-20 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="bg-gradient-to-br from-orange-400 via-pink-400 to-purple-500 rounded-lg aspect-square flex items-center justify-center">
                <div className="text-white text-center">
                  <Utensils className="w-20 h-20 mx-auto mb-4" />
                  <p className="text-lg font-medium">Premium Catering</p>
                </div>
              </div>
            </div>
            <div className="text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                BESPOKE PRIVATE JET<br />
                CATERING EXCELLENCE
              </h2>
              <div className="space-y-4 text-muted-foreground mb-8">
                <p>We provide fresh and local top of the range quality products with adapted packaging that meet private jet catering requirements.</p>
                <p>Our Chefs are always happy to answer all your passenger's desires to ensure the best possible inflight catering experience in their private jets.</p>
              </div>
              <Button variant="default" className="bg-[#8B7355] hover:bg-[#8B7355]/90 text-white">
                DIVE INTO QUALITY <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            THEY TRUST
          </h2>
          <p className="text-lg text-muted-foreground mb-12">
            OUR PRIVATE JET CATERING COMPANY
          </p>
          
          <div className="mb-16">
            <h3 className="text-xl font-semibold text-muted-foreground mb-8">FBO & FLIGHT SUPPORT</h3>
            <div className="flex justify-center items-center space-x-12 opacity-60">
              <div className="text-2xl font-bold text-[#8B7355]">Signature</div>
              <div className="text-2xl font-bold text-gray-400">JETEX</div>
              <div className="text-2xl font-bold text-[#8B7355]">ExecuJet</div>
            </div>
          </div>

          <div className="mb-16">
            <h3 className="text-xl font-semibold text-muted-foreground mb-8">JET BROKER</h3>
            <div className="flex justify-center items-center space-x-12 opacity-60">
              <div className="text-2xl font-bold text-[#8B7355]">LUNAJETS</div>
              <div className="text-2xl font-bold text-gray-400">PRIVATEFLY</div>
            </div>
          </div>

          <Button variant="default" className="bg-[#8B7355] hover:bg-[#8B7355]/90 text-white">
            DISCOVER OUR SERVICES <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </section>

      {/* Request Quote Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Request A Quote
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get a personalized catering quote for your private jet. Our team will respond within minutes with a tailored proposal for your flight.
            </p>
          </div>
          
          <Card className="bg-white shadow-xl border-0">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Departure Airport *
                  </label>
                  <input 
                    type="text" 
                    placeholder="e.g., LAX, JFK, LHR"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Flight Date *
                  </label>
                  <input 
                    type="date"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Number of Passengers *
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent">
                    <option>Select passenger count</option>
                    <option>1-2 passengers</option>
                    <option>3-6 passengers</option>
                    <option>7-12 passengers</option>
                    <option>13+ passengers</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Contact Email *
                  </label>
                  <input 
                    type="email" 
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Special Requests & Dietary Notes
                </label>
                <textarea 
                  rows={4}
                  placeholder="Please describe any specific dietary requirements, allergies, preferred cuisines, or special requests..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                ></textarea>
              </div>
              
              <div className="text-center">
                <Button variant="default" className="bg-[#8B7355] hover:bg-[#8B7355]/90 text-white px-12 py-3 text-lg">
                  Get My Quote
                </Button>
                <p className="text-sm text-muted-foreground mt-3">
                  We'll respond within 10 minutes with your personalized quote
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-emerald-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white/10 border-white/20 text-white">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mr-4">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">{testimonial.name}</h3>
                      <p className="text-white/80">{testimonial.title}</p>
                      <p className="text-yellow-400 font-semibold">{testimonial.company}</p>
                    </div>
                  </div>
                  <p className="text-white/90 leading-relaxed">{testimonial.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-16">
            <div className="w-32 h-32 bg-white/10 rounded-full mx-auto mb-8 flex items-center justify-center">
              <Globe className="w-16 h-16 text-primary" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              FIND YOUR AIRPORT
            </h2>
            <Button variant="default" className="bg-[#8B7355] hover:bg-[#8B7355]/90 text-white">
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-5xl md:text-6xl font-bold text-primary mb-4">2500</h3>
              <p className="text-xl font-semibold text-muted-foreground">AIRPORTS</p>
              <p className="text-muted-foreground">where we provide VIP catering for private jets</p>
            </div>
            <div className="text-center">
              <h3 className="text-5xl md:text-6xl font-bold text-primary mb-4">250</h3>
              <p className="text-xl font-semibold text-muted-foreground">PRIVATE JET</p>
              <p className="text-muted-foreground">DELIVERED PER DAY</p>
            </div>
            <div className="text-center">
              <h3 className="text-5xl md:text-6xl font-bold text-primary mb-4">10000</h3>
              <p className="text-xl font-semibold text-muted-foreground">VIP FA WHO</p>
              <p className="text-muted-foreground">TRUST US</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;