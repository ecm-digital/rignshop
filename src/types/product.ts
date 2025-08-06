export interface SmartRing {
  id: string;
  name: string;
  color: 'black' | 'silver' | 'gold';
  price: number;
  images: string[];
  specifications: Specification[];
  features: Feature[];
}

export interface Specification {
  name: string;
  value: string;
  description?: string;
}

export interface Feature {
  id: string;
  name: string;
  description: string;
  icon: string;
}
