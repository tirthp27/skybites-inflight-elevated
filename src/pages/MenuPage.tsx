import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin } from "lucide-react";

const MenuPage = () => {
  const menuItems = [
    {
      id: 1,
      title: "Executive Breakfast",
      type: "Breakfast",
      description: "Premium morning selection with fresh pastries, seasonal fruits, and artisanal coffee",
      price: "From $45/person",
      dietary: ["Vegetarian Options", "Gluten-Free"]
    },
    {
      id: 2,
      title: "Gourmet Business Lunch",
      type: "Lunch",
      description: "Sophisticated lunch featuring locally-sourced ingredients and international cuisine",
      price: "From $65/person",
      dietary: ["Vegan Options", "Kosher Available"]
    },
    {
      id: 3,
      title: "Fine Dining Experience",
      type: "Dinner",
      description: "Multi-course dinner crafted by top chefs with wine pairing recommendations",
      price: "From $95/person",
      dietary: ["Pescatarian", "Dairy-Free"]
    },
    {
      id: 4,
      title: "Artisanal Snack Collection",
      type: "Snacks",
      description: "Gourmet snacks and light bites perfect for shorter flights",
      price: "From $30/person",
      dietary: ["Nut-Free", "Low-Carb"]
    },
    {
      id: 5,
      title: "Gourmet Cheese & Charcuterie Platter",
      type: "Platters",
      description: "Premium selection of international cheeses, cured meats, and artisanal accompaniments",
      price: "From $55/person",
      dietary: ["Vegetarian Options", "Wine Pairing"]
    },
    {
      id: 6,
      title: "Decadent Dessert Selection",
      type: "Desserts",
      description: "Handcrafted desserts featuring seasonal ingredients and elegant presentation",
      price: "From $35/person",
      dietary: ["Gluten-Free", "Sugar-Free Options"]
    },
    {
      id: 7,
      title: "Premium Beverage Collection",
      type: "Drinks",
      description: "Curated selection of fine wines, spirits, champagne, and specialty non-alcoholic beverages",
      price: "From $25/person",
      dietary: ["Non-Alcoholic", "Organic Options"]
    },
    {
      id: 8,
      title: "Fresh Seafood Platter",
      type: "Platters",
      description: "Sustainably-sourced seafood selection with cocktail accompaniments",
      price: "From $75/person",
      dietary: ["Pescatarian", "Keto-Friendly"]
    },
    {
      id: 9,
      title: "International Tapas Selection",
      type: "Snacks",
      description: "Small plates inspired by global cuisines, perfect for networking flights",
      price: "From $40/person",
      dietary: ["Mediterranean", "Vegetarian Options"]
    },
    {
      id: 10,
      title: "Signature Cocktail Service",
      type: "Drinks",
      description: "Professionally crafted cocktails with premium spirits and fresh ingredients",
      price: "From $35/person",
      dietary: ["Custom Mixology", "Mocktail Options"]
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-navy-deep to-sky-blue text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Menu
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
            Explore our premium culinary offerings designed for exceptional inflight dining experiences
          </p>
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 max-w-2xl mx-auto">
            <div className="flex items-center justify-center space-x-2 text-gold-luxury mb-2">
              <MapPin className="w-5 h-5" />
              <span className="font-semibold">Important Note</span>
            </div>
            <p className="text-gray-200">
              Menus vary based on departure airport and location. We customize every order to ensure the freshest, highest-quality ingredients.
            </p>
          </div>
        </div>
      </section>

      {/* Menu Gallery */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-deep mb-4">
              Complete Menu Selection
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From breakfast to dinner, snacks to desserts - everything you need for exceptional inflight dining
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {menuItems.map((item) => (
              <Card key={item.id} className="overflow-hidden hover:shadow-elegant transition-all duration-300 group">
                <div className="h-48 bg-gradient-to-r from-silver-elegant to-gray-200 flex items-center justify-center">
                  <span className="text-gray-500 text-sm">Menu Image</span>
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="text-navy-deep border-navy-deep">
                      {item.type}
                    </Badge>
                  </div>
                  <CardTitle className="text-navy-deep group-hover:text-sky-blue transition-colors">
                    {item.title}
                  </CardTitle>
                  <p className="text-gold-luxury font-semibold">{item.price}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.dietary.map((diet) => (
                      <Badge key={diet} variant="secondary">
                        {diet}
                      </Badge>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full group-hover:bg-navy-deep group-hover:text-white transition-colors">
                    View Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Menu CTA */}
      <section className="py-20 bg-gradient-to-r from-navy-deep to-sky-blue text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Need a Custom Menu?
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Our culinary team can create bespoke menus tailored to your specific requirements, dietary restrictions, and cultural preferences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/request">
              <Button variant="luxury" size="lg">
                Request Custom Menu <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="premium" size="lg">
                Speak with Chef
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MenuPage;