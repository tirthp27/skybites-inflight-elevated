import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, MapPin, Phone, Mail, Clock, Star, ChefHat, Utensils } from "lucide-react";

interface Vendor {
  id: string;
  name: string;
  type: "Kitchen" | "Chef" | "Catering Service" | "Supplier";
  cuisine: string[];
  rating: number;
  contact: {
    phone?: string;
    email?: string;
    website?: string;
  };
  location: string;
  distance: string;
  specialties: string[];
  availability: string;
  description: string;
}

const AirportVendorsPage = () => {
  const { airportCode } = useParams<{ airportCode: string }>();
  const [vendors, setVendors] = useState<Vendor[]>([]);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', 'G-03V4DHDLEM', {
        page_title: `${airportCode} Vendors - Sky Bites`,
        page_location: window.location.href
      });
    }
  }, [airportCode]);

  // Mock data - replace with actual data from your Google Sheets
  useEffect(() => {
    // This would normally fetch from your data source
    const mockVendors: Vendor[] = [
      {
        id: "1",
        name: "Sky Chef Premium Catering",
        type: "Kitchen",
        cuisine: ["American", "International"],
        rating: 4.8,
        contact: {
          phone: "(555) 123-4567",
          email: "orders@skychef.com",
          website: "www.skychef.com"
        },
        location: "Terminal Building",
        distance: "0.2 miles",
        specialties: ["Gourmet meals", "Dietary restrictions", "Executive catering"],
        availability: "24/7",
        description: "Premium catering service specializing in high-end aviation meals with international cuisine options."
      },
      {
        id: "2", 
        name: "Airport Gourmet Express",
        type: "Catering Service",
        cuisine: ["Mediterranean", "Asian", "American"],
        rating: 4.5,
        contact: {
          phone: "(555) 987-6543",
          email: "info@airportgourmet.com"
        },
        location: "Cargo Area",
        distance: "0.5 miles",
        specialties: ["Quick turnaround", "Fresh ingredients", "Custom menus"],
        availability: "6AM - 10PM",
        description: "Fast and reliable catering service with fresh, locally-sourced ingredients."
      }
    ];
    setVendors(mockVendors);
  }, [airportCode]);

  const getAirportName = (code: string = "") => {
    const airportNames: Record<string, string> = {
      "KTEB": "Teterboro Airport",
      "KJFK": "John F. Kennedy International Airport",
      "KLGA": "LaGuardia Airport",
      "KEWR": "Newark Liberty International Airport",
      "KCDW": "Caldwell Airport",
      "KFRG": "Republic Airport",
      "KISP": "Long Island MacArthur Airport",
      "KHPN": "Westchester County Airport",
      "KBDR": "Igor I. Sikorsky Memorial Airport"
    };
    return airportNames[code] || code;
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "Kitchen":
        return <ChefHat className="h-5 w-5" />;
      case "Chef":
        return <ChefHat className="h-5 w-5" />;
      case "Catering Service":
        return <Utensils className="h-5 w-5" />;
      default:
        return <Utensils className="h-5 w-5" />;
    }
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary/10 to-primary/5 py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-6">
            <Link to="/airports">
              <Button variant="outline" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Airports
              </Button>
            </Link>
          </div>
          <div className="flex items-center gap-3 mb-4">
            <MapPin className="h-6 w-6 text-primary" />
            <h1 className="text-3xl font-bold">{airportCode}</h1>
          </div>
          <p className="text-xl text-muted-foreground">
            {getAirportName(airportCode)}
          </p>
          <p className="text-muted-foreground mt-2">
            {vendors.length} catering vendors available
          </p>
        </div>
      </div>

      {/* Vendors List */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-6">
          {vendors.map((vendor) => (
            <Card key={vendor.id} className="hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    {getTypeIcon(vendor.type)}
                    <div>
                      <CardTitle className="text-xl">{vendor.name}</CardTitle>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge variant="secondary">{vendor.type}</Badge>
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm font-medium">{vendor.rating}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-right text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      {vendor.distance}
                    </div>
                    <div className="flex items-center gap-1 mt-1">
                      <Clock className="h-3 w-3" />
                      {vendor.availability}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{vendor.description}</p>
                
                {/* Cuisine Tags */}
                <div className="mb-4">
                  <h4 className="text-sm font-medium mb-2">Cuisine Types:</h4>
                  <div className="flex flex-wrap gap-2">
                    {vendor.cuisine.map((cuisine) => (
                      <Badge key={cuisine} variant="outline">{cuisine}</Badge>
                    ))}
                  </div>
                </div>

                {/* Specialties */}
                <div className="mb-4">
                  <h4 className="text-sm font-medium mb-2">Specialties:</h4>
                  <div className="flex flex-wrap gap-2">
                    {vendor.specialties.map((specialty) => (
                      <Badge key={specialty} variant="secondary">{specialty}</Badge>
                    ))}
                  </div>
                </div>

                {/* Contact Info */}
                <div className="border-t pt-4">
                  <h4 className="text-sm font-medium mb-2">Contact Information:</h4>
                  <div className="flex flex-wrap gap-4 text-sm">
                    {vendor.contact.phone && (
                      <div className="flex items-center gap-1">
                        <Phone className="h-3 w-3" />
                        <span>{vendor.contact.phone}</span>
                      </div>
                    )}
                    {vendor.contact.email && (
                      <div className="flex items-center gap-1">
                        <Mail className="h-3 w-3" />
                        <span>{vendor.contact.email}</span>
                      </div>
                    )}
                  </div>
                  <div className="mt-4 flex gap-2">
                    <Button size="sm">Request Quote</Button>
                    <Button variant="outline" size="sm">View Details</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {vendors.length === 0 && (
          <div className="text-center py-12">
            <ChefHat className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
            <h3 className="text-xl font-semibold mb-2">No vendors found</h3>
            <p className="text-muted-foreground">
              We're currently updating our vendor database for this airport.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AirportVendorsPage;