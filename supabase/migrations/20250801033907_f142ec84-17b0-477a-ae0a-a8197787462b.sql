-- Create analytics table for website tracking
CREATE TABLE public.analytics (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  session_id TEXT NOT NULL,
  page_path TEXT NOT NULL,
  page_title TEXT,
  referrer TEXT,
  user_agent TEXT,
  timestamp TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  duration_seconds INTEGER,
  user_id UUID,
  ip_address TEXT,
  country TEXT,
  city TEXT,
  device_type TEXT,
  browser TEXT,
  os TEXT,
  screen_resolution TEXT,
  event_type TEXT DEFAULT 'page_view',
  event_data JSONB,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.analytics ENABLE ROW LEVEL SECURITY;

-- Create policy to allow all inserts (for anonymous tracking)
CREATE POLICY "Allow analytics tracking" 
ON public.analytics 
FOR INSERT 
WITH CHECK (true);

-- Create policy to allow reading analytics data
CREATE POLICY "Allow reading analytics" 
ON public.analytics 
FOR SELECT 
USING (true);

-- Create index for better performance
CREATE INDEX idx_analytics_timestamp ON public.analytics(timestamp);
CREATE INDEX idx_analytics_page_path ON public.analytics(page_path);
CREATE INDEX idx_analytics_session_id ON public.analytics(session_id);

-- Create function to update duration
CREATE OR REPLACE FUNCTION public.update_analytics_duration()
RETURNS TRIGGER AS $$
BEGIN
  NEW.created_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = '';

-- Create trigger for automatic timestamps
CREATE TRIGGER update_analytics_created_at
BEFORE UPDATE ON public.analytics
FOR EACH ROW
EXECUTE FUNCTION public.update_analytics_duration();