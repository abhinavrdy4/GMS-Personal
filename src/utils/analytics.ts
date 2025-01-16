// Initialize dataLayer if it doesn't exist
declare global {
  interface Window {
    dataLayer: any[];
  }
}

// Track page views
export const trackPageView = (path: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'page_view', {
      page_path: path,
    });
  }
};

// Track search events
export const trackSearch = (searchTerm: string, resultsCount: number) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'search', {
      search_term: searchTerm,
      results_count: resultsCount,
    });
  }
};

// Track class/workshop views
export const trackEventView = (eventId: string, eventType: string, eventName: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'view_item', {
      items: [{
        id: eventId,
        name: eventName,
        category: eventType
      }]
    });
  }
};

// Track subscription plan selections
export const trackSubscriptionSelect = (planId: string, planName: string, price: number) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'begin_checkout', {
      items: [{
        id: planId,
        name: planName,
        price: price
      }]
    });
  }
};