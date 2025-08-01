import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MessageCircle, MapPin, Clock } from "lucide-react";

const ContactPage = () => {
  useEffect(() => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', 'G-03V4DHDLEM', {
        page_title: 'Contact - Sky Bites',
        page_location: window.location.href
      });
    }
  }, []);

  return (
    <div className="min-h-screen pt-16">
      {/* Header */}
      <section className="bg-gradient-to-r from-navy-deep to-sky-blue text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Contact Sky Bites
          </h1>
          <p className="text-xl text-gray-200">
            Get in touch with our team for premium inflight catering solutions
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-16 bg-silver-elegant">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Phone */}
            <Card className="text-center p-6 hover:shadow-elegant transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-gold-luxury to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-navy-deep" />
                </div>
                <CardTitle className="text-navy-deep">Call Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Speak directly with our catering specialists</p>
                <a href="tel:+1234567890" className="text-sky-blue hover:text-navy-deep font-semibold transition-colors">
                  +1 (234) 567-8900
                </a>
                <p className="text-sm text-gray-500 mt-2">Available 24/7</p>
              </CardContent>
            </Card>

            {/* Email */}
            <Card className="text-center p-6 hover:shadow-elegant transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-gold-luxury to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-navy-deep" />
                </div>
                <CardTitle className="text-navy-deep">Email Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Send us your detailed requirements</p>
                <a href="mailto:catering@skybites.com" className="text-sky-blue hover:text-navy-deep font-semibold transition-colors">
                  catering@skybites.com
                </a>
                <p className="text-sm text-gray-500 mt-2">Response within 3 hours</p>
              </CardContent>
            </Card>

            {/* WhatsApp */}
            <Card className="text-center p-6 hover:shadow-elegant transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-gold-luxury to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-8 h-8 text-navy-deep" />
                </div>
                <CardTitle className="text-navy-deep">WhatsApp</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Quick quotes and instant communication</p>
                <a 
                  href="https://wa.me/1234567890" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sky-blue hover:text-navy-deep font-semibold transition-colors"
                >
                  Message Us
                </a>
                <p className="text-sm text-gray-500 mt-2">Fastest response time</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Office Information */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-deep mb-6">
              Our Global Offices
            </h2>
            <p className="text-xl text-gray-600">
              Strategically located to serve major aviation hubs worldwide
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Headquarters */}
            <Card className="p-6">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MapPin className="w-5 h-5 text-sky-blue" />
                  <span>Global Headquarters</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-gray-600">
                  <p>Sky Bites Aviation Catering</p>
                  <p>1234 Airport Way, Suite 500</p>
                  <p>Los Angeles, CA 90045</p>
                  <p>United States</p>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">Mon-Fri: 6AM-8PM PST | Sat-Sun: 8AM-6PM PST</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* European Office */}
            <Card className="p-6">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MapPin className="w-5 h-5 text-sky-blue" />
                  <span>European Operations</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-gray-600">
                  <p>Sky Bites Europe Ltd.</p>
                  <p>Heathrow Business Park</p>
                  <p>Building 5, Floor 3</p>
                  <p>London TW6 2QR</p>
                  <p>United Kingdom</p>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">Mon-Fri: 7AM-7PM GMT | Sat-Sun: 9AM-5PM GMT</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-16 bg-gradient-to-r from-navy-deep to-sky-blue text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            24/7 Emergency Catering
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Last-minute flight changes? Unexpected catering needs? We're here to help, anytime.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+1234567890">
              <Button variant="luxury" size="lg">
                Call Emergency Line
              </Button>
            </a>
            <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
              <Button variant="premium" size="lg">
                WhatsApp Emergency
              </Button>
            </a>
          </div>
          <p className="text-gray-300 mt-4 text-sm">
            Emergency surcharges may apply for requests with less than 4 hours notice
          </p>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;