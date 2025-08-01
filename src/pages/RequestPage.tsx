import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { Plane, Clock, Users, Upload } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

const RequestPage = () => {
  useEffect(() => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', 'G-03V4DHDLEM', {
        page_title: 'Request Catering - Sky Bites',
        page_location: window.location.href
      });
    }
  }, []);

  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    departureAirport: "",
    fbo: "",
    flightDate: "",
    flightTime: "",
    passengerCount: "",
    cateringPreferences: [] as string[],
    specialRequests: "",
    clientName: "",
    email: "",
    phone: "",
    responseTime: "",
    webhookUrl: "",
  });

  const cateringOptions = [
    "Breakfast",
    "Lunch", 
    "Dinner",
    "Snacks",
    "Beverages",
    "Vegetarian",
    "Vegan",
    "Gluten-Free",
    "Kosher",
    "Halal",
    "Custom Menu"
  ];

  const handleCheckboxChange = (option: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      cateringPreferences: checked 
        ? [...prev.cateringPreferences, option]
        : prev.cateringPreferences.filter(item => item !== option)
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Save to Supabase
      const { error } = await supabase
        .from('catering_requests')
        .insert({
          departure_airport: formData.departureAirport,
          fbo: formData.fbo,
          flight_date: formData.flightDate,
          flight_time: formData.flightTime,
          passenger_count: formData.passengerCount,
          catering_preferences: formData.cateringPreferences,
          special_requests: formData.specialRequests,
          client_name: formData.clientName,
          email: formData.email,
          phone: formData.phone,
          response_time: formData.responseTime,
          webhook_url: formData.webhookUrl || null,
        });

      if (error) {
        throw error;
      }
      
      // If webhook URL is provided, trigger Zapier
      if (formData.webhookUrl) {
        try {
          await fetch(formData.webhookUrl, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            mode: "no-cors",
            body: JSON.stringify({
              ...formData,
              timestamp: new Date().toISOString(),
              type: "catering_request"
            }),
          });
        } catch (error) {
          console.error("Webhook error:", error);
        }
      }

      toast({
        title: "Request Submitted Successfully!",
        description: "We'll get back to you within your requested timeframe with a customized quote.",
      });

      // Reset form
      setFormData({
        departureAirport: "",
        fbo: "",
        flightDate: "",
        flightTime: "",
        passengerCount: "",
        cateringPreferences: [],
        specialRequests: "",
        clientName: "",
        email: "",
        phone: "",
        responseTime: "",
        webhookUrl: "",
      });

    } catch (error) {
      console.error("Error submitting request:", error);
      toast({
        title: "Error",
        description: "There was an issue submitting your request. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen pt-16 bg-silver-elegant">
      {/* Header */}
      <section className="bg-gradient-to-r from-navy-deep to-sky-blue text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Request Premium Catering
          </h1>
          <p className="text-xl text-gray-200">
            Tell us about your flight and we'll create a customized catering experience
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Flight Details */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Plane className="w-5 h-5 text-sky-blue" />
                  <span>Flight Details</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="departureAirport">Departure Airport *</Label>
                    <Input
                      id="departureAirport"
                      placeholder="e.g., LAX, JFK, LHR"
                      value={formData.departureAirport}
                      onChange={(e) => setFormData(prev => ({ ...prev, departureAirport: e.target.value }))}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="fbo">FBO/Terminal</Label>
                    <Input
                      id="fbo"
                      placeholder="e.g., Signature Flight Support"
                      value={formData.fbo}
                      onChange={(e) => setFormData(prev => ({ ...prev, fbo: e.target.value }))}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="flightDate">Flight Date *</Label>
                    <Input
                      id="flightDate"
                      type="date"
                      value={formData.flightDate}
                      onChange={(e) => setFormData(prev => ({ ...prev, flightDate: e.target.value }))}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="flightTime">Flight Time *</Label>
                    <Input
                      id="flightTime"
                      type="time"
                      value={formData.flightTime}
                      onChange={(e) => setFormData(prev => ({ ...prev, flightTime: e.target.value }))}
                      required
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Passenger Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Users className="w-5 h-5 text-sky-blue" />
                  <span>Passenger Information</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div>
                  <Label htmlFor="passengerCount">Number of Passengers *</Label>
                  <Select onValueChange={(value) => setFormData(prev => ({ ...prev, passengerCount: value }))}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select passenger count" />
                    </SelectTrigger>
                    <SelectContent>
                      {[...Array(20)].map((_, i) => (
                        <SelectItem key={i + 1} value={(i + 1).toString()}>
                          {i + 1} {i === 0 ? 'passenger' : 'passengers'}
                        </SelectItem>
                      ))}
                      <SelectItem value="20+">20+ passengers</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            {/* Catering Preferences */}
            <Card>
              <CardHeader>
                <CardTitle>Catering Preferences</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {cateringOptions.map((option) => (
                    <div key={option} className="flex items-center space-x-2">
                      <Checkbox
                        id={option}
                        checked={formData.cateringPreferences.includes(option)}
                        onCheckedChange={(checked) => handleCheckboxChange(option, checked as boolean)}
                      />
                      <Label htmlFor={option} className="text-sm">{option}</Label>
                    </div>
                  ))}
                </div>
                <div>
                  <Label htmlFor="specialRequests">Special Requests & Dietary Notes</Label>
                  <Textarea
                    id="specialRequests"
                    placeholder="Please describe any specific dietary requirements, allergies, preferred cuisines, or special requests..."
                    value={formData.specialRequests}
                    onChange={(e) => setFormData(prev => ({ ...prev, specialRequests: e.target.value }))}
                    rows={4}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="clientName">Full Name *</Label>
                  <Input
                    id="clientName"
                    placeholder="Your full name"
                    value={formData.clientName}
                    onChange={(e) => setFormData(prev => ({ ...prev, clientName: e.target.value }))}
                    required
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+1 (555) 123-4567"
                      value={formData.phone}
                      onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                      required
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Response Time & Zapier Integration */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Clock className="w-5 h-5 text-sky-blue" />
                  <span>Response Preferences</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="responseTime">Preferred Response Time *</Label>
                  <Select onValueChange={(value) => setFormData(prev => ({ ...prev, responseTime: value }))}>
                    <SelectTrigger>
                      <SelectValue placeholder="When do you need a response?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="asap">ASAP (Rush fee may apply)</SelectItem>
                      <SelectItem value="3hours">Within 3 Hours</SelectItem>
                      <SelectItem value="24hours">Within 24 Hours</SelectItem>
                      <SelectItem value="48hours">Within 48 Hours</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="webhookUrl">Zapier Webhook URL (Optional)</Label>
                  <Input
                    id="webhookUrl"
                    placeholder="https://hooks.zapier.com/hooks/catch/..."
                    value={formData.webhookUrl}
                    onChange={(e) => setFormData(prev => ({ ...prev, webhookUrl: e.target.value }))}
                  />
                  <p className="text-sm text-gray-500 mt-1">
                    Connect your CRM or project management tool to automatically receive this request
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Submit Button */}
            <div className="text-center">
              <Button 
                type="submit" 
                variant="luxury" 
                size="lg" 
                disabled={isLoading}
                className="px-12 py-4 text-lg"
              >
                {isLoading ? "Submitting Request..." : "Submit Catering Request"}
              </Button>
              <p className="text-sm text-gray-500 mt-4">
                We'll review your request and get back to you with a customized quote within your preferred timeframe.
              </p>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default RequestPage;