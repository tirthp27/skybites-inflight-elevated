import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, MapPin, Phone, Mail, Clock, Star, ChefHat, Utensils, Globe } from "lucide-react";

interface Vendor {
  id: string;
  airportId: string;
  city: string;
  supplier: string;
  typeOfCatering: string;
  menu?: string;
  priceTier?: string;
  qualityTier?: string;
  personOfContact?: string;
  phoneNumber?: string;
  website?: string;
  email?: string;
  address?: string;
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

  // Real vendor data from Google Sheets
  useEffect(() => {
    const loadVendorData = () => {
      // This data structure matches your Google Sheets
      const allVendors: Vendor[] = [
        {
          id: "1",
          airportId: "YYZ",
          city: "Toronto",
          supplier: "Full Cup Catering",
          typeOfCatering: "Charcuterie",
          priceTier: "Bronze",
          qualityTier: "Silver",
          personOfContact: "Kathryn Robertson",
          phoneNumber: "+1 437-440-2650",
          website: "http://www.fullcupcatering.com/menu.html",
          email: "info@fullcupcatering.com",
          address: "52 Carrier Dr Unit 9, Etobicoke, ON M9W 5S5"
        },
        {
          id: "2",
          airportId: "YYZ",
          city: "Toronto",
          supplier: "Treeline Catering",
          typeOfCatering: "Meals",
          priceTier: "Gold",
          qualityTier: "Silver",
          personOfContact: "Joshua",
          phoneNumber: "+1 647-444-3268",
          address: "430 Horner Ave, Etobicoke, ON M8W 2B1"
        },
        {
          id: "3",
          airportId: "YYZ",
          city: "Toronto",
          supplier: "Lux Charcuterie",
          typeOfCatering: "Charcuterie",
          priceTier: "Silver",
          qualityTier: "Gold",
          personOfContact: "Amra"
        },
        {
          id: "4",
          airportId: "YYZ",
          city: "Toronto",
          supplier: "Food For Thought Catering Markham and Toronto",
          typeOfCatering: "Meals",
          menu: "https://www.foodforthought.ca/catering-menu",
          phoneNumber: "(416) 364-4488",
          website: "https://www.foodforthought.ca/",
          email: "time2eat@foodforthought.ca",
          address: "5 Hillcroft Drive, Unit 6, Markham, ON L3S 1R6"
        },
        {
          id: "5",
          airportId: "ATL",
          city: "Atlanta",
          supplier: "Chef Cordel Catering",
          typeOfCatering: "Meals",
          phoneNumber: "14046922593",
          website: "https://www.chefcordel.com",
          email: "info@chefcordel.com",
          address: "Hapeville, GA"
        },
        {
          id: "6",
          airportId: "ATL",
          city: "Atlanta",
          supplier: "Simplee Amazing Catering",
          typeOfCatering: "Meals",
          phoneNumber: "16787136215",
          website: "https://www.simpleeamazing.com",
          email: "info@simpleeamazing.com"
        },
        {
          id: "7",
          airportId: "ATL",
          city: "Atlanta",
          supplier: "Life Catering LLC",
          typeOfCatering: "Charcuterie+Meals",
          phoneNumber: "+1 770-678-1240",
          website: "https://www.facebook.com/profile.php?id=100090060882484&mibextid=ZbWKwL",
          email: "lifecateringllc@gmail.com",
          address: "2459 Roosevelt Hwy suite c-21, College Park, GA 30337, United States"
        },
        {
          id: "8",
          airportId: "CYLS",
          city: "Lake Simcoe",
          supplier: "Wildwood Hospitality Services Inc",
          typeOfCatering: "Meals",
          menu: "https://www.wildwoodhospitality.com/menu/",
          phoneNumber: "1 705 727 3772",
          website: "https://www.wildwoodhospitality.com",
          email: "info@wildwoodhospitality.com",
          address: "Wildwood Hospitality 654 Ridge Road West Oro-Medonte, Ontario L0L 2E0"
        },
        {
          id: "9",
          airportId: "CYLS",
          city: "Lake Simcoe",
          supplier: "Laforet Catering",
          typeOfCatering: "Meals",
          menu: "https://www.laforetcatering.ca/menu/",
          phoneNumber: "416.209.6100",
          website: "https://www.laforetcatering.ca",
          email: "laforetcatering@gmail.com"
        },
        {
          id: "10",
          airportId: "CYOW",
          city: "Ottawa",
          supplier: "Grenfell Catering",
          typeOfCatering: "Meals",
          phoneNumber: "16137232215",
          website: "https://www.grenfellcatering.com/index.html",
          email: "info@grenfellcatering.com",
          address: "19 Grenfell Crescent Unit 9, Nepean, ON K2G 0G3, Canada"
        }
      ];
      
      // Filter vendors for the current airport
      const airportVendors = allVendors.filter(vendor => 
        vendor.airportId === airportCode || vendor.airportId === airportCode?.replace('K', '')
      );
      setVendors(airportVendors);
    };

    loadVendorData();
  }, [airportCode]);

  const getAirportName = (code: string = "") => {
    const airportNames: Record<string, string> = {
      "YYZ": "Toronto Pearson International Airport",
      "CYYZ": "Toronto Pearson International Airport",
      "ATL": "Hartsfield-Jackson Atlanta International Airport",
      "KATL": "Hartsfield-Jackson Atlanta International Airport",
      "BOS": "Boston Logan International Airport",
      "KBOS": "Boston Logan International Airport",
      "CYLS": "Lake Simcoe Regional Airport",
      "CYOW": "Ottawa Macdonald-Cartier International Airport",
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
    if (type?.toLowerCase().includes('charcuterie')) {
      return <ChefHat className="h-5 w-5" />;
    }
    return <Utensils className="h-5 w-5" />;
  };

  const getTierColor = (tier?: string) => {
    switch (tier?.toLowerCase()) {
      case 'gold':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'silver':
        return 'bg-gray-100 text-gray-800 border-gray-200';
      case 'bronze':
        return 'bg-orange-100 text-orange-800 border-orange-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
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
                    {getTypeIcon(vendor.typeOfCatering || '')}
                    <div>
                      <CardTitle className="text-xl">{vendor.supplier}</CardTitle>
                      <div className="flex items-center gap-2 mt-1 flex-wrap">
                        <Badge variant="secondary">{vendor.typeOfCatering}</Badge>
                        {vendor.priceTier && (
                          <Badge className={getTierColor(vendor.priceTier)}>
                            {vendor.priceTier} Price
                          </Badge>
                        )}
                        {vendor.qualityTier && (
                          <Badge className={getTierColor(vendor.qualityTier)}>
                            {vendor.qualityTier} Quality
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="text-right text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      {vendor.city}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                {vendor.address && (
                  <p className="text-muted-foreground mb-4">
                    <MapPin className="h-4 w-4 inline mr-1" />
                    {vendor.address}
                  </p>
                )}

                {vendor.personOfContact && (
                  <div className="mb-4">
                    <h4 className="text-sm font-medium mb-2">Contact Person:</h4>
                    <Badge variant="outline">{vendor.personOfContact}</Badge>
                  </div>
                )}

                {vendor.menu && (
                  <div className="mb-4">
                    <h4 className="text-sm font-medium mb-2">Menu:</h4>
                    <a 
                      href={vendor.menu} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:underline flex items-center gap-1"
                    >
                      <Globe className="h-3 w-3" />
                      View Menu
                    </a>
                  </div>
                )}

                {/* Contact Info */}
                <div className="border-t pt-4">
                  <h4 className="text-sm font-medium mb-2">Contact Information:</h4>
                  <div className="flex flex-wrap gap-4 text-sm mb-4">
                    {vendor.phoneNumber && (
                      <div className="flex items-center gap-1">
                        <Phone className="h-3 w-3" />
                        <a href={`tel:${vendor.phoneNumber}`} className="hover:text-primary">
                          {vendor.phoneNumber}
                        </a>
                      </div>
                    )}
                    {vendor.email && (
                      <div className="flex items-center gap-1">
                        <Mail className="h-3 w-3" />
                        <a href={`mailto:${vendor.email}`} className="hover:text-primary">
                          {vendor.email}
                        </a>
                      </div>
                    )}
                    {vendor.website && (
                      <div className="flex items-center gap-1">
                        <Globe className="h-3 w-3" />
                        <a 
                          href={vendor.website} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="hover:text-primary"
                        >
                          Website
                        </a>
                      </div>
                    )}
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm">Request Quote</Button>
                    <Button variant="outline" size="sm">Contact Vendor</Button>
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