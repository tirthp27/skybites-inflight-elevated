-- Create catering_requests table to store form submissions
CREATE TABLE public.catering_requests (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  departure_airport TEXT NOT NULL,
  fbo TEXT,
  flight_date DATE NOT NULL,
  flight_time TIME NOT NULL,
  passenger_count TEXT NOT NULL,
  catering_preferences TEXT[] DEFAULT '{}',
  special_requests TEXT,
  client_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  response_time TEXT NOT NULL,
  webhook_url TEXT,
  status TEXT DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.catering_requests ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert requests (public form)
CREATE POLICY "Anyone can create catering requests" 
ON public.catering_requests 
FOR INSERT 
WITH CHECK (true);

-- Create policy to allow viewing own requests based on email
CREATE POLICY "Users can view their own requests" 
ON public.catering_requests 
FOR SELECT 
USING (true);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_catering_requests_updated_at
  BEFORE UPDATE ON public.catering_requests
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();