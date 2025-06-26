export const getUTMTrackingData = (): Record<string, string> => {
  if (typeof window === 'undefined') return {};

  // Check if we have existing UTM data in sessionStorage
  const storedUtm = sessionStorage.getItem('sessionUTM');
  if (storedUtm) {
    return JSON.parse(storedUtm);
  }

  // Check URL for new UTM parameters
  const url = new URL(window.location.href);
  const params = url.searchParams;
  const hasUTMParams = [
    'utm_source', 'utm_custom_source', 'utm_medium', 
    'utm_campaign', 'utm_id', 'utm_term', 'utm_content'
  ].some(key => params.has(key));

  // Default organic values
  const utmData = {
    'First Page Seen': '',
    'Original Traffic Source': 'Organic Search',
    'Original Traffic Source Drill-Down 1': '',
    'Original Traffic Source Drill-Down 2': '',
    'UTM Term-First Page Seen': '',
    'UTM Content-First Page Seen': '',
  };

  // If new UTM params exist, capture them
  if (hasUTMParams) {
    utmData['First Page Seen'] = url.href;
    utmData['Original Traffic Source'] = (params.get('utm_source') || '').replace(/\+/g, ' ').trim();
    utmData['Original Traffic Source Drill-Down 1'] = (params.get('utm_custom_source') || '').replace(/\+/g, ' ').trim();
    utmData['Original Traffic Source Drill-Down 2'] = (params.get('utm_campaign') || '').replace(/\+/g, ' ').trim();
    utmData['UTM Term-First Page Seen'] = (params.get('utm_term') || '').replace(/\+/g, ' ').trim();
    utmData['UTM Content-First Page Seen'] = (params.get('utm_content') || '').replace(/\+/g, ' ').trim();
    
    // Store in sessionStorage
    sessionStorage.setItem('sessionUTM', JSON.stringify(utmData));
  }

  return utmData;
};