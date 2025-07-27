import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin } from "lucide-react";

const MenuPage = () => {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-slate-800 to-slate-700 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-6xl mx-auto px-4 py-20 text-center">
          <div className="mb-8">
            <div className="w-12 h-12 mx-auto mb-4 border-2 border-gold-luxury rounded-full flex items-center justify-center">
              <div className="w-6 h-6 bg-gold-luxury rounded-full"></div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gold-luxury">
              PRIVATE JET CATERING MENU
            </h1>
            <p className="text-xl mb-8">
              Order Catering quickly and easily for your<br />
              Private Jet
            </p>
          </div>
          
          {/* Process Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="text-6xl font-bold text-gold-luxury mb-4">1</div>
              <h3 className="text-xl font-semibold mb-2">FILL IN THE FORM</h3>
              <p className="text-sm">BELOW WITH YOUR<br />ITEM SELECTION &<br />FLIGHT INFORMATION</p>
            </div>
            <div className="text-center">
              <div className="text-6xl font-bold text-gold-luxury mb-4">2</div>
              <h3 className="text-xl font-semibold mb-2">RECEIVE AND</h3>
              <p className="text-sm">CONFIRM YOUR<br />QUOTE</p>
            </div>
            <div className="text-center">
              <div className="text-6xl font-bold text-gold-luxury mb-4">3</div>
              <h3 className="text-xl font-semibold mb-2">RECEIVE YOUR</h3>
              <p className="text-sm">ORDER ON BOARD<br />YOUR JET</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/request">
              <Button variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-navy-deep">
                Create Your Request
              </Button>
            </Link>
            <Button variant="luxury" size="lg">
              Download our VIP menu
            </Button>
          </div>
        </div>
      </div>

      <div className="flex">
        {/* Main Menu Content */}
        <div className="flex-1">
          {/* Breakfast Section */}
          <section>
            <div className="bg-navy-deep text-gold-luxury py-6">
              <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-4xl font-bold text-center">BREAKFAST</h2>
              </div>
            </div>
            <div className="bg-white py-12">
              <div className="max-w-6xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                  {/* Bread Column */}
                  <div>
                    <h3 className="text-2xl font-light text-gold-luxury mb-6 pb-2 border-b border-gold-luxury">BREAD</h3>
                    <ul className="space-y-3 text-navy-deep">
                      <li>Plain Bagel</li>
                      <li>Arabic Bread</li>
                      <li>Borodinsky bread</li>
                      <li>Whole French Baguette</li>
                      <li>Gluten Free Bread</li>
                      <li>Multigrain Bread</li>
                      <li>Pitta Bread</li>
                      <li>Assorted Bread rolls<br /><span className="text-sm italic text-gray-600">White, Brown, Mixed</span></li>
                      <li>Rye Bread Toasts</li>
                    </ul>
                  </div>

                  {/* Pastries Column */}
                  <div>
                    <h3 className="text-2xl font-light text-gold-luxury mb-6 pb-2 border-b border-gold-luxury">PASTRIES</h3>
                    <ul className="space-y-3 text-navy-deep">
                      <li>Crepe</li>
                      <li>Croissant Large size</li>
                      <li>Danish pastry Large size</li>
                      <li>Mixed mini pastries<br /><span className="text-sm italic text-gray-600">Croissant, pain au chocolat, Danish</span></li>
                      <li>Muffin<br /><span className="text-sm italic text-gray-600">Berries, Chocolate or Plain</span></li>
                      <li>Pain au chocolat Large size</li>
                      <li>Pancake</li>
                      <li>Pancake Russian style</li>
                      <li>Syrniki Russian style</li>
                      <li>Vareniki</li>
                      <li>Russian style Waffel</li>
                    </ul>
                  </div>

                  {/* Cold Breakfast Column */}
                  <div>
                    <h3 className="text-2xl font-light text-gold-luxury mb-6 pb-2 border-b border-gold-luxury">COLD BREAKFAST</h3>
                    <ul className="space-y-3 text-navy-deep">
                      <li>Sliced Cheese</li>
                      <li>Cottage Cheese<br /><span className="text-sm italic text-gray-600">Individual jar</span></li>
                      <li>Organic granola</li>
                      <li>Organic granola w. berries</li>
                      <li>Cold cut meat<br /><span className="text-sm italic text-gray-600">No pork option available</span></li>
                      <li>Bircher muesli</li>
                      <li>Organic Porridge<br /><span className="text-sm italic text-gray-600">Milk or Water</span></li>
                      <li>Smoked salmon<br /><span className="text-sm italic text-gray-600">With sour cream, capers, blinis and lemon</span></li>
                      <li>Fruit Yogurt<br /><span className="text-sm italic text-gray-600">Individual jar | Specify your flavour</span></li>
                      <li>Greek Yogurt<br /><span className="text-sm italic text-gray-600">Individual jar</span></li>
                      <li>Plain Yogurt<br /><span className="text-sm italic text-gray-600">Individual jar</span></li>
                    </ul>
                  </div>
                </div>

                {/* Hot Breakfast Section */}
                <div className="mt-12 pt-8 border-t border-gray-200">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    <div>
                      <h3 className="text-2xl font-light text-gold-luxury mb-6 pb-2 border-b border-gold-luxury">HOT BREAKFAST</h3>
                      <ul className="space-y-3 text-navy-deep">
                        <li>Bacon<br /><span className="text-sm italic text-gray-600">Crispy or soft</span></li>
                        <li>Benedict Eggs<br /><span className="text-sm italic text-gray-600">Free range</span></li>
                        <li>Boiled Eggs<br /><span className="text-sm italic text-gray-600">Free range, Soft or hard</span></li>
                        <li>Fried Eggs<br /><span className="text-sm italic text-gray-600">Free range</span></li>
                        <li>Poached Eggs<br /><span className="text-sm italic text-gray-600">Free range</span></li>
                        <li>Scrambled Eggs<br /><span className="text-sm italic text-gray-600">Free range</span></li>
                        <li>Hashbrown</li>
                        <li>Mushroom</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-2xl font-light text-gold-luxury mb-6 pb-2 border-b border-gold-luxury">CONDIMENTS</h3>
                      <ul className="space-y-3 text-navy-deep">
                        <li>Omelet plain with garnish<br /><span className="text-sm italic text-gray-600">Free range | Choose 2 garnishes</span></li>
                        <li>Plain omelet<br /><span className="text-sm italic text-gray-600">Free range</span></li>
                        <li>White omelet with garnish<br /><span className="text-sm italic text-gray-600">Choose 2 garnishes</span></li>
                        <li>White omelet<br /><span className="text-sm italic text-gray-600">Free range</span></li>
                        <li>Sausage<br /><span className="text-sm italic text-gray-600">Veal, Beef, Pork, Chicken or Vegetarian</span></li>
                        <li>Butter individual<br /><span className="text-sm italic text-gray-600">Plain or salty</span></li>
                        <li>Honey<br /><span className="text-sm italic text-gray-600">Individual jar</span></li>
                        <li>Jam<br /><span className="text-sm italic text-gray-600">Individual jar</span></li>
                        <li>Maple Syrup</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-2xl font-light text-gold-luxury mb-6 pb-2 border-b border-gold-luxury">BREAKFAST TRAY</h3>
                      <ul className="space-y-3 text-navy-deep">
                        <li>English breakfast tray</li>
                        <li>Continental breakfast tray</li>
                        <li>American breakfast tray</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="text-center mt-12">
                  <Button variant="outline" className="text-gold-luxury border-gold-luxury hover:bg-gold-luxury hover:text-white">
                    ORDER
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Starters Section */}
          <section>
            <div className="bg-navy-deep text-gold-luxury py-6">
              <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-4xl font-bold text-center">STARTERS</h2>
              </div>
            </div>
            <div className="bg-white py-12">
              <div className="max-w-6xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                  <div>
                    <h3 className="text-2xl font-light text-gold-luxury mb-6 pb-2 border-b border-gold-luxury">SALAD</h3>
                    <ul className="space-y-3 text-navy-deep">
                      <li>Prosciutto & Melon</li>
                      <li>Caprese salad</li>
                      <li>Caprese salad with burrata</li>
                      <li>Cesar salad with chicken</li>
                      <li>Cesar salad with prawns</li>
                      <li>Green salad</li>
                      <li>Greek salad</li>
                      <li>King crab salad</li>
                      <li>Tuna niçoise salad</li>
                      <li>Olivier Salad<br /><span className="text-sm italic text-gray-600">Russian style</span></li>
                      <li>Quinoa salad</li>
                      <li>Superfood salad</li>
                      <li>Salad wakame</li>
                      <li>Tabbouleh</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-2xl font-light text-gold-luxury mb-6 pb-2 border-b border-gold-luxury">HOMEMADE SOUP</h3>
                    <ul className="space-y-3 text-navy-deep">
                      <li>Bortsch soup</li>
                      <li>Chicken noodles soup</li>
                      <li>Lobster bisque</li>
                      <li>Miso soup H</li>
                      <li>Minestrone soup</li>
                      <li>Mushroom soup</li>
                      <li>Tomatoe & basil soup</li>
                      <li>Tom yam soup</li>
                      <li>Vegetables soup</li>
                    </ul>

                    <h3 className="text-2xl font-light text-gold-luxury mb-6 pb-2 border-b border-gold-luxury mt-8">CARPACCIO</h3>
                    <ul className="space-y-3 text-navy-deep">
                      <li>Beef carpaccio</li>
                      <li>Vegetarian carpaccio</li>
                      <li>Vitello tonato</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-2xl font-light text-gold-luxury mb-6 pb-2 border-b border-gold-luxury">TARTAR</h3>
                    <ul className="space-y-3 text-navy-deep">
                      <li>Beef tartar</li>
                      <li>Tiger prawn & avocado tartar</li>
                      <li>Salmon tartar<br /><span className="text-sm italic text-gray-600">Line caught</span></li>
                      <li>Mix tuna & salmon tartar<br /><span className="text-sm italic text-gray-600">Line caught</span></li>
                      <li>Tuna tartar<br /><span className="text-sm italic text-gray-600">Line caught</span></li>
                      <li>Vegetarian tartar</li>
                    </ul>

                    <h3 className="text-2xl font-light text-gold-luxury mb-6 pb-2 border-b border-gold-luxury mt-8">PRESTIGE</h3>
                    <ul className="space-y-3 text-navy-deep">
                      <li>Caviar</li>
                      <li>Foie gras parfait</li>
                    </ul>
                  </div>
                </div>

                <div className="text-center mt-12">
                  <Button variant="outline" className="text-gold-luxury border-gold-luxury hover:bg-gold-luxury hover:text-white">
                    ORDER
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Main Course Section */}
          <section>
            <div className="bg-navy-deep text-gold-luxury py-6">
              <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-4xl font-bold text-center">MAIN COURSE</h2>
              </div>
            </div>
            <div className="bg-white py-12">
              <div className="max-w-6xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                  <div>
                    <h3 className="text-2xl font-light text-gold-luxury mb-6 pb-2 border-b border-gold-luxury">BEEF</h3>
                    <ul className="space-y-3 text-navy-deep">
                      <li>Chili con carne</li>
                      <li>Beef chashlyk<br /><span className="text-sm italic text-gray-600">Russian style</span></li>
                      <li>Beef entrecote</li>
                      <li>Beef filet</li>
                      <li>Beef kotlety<br /><span className="text-sm italic text-gray-600">Russian style</span></li>
                      <li>Beef rib</li>
                      <li>Beef Rossini</li>
                      <li>Beef skewers</li>
                      <li>Beef stroganoff<br /><span className="text-sm italic text-gray-600">Russian style</span></li>
                    </ul>

                    <h3 className="text-2xl font-light text-gold-luxury mb-6 pb-2 border-b border-gold-luxury mt-8">VEAL</h3>
                    <ul className="space-y-3 text-navy-deep">
                      <li>Veal chashlyk<br /><span className="text-sm italic text-gray-600">Russian style</span></li>
                      <li>Veal chops</li>
                      <li>Veal filet</li>
                      <li>Veal kotlety<br /><span className="text-sm italic text-gray-600">Russian style</span></li>
                      <li>Milanese veal Veal skewer</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-2xl font-light text-gold-luxury mb-6 pb-2 border-b border-gold-luxury">LAMB</h3>
                    <ul className="space-y-3 text-navy-deep">
                      <li>Lamb chashlyk<br /><span className="text-sm italic text-gray-600">Russian style</span></li>
                      <li>Lamb chops</li>
                      <li>Lamb curry<br /><span className="text-sm italic text-gray-600">Russian style</span></li>
                      <li>Lamb filet</li>
                      <li>Rack of lamb</li>
                      <li>Lamb skewer</li>
                    </ul>

                    <h3 className="text-2xl font-light text-gold-luxury mb-6 pb-2 border-b border-gold-luxury mt-8">CHICKEN</h3>
                    <ul className="space-y-3 text-navy-deep">
                      <li>Chicken biryani</li>
                      <li>Chicken breast</li>
                      <li>Chicken chashlyk<br /><span className="text-sm italic text-gray-600">Russian style</span></li>
                      <li>Chicken curry<br /><span className="text-sm italic text-gray-600">Indian style</span></li>
                      <li>Chicken kotlety<br /><span className="text-sm italic text-gray-600">Russian style</span></li>
                      <li>Chicken skewers</li>
                      <li>Chicken tabaka</li>
                      <li>Chicken tenders</li>
                      <li>Chicken wings</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-2xl font-light text-gold-luxury mb-6 pb-2 border-b border-gold-luxury">FISH</h3>
                    <ul className="space-y-3 text-navy-deep">
                      <li>Cod<br /><span className="text-sm italic text-gray-600">Line caught</span></li>
                      <li>Fish kotlety<br /><span className="text-sm italic text-gray-600">Russian style</span></li>
                      <li>John dory<br /><span className="text-sm italic text-gray-600">Line caught</span></li>
                      <li>Lobster</li>
                      <li>King prawns</li>
                      <li>Salmon<br /><span className="text-sm italic text-gray-600">Line caught</span></li>
                      <li>Chilean Seabass<br /><span className="text-sm italic text-gray-600">Line caught</span></li>
                      <li>Sea bream<br /><span className="text-sm italic text-gray-600">Line caught</span></li>
                      <li>Sole<br /><span className="text-sm italic text-gray-600">Line caught Tuna | Line caught</span></li>
                      <li>Turbot<br /><span className="text-sm italic text-gray-600">Line caught</span></li>
                    </ul>

                    <h3 className="text-2xl font-light text-gold-luxury mb-6 pb-2 border-b border-gold-luxury mt-8">DUCK</h3>
                    <ul className="space-y-3 text-navy-deep">
                      <li>Duck breast</li>
                      <li>Crispy duck</li>
                    </ul>
                  </div>
                </div>

                <div className="text-center mt-12">
                  <Button variant="outline" className="text-gold-luxury border-gold-luxury hover:bg-gold-luxury hover:text-white">
                    ORDER
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Dessert Section */}
          <section>
            <div className="bg-navy-deep text-gold-luxury py-6">
              <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-4xl font-bold text-center">DESSERT</h2>
              </div>
            </div>
            <div className="bg-white py-12">
              <div className="max-w-6xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                  <div>
                    <h3 className="text-2xl font-light text-gold-luxury mb-6 pb-2 border-b border-gold-luxury">PASTRIES</h3>
                    <ul className="space-y-3 text-navy-deep">
                      <li>Carrot cake</li>
                      <li>Cheesecake</li>
                      <li>Honey cake<br /><span className="text-sm italic text-gray-600">Russian style</span></li>
                      <li>Opera cake</li>
                      <li>Macarons</li>
                      <li>Napoléon millefeuille</li>
                      <li>Petits fours</li>
                      <li>Tart<br /><span className="text-sm italic text-gray-600">(Berries, Apple, Pear or Lemon)</span></li>
                    </ul>
                  </div>

                  <div className="flex justify-center">
                    <div className="w-64 h-64 bg-gradient-to-br from-orange-400 via-red-400 to-purple-500 rounded-lg overflow-hidden">
                      <img 
                        src="/placeholder.svg" 
                        alt="Dessert presentation"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-light text-gold-luxury mb-6 pb-2 border-b border-gold-luxury">CLASSIC</h3>
                    <ul className="space-y-3 text-navy-deep">
                      <li>Creme brulée</li>
                      <li>Chocolat Fondant</li>
                      <li>Ice cream Haagen Dazs<br /><span className="text-sm italic text-gray-600">Individual jar | Specify your flavour</span></li>
                      <li>Panacotta</li>
                      <li>Seasonal fruit salad</li>
                      <li>Chocolate dipped Strawberries<br /><span className="text-sm italic text-gray-600">(Dark, Milk or White)</span></li>
                      <li>Tiramisu</li>
                    </ul>
                  </div>
                </div>

                <div className="text-center mt-12">
                  <Button variant="outline" className="text-gold-luxury border-gold-luxury hover:bg-gold-luxury hover:text-white">
                    ORDER
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Beverages Section */}
          <section>
            <div className="bg-navy-deep text-gold-luxury py-6">
              <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-4xl font-bold text-center">BEVERAGES</h2>
              </div>
            </div>
            <div className="bg-white py-12">
              <div className="max-w-6xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                  <div>
                    <h3 className="text-2xl font-light text-gold-luxury mb-6 pb-2 border-b border-gold-luxury">COLD</h3>
                    <ul className="space-y-3 text-navy-deep">
                      <li>Premium Water Selection</li>
                      <li>Fresh Juices</li>
                      <li>Soft Drinks</li>
                      <li>Iced Coffee & Tea</li>
                      <li>Energy Drinks</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-2xl font-light text-gold-luxury mb-6 pb-2 border-b border-gold-luxury">HOT</h3>
                    <ul className="space-y-3 text-navy-deep">
                      <li>Premium Coffee Selection</li>
                      <li>Espresso</li>
                      <li>Cappuccino</li>
                      <li>Premium Tea Collection</li>
                      <li>Hot Chocolate</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-2xl font-light text-gold-luxury mb-6 pb-2 border-b border-gold-luxury">ALCOHOL</h3>
                    <ul className="space-y-3 text-navy-deep">
                      <li>Champagne Selection</li>
                      <li>Wine Collection</li>
                      <li>Premium Spirits</li>
                      <li>Cocktail Service</li>
                      <li>Beer Selection</li>
                    </ul>
                  </div>
                </div>

                <div className="text-center mt-12">
                  <Button variant="outline" className="text-gold-luxury border-gold-luxury hover:bg-gold-luxury hover:text-white">
                    ORDER
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Sidebar Navigation */}
        <div className="hidden lg:block w-64 bg-gray-50 min-h-screen sticky top-16">
          <div className="p-6">
            <nav className="space-y-4">
              <a href="#breakfast" className="block text-gold-luxury hover:text-navy-deep transition-colors">
                Breakfast
              </a>
              <a href="#starters" className="block text-gray-600 hover:text-navy-deep transition-colors">
                Starters
              </a>
              <a href="#chef-platters" className="block text-gray-600 hover:text-navy-deep transition-colors">
                Chef Platters
              </a>
              <a href="#fruit-corner" className="block text-gray-600 hover:text-navy-deep transition-colors">
                Fruit corner
              </a>
              <a href="#main-course" className="block text-gray-600 hover:text-navy-deep transition-colors">
                Main Course
              </a>
              <a href="#dessert" className="block text-gray-600 hover:text-navy-deep transition-colors">
                Dessert
              </a>
              <a href="#beverages" className="block text-gray-600 hover:text-navy-deep transition-colors">
                Beverages
              </a>
              <a href="#non-food" className="block text-gray-600 hover:text-navy-deep transition-colors">
                Non Food
              </a>
              <div className="pt-4 border-t border-gray-200">
                <p className="text-gold-luxury font-semibold">**ORDER FORM**</p>
                <p className="text-sm text-gray-500 mt-2">Sans titre</p>
                <p className="text-sm text-gray-500">Sans titre</p>
              </div>
            </nav>
          </div>
        </div>
      </div>

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