import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Award, Globe, Clock, Users } from "lucide-react";

const AboutPage = () => {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-navy-deep to-sky-blue text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About Sky Bites
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Elevating inflight dining experiences with premium catering solutions for the aviation industry
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-deep mb-6">
              Our Story
            </h2>
          </div>
          <div className="prose prose-lg mx-auto text-gray-600">
            <p className="text-xl leading-relaxed mb-6">
              Founded with a passion for exceptional culinary experiences, Sky Bites has become the trusted partner for premium inflight catering across the aviation industry. We understand that dining at altitude should be more than just sustenance—it should be an memorable experience that reflects the luxury and sophistication of private aviation.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              Our journey began when our founder, a seasoned aviation professional, recognized the gap between ground-based fine dining and what was available in the sky. Determined to bridge this divide, we assembled a team of world-class chefs, logistics experts, and customer service professionals who share our commitment to excellence.
            </p>
            <p className="text-lg leading-relaxed">
              Today, Sky Bites serves private jets, commercial airlines, and charter flights worldwide, delivering not just meals, but memorable dining experiences that enhance every journey.
            </p>
          </div>
        </div>
      </section>

      {/* Values & Differentiators */}
      <section className="py-20 bg-silver-elegant">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-deep mb-6">
              What Sets Us Apart
            </h2>
            <p className="text-xl text-gray-600">
              Our commitment to excellence extends beyond just great food
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-6 hover:shadow-elegant transition-all duration-300">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-gradient-to-r from-gold-luxury to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-navy-deep" />
                </div>
                <h3 className="text-xl font-semibold text-navy-deep mb-3">Premium Quality</h3>
                <p className="text-gray-600">
                  Only the finest ingredients, sourced locally and prepared by experienced chefs
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-elegant transition-all duration-300">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-gradient-to-r from-gold-luxury to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-navy-deep" />
                </div>
                <h3 className="text-xl font-semibold text-navy-deep mb-3">Global Reach</h3>
                <p className="text-gray-600">
                  Trusted kitchen partners in major airports worldwide, ensuring consistent quality everywhere
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-elegant transition-all duration-300">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-gradient-to-r from-gold-luxury to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-navy-deep" />
                </div>
                <h3 className="text-xl font-semibold text-navy-deep mb-3">Precision Timing</h3>
                <p className="text-gray-600">
                  Temperature-controlled delivery with military precision, always on time
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-elegant transition-all duration-300">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-gradient-to-r from-gold-luxury to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-navy-deep" />
                </div>
                <h3 className="text-xl font-semibold text-navy-deep mb-3">Personal Service</h3>
                <p className="text-gray-600">
                  Dedicated account managers and 24/7 support for every client
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Founder Message */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-navy-deep mb-6">
                A Message from Our Founder
              </h2>
              <div className="space-y-4 text-gray-600">
                <p className="text-lg">
                  "Having spent over two decades in the aviation industry, I've witnessed firsthand the challenges of delivering exceptional dining experiences at 40,000 feet. Traditional catering often falls short of the luxury standards that private aviation clients expect."
                </p>
                <p className="text-lg">
                  "Sky Bites was born from the belief that every flight, regardless of duration or destination, deserves a dining experience that matches the sophistication of the journey itself. We've built relationships with the world's finest culinary partners to make this vision a reality."
                </p>
                <p className="text-lg font-semibold text-navy-deep">
                  "We don't just deliver meals—we craft memorable experiences that enhance every mile of your journey."
                </p>
              </div>
              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="font-semibold text-navy-deep">Sarah Mitchell</p>
                <p className="text-gray-600">Founder & CEO, Sky Bites</p>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-r from-silver-elegant to-gray-200 rounded-lg flex items-center justify-center">
                <span className="text-gray-500">Founder Photo</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Guarantee */}
      <section className="py-20 bg-gradient-to-r from-navy-deep to-sky-blue text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Our Service Guarantee
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            We stand behind every meal with our comprehensive satisfaction guarantee
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="text-gold-luxury font-bold text-2xl mb-2">100%</div>
              <p>Fresh Ingredients</p>
            </div>
            <div className="text-center">
              <div className="text-gold-luxury font-bold text-2xl mb-2">24/7</div>
              <p>Customer Support</p>
            </div>
            <div className="text-center">
              <div className="text-gold-luxury font-bold text-2xl mb-2">On-Time</div>
              <p>Delivery Promise</p>
            </div>
          </div>
          <Link to="/request">
            <Button variant="luxury" size="lg">
              Experience Sky Bites <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-silver-elegant">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-deep mb-6">
            Ready to Elevate Your Flight Experience?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Contact us today to discuss your catering needs and discover the Sky Bites difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/request">
              <Button variant="luxury" size="lg">
                Request Catering
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="premium" size="lg">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;