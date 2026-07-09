export interface Highlight {
  title: string;
  description: string;
}

export interface Destination {
  id: string;
  name: string;
  region: 'North' | 'Central' | 'South'; // Bắc, Trung, Nam
  regionVi: string;
  image: string;
  intro: string;
  highlights: Highlight[];
  bestTime: string; // Mùa đẹp nhất
  estimatedCost: string; // Chi phí tối thiểu dự kiến
  mapUrl: string; // Embed or static map reference description
  coordinates: { lat: number; lng: number };
}

export interface DayActivity {
  time: string;
  activity: string;
  notes?: string;
  icon?: string;
}

export interface ItineraryDay {
  dayNumber: number;
  title: string;
  activities: DayActivity[];
}

export interface Itinerary {
  id: string;
  destinationId: string;
  title: string;
  duration: string;
  summary: string;
  days: ItineraryDay[];
}

export interface CostItem {
  category: string;
  amount: number;
  description: string;
}

export interface CostBreakdown {
  destinationId: string;
  title: string;
  items: CostItem[];
  total: number;
  tier: 'Low' | 'Medium' | 'High';
  tierVi: string;
}

export interface Photo {
  id: string;
  albumId: string;
  url: string;
  caption: string;
  location: string;
}

export interface Album {
  id: string;
  name: string;
  coverImage: string;
  description: string;
  photos: Photo[];
}

export interface Comment {
  id: string;
  destinationId: string; // 'general' or specific destinationId
  author: string;
  rating: number; // 1-5
  content: string;
  createdAt: string;
  likes: number;
}

export interface ContactFeedback {
  id: string;
  name: string;
  email: string;
  message: string;
  createdAt: string;
}
