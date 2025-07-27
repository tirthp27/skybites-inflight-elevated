import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ArrowRight, Filter, MapPin } from "lucide-react";

const MenuPage = () => {
  const [selectedFilter, setSelectedFilter] = useState("all");

  const mealCategories = [
    { id: "all", name: "All Meals" },
    { id: "breakfast", name: "Breakfast" },
    { id: "lunch", name: "Lunch" },
    { id: "dinner", name: "Dinner" },
    { id: "beverages", name: "Beverages" },
    { id: "snacks", name: "Snacks" },
  ];

  const sampleMenus = [
    {
      id: 1,
      title: "Executive Breakfast",
      category: "breakfast",
      description: "Premium morning selection with fresh pastries, seasonal fruits, and artisanal coffee",
      price: "From $45/person",
      dietary: ["Vegetarian Options", "Gluten-Free"],
      image: "/placeholder-breakfast.jpg"
    },
    {
      id: 2,
      title: "Gourmet Business Lunch",
      category: "lunch",
      description: "Sophisticated lunch featuring locally-sourced ingredients and international cuisine",
      price: "From $65/person",
      dietary: ["Vegan Options", "Kosher Available"],
      image: "/placeholder-lunch.jpg"
    },
    {
      id: 3,
      title: "Fine Dining Experience",
      category: "dinner",
      description: "Multi-course dinner crafted by top chefs with wine pairing recommendations",
      price: "From $95/person",
      dietary: ["Pescatarian", "Dairy-Free"],
      image: "/placeholder-dinner.jpg"
    },
    {
      id: 4,
      title: "Premium Beverage Selection",
      category: "beverages",
      description: "Curated selection of fine wines, spirits, and specialty non-alcoholic beverages",
      price: "From $25/person",
      dietary: ["Non-Alcoholic", "Organic Options"],
      image: "/placeholder-beverages.jpg"
    },
    {
      id: 5,
      title: "Artisanal Snack Collection",
      category: "snacks",
      description: "Gourmet snacks and light bites perfect for shorter flights",
      price: "From $30/person",
      dietary: ["Nut-Free", "Low-Carb"],
      image: "/placeholder-snacks.jpg"
    },
  ];

  const filteredMenus = selectedFilter === "all" 
    ? sampleMenus 
    : sampleMenus.filter(menu => menu.category === selectedFilter);

  return (
    <div className="min-h-screen pt-16">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-navy-deep to-sky-blue text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Menu & Services
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

      {/* Filter Section */}
      <section className="py-8 bg-silver-elegant border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-navy-deep" />
              <span className="font-semibold text-navy-deep">Filter by meal type:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {mealCategories.map((category) => (
                <Button
                  key={category.id}
                  onClick={() => setSelectedFilter(category.id)}
                  variant={selectedFilter === category.id ? "default" : "outline"}
                  size="sm"
                >
                  {category.name}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Menu Gallery */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredMenus.map((menu) => (
              <Card key={menu.id} className="overflow-hidden hover:shadow-elegant transition-all duration-300 group">
                <div className="h-48 bg-gradient-to-r from-silver-elegant to-gray-200 flex items-center justify-center">
                  <span className="text-gray-500 text-sm">Menu Image</span>
                </div>
                <CardHeader>
                  <CardTitle className="text-navy-deep group-hover:text-sky-blue transition-colors">
                    {menu.title}
                  </CardTitle>
                  <p className="text-gold-luxury font-semibold">{menu.price}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{menu.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {menu.dietary.map((diet) => (
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