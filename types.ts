export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  fullDescription: string;
  price: number;
  currency: string;
  images: string[];
  features: string[];
  stockStatus: 'In Stock' | 'Low Stock' | 'Made to Order';
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface NavItem {
  label: string;
  path: string;
}