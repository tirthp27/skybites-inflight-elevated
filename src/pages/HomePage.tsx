import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Plane, Clock, CheckCircle, Users, Utensils } from "lucide-react";
import heroImage from "@/assets/hero-aviation.jpg";
import cateringImage from "@/assets/premium-catering.jpg";

const HomePage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-navy-deep/60"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Premium Inflight Catering,<br />
            <span className="text-gold-luxury">Delivered Anywhere You Fly</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto">
            Exceptional culinary experiences for private jets, commercial airlines, and charter flights worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/request">
              <Button variant="luxury" size="lg" className="text-lg px-8 py-4">
                Request Catering <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/menu">
              <Button variant="premium" size="lg" className="text-lg px-8 py-4">
                View Menus
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gradient-to-b from-silver-elegant to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-deep mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Three simple steps to exceptional inflight dining
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-8 hover:shadow-elegant transition-all duration-300">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-gradient-to-r from-gold-luxury to-accent rounded-full flex items-center justify-center mx-auto mb-6">
                  <Utensils className="w-8 h-8 text-navy-deep" />
                </div>
                <h3 className="text-xl font-semibold text-navy-deep mb-4">
                  1. Send Your Catering Request
                </h3>
                <p className="text-gray-600">
                  Submit your flight details, passenger count, and preferences through our streamlined request form.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 hover:shadow-elegant transition-all duration-300">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-gradient-to-r from-gold-luxury to-accent rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-8 h-8 text-navy-deep" />
                </div>
                <h3 className="text-xl font-semibold text-navy-deep mb-4">
                  2. We Source & Customize Your Menu
                </h3>
                <p className="text-gray-600">
                  Our team curates premium meals from local partners, customized to your dietary requirements and preferences.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 hover:shadow-elegant transition-all duration-300">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-gradient-to-r from-gold-luxury to-accent rounded-full flex items-center justify-center mx-auto mb-6">
                  <Clock className="w-8 h-8 text-navy-deep" />
                </div>
                <h3 className="text-xl font-semibold text-navy-deep mb-4">
                  3. Delivered On-Time to Your Aircraft
                </h3>
                <p className="text-gray-600">
                  Fresh, beautifully presented meals delivered directly to your aircraft with precision timing.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Who We Serve Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-deep mb-4">
              Who We Serve
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Premium catering solutions for every type of aviation service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-24 h-24 bg-gradient-to-r from-navy-deep to-sky-blue rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Plane className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-navy-deep mb-4">Private Jets</h3>
              <p className="text-gray-600">
                Luxury dining experiences tailored for discerning private jet passengers
              </p>
            </div>

            <div className="text-center group">
              <div className="w-24 h-24 bg-gradient-to-r from-navy-deep to-sky-blue rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-navy-deep mb-4">Commercial Airlines</h3>
              <p className="text-gray-600">
                Scalable catering solutions for commercial airline operations
              </p>
            </div>

            <div className="text-center group">
              <div className="w-24 h-24 bg-gradient-to-r from-navy-deep to-sky-blue rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Plane className="w-12 h-12 text-white transform rotate-45" />
              </div>
              <h3 className="text-2xl font-semibold text-navy-deep mb-4">Charter Flights</h3>
              <p className="text-gray-600">
                Flexible catering options for charter flight operators
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Service Showcase */}
      <section className="py-20 bg-gradient-to-r from-navy-deep to-sky-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Exceptional Quality, Every Flight
              </h2>
              <p className="text-xl mb-8 text-gray-200">
                Our culinary team works with premium local suppliers to ensure every meal meets the highest standards of taste, presentation, and safety.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-gold-luxury" />
                  <span>Fresh, locally-sourced ingredients</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-gold-luxury" />
                  <span>Dietary restrictions accommodated</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-gold-luxury" />
                  <span>Temperature-controlled delivery</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-gold-luxury" />
                  <span>24/7 customer support</span>
                </li>
              </ul>
              <Link to="/about">
                <Button variant="luxury" size="lg">
                  Learn More About Us
                </Button>
              </Link>
            </div>
            <div className="relative">
              <img 
                src={cateringImage} 
                alt="Premium inflight catering" 
                className="rounded-lg shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-silver-elegant">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-deep mb-6">
            Ready for Premium Inflight Dining?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Submit your catering request now and let us elevate your flight experience.
          </p>
          <Link to="/request">
            <Button variant="luxury" size="lg" className="text-lg px-12 py-4">
              Request Catering Now <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;