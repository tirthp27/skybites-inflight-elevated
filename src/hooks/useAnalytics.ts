import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';

// Generate a unique session ID
const generateSessionId = () => {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
};

// Get or create session ID
const getSessionId = () => {
  let sessionId = sessionStorage.getItem('analytics_session_id');
  if (!sessionId) {
    sessionId = generateSessionId();
    sessionStorage.setItem('analytics_session_id', sessionId);
  }
  return sessionId;
};

// Device detection helpers
const getDeviceType = () => {
  const userAgent = navigator.userAgent;
  if (/tablet|ipad|playbook|silk/i.test(userAgent)) {
    return 'tablet';
  }
  if (/mobile|iphone|ipod|android|blackberry|opera|mini|windows\sce|palm|smartphone|iemobile/i.test(userAgent)) {
    return 'mobile';
  }
  return 'desktop';
};

const getBrowser = () => {
  const userAgent = navigator.userAgent;
  if (userAgent.includes('Chrome')) return 'Chrome';
  if (userAgent.includes('Firefox')) return 'Firefox';
  if (userAgent.includes('Safari')) return 'Safari';
  if (userAgent.includes('Edge')) return 'Edge';
  return 'Unknown';
};

const getOS = () => {
  const userAgent = navigator.userAgent;
  if (userAgent.includes('Windows')) return 'Windows';
  if (userAgent.includes('Mac')) return 'macOS';
  if (userAgent.includes('Linux')) return 'Linux';
  if (userAgent.includes('Android')) return 'Android';
  if (userAgent.includes('iOS')) return 'iOS';
  return 'Unknown';
};

interface AnalyticsData {
  session_id: string;
  page_path: string;
  page_title?: string;
  referrer?: string;
  user_agent: string;
  device_type: string;
  browser: string;
  os: string;
  screen_resolution: string;
  event_type?: string;
  event_data?: Record<string, any>;
}

export const useAnalytics = () => {
  const location = useLocation();
  const startTimeRef = useRef<number>(Date.now());

  // Track page view
  const trackPageView = async () => {
    const analyticsData: AnalyticsData = {
      session_id: getSessionId(),
      page_path: location.pathname,
      page_title: document.title,
      referrer: document.referrer || undefined,
      user_agent: navigator.userAgent,
      device_type: getDeviceType(),
      browser: getBrowser(),
      os: getOS(),
      screen_resolution: `${screen.width}x${screen.height}`,
      event_type: 'page_view',
    };

    try {
      await supabase.from('analytics').insert(analyticsData);
    } catch (error) {
      console.error('Analytics tracking error:', error);
    }
  };

  // Track custom event
  const trackEvent = async (eventType: string, eventData?: Record<string, any>) => {
    const analyticsData: AnalyticsData = {
      session_id: getSessionId(),
      page_path: location.pathname,
      page_title: document.title,
      user_agent: navigator.userAgent,
      device_type: getDeviceType(),
      browser: getBrowser(),
      os: getOS(),
      screen_resolution: `${screen.width}x${screen.height}`,
      event_type: eventType,
      event_data: eventData,
    };

    try {
      await supabase.from('analytics').insert(analyticsData);
    } catch (error) {
      console.error('Analytics event tracking error:', error);
    }
  };

  // Track page duration when leaving
  const trackPageDuration = async () => {
    const duration = Math.round((Date.now() - startTimeRef.current) / 1000);
    
    try {
      await supabase.from('analytics').insert({
        session_id: getSessionId(),
        page_path: location.pathname,
        page_title: document.title,
        user_agent: navigator.userAgent,
        device_type: getDeviceType(),
        browser: getBrowser(),
        os: getOS(),
        screen_resolution: `${screen.width}x${screen.height}`,
        event_type: 'page_duration',
        duration_seconds: duration,
      });
    } catch (error) {
      console.error('Analytics duration tracking error:', error);
    }
  };

  useEffect(() => {
    // Reset start time for new page
    startTimeRef.current = Date.now();
    
    // Track page view
    trackPageView();

    // Track page duration on beforeunload
    const handleBeforeUnload = () => {
      trackPageDuration();
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
      // Track duration when component unmounts (route change)
      trackPageDuration();
    };
  }, [location.pathname]);

  return { trackEvent };
};