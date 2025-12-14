import { Product } from './types';

export const COMPANY_INFO = {
  name: "Madan Mahal",
  email: "choukseypaper@gmail.com",
  phone1: "+91 9425837763   ",
  phone2: "+91 8989000658",
  address: "Krishna Kunj, Beside Petrol Pump, Madan Mahal, Jabalpur, Madhya Pradesh 482002, India",
};

export const PRODUCTS: Product[] = [
  {
    id: "p-001",
    name: "Classic Spiral Notebook",
    category: "Notebooks",
    description: "Durable spiral binding with 70gsm recycled paper.",
    fullDescription: "Our Classic Spiral Notebook is designed for students and professionals alike. Featuring a sturdy poly cover and 160 pages of high-quality, 70gsm recycled paper that resists ink bleed-through. The spiral binding allows the book to lay flat for comfortable writing.",
    price: 4.50,
    currency: "USD",
    images: [
      "/demo.jpg",
      "https://picsum.photos/id/20/800/800",
      "https://picsum.photos/id/119/800/800"
    ],
    features: [
      "160 ruled pages",
      "Recycled paper material",
      "Lay-flat spiral binding",
      "Water-resistant cover"
    ],
    stockStatus: 'In Stock'
  },
  {
    id: "p-002",
    name: "Executive Hardcover Register",
    category: "Registers",
    description: "Professional hardcover register for office record keeping.",
    fullDescription: "Maintain your records with dignity using our Executive Hardcover Register. Bound in a premium faux-leather texture, this register contains 400 pages of acid-free archival quality paper, ensuring your data lasts for decades.",
    price: 12.00,
    currency: "USD",
    images: [
      "/Demo 2.jpeg",
      "https://picsum.photos/id/180/800/800"
    ],
    features: [
      "400 pages",
      "Hardbound cover",
      "Index page included",
      "Numbered pages"
    ],
    stockStatus: 'In Stock'
  },
  {
    id: "p-003",
    name: "Eco-Sketch Artist Pad",
    category: "Art Supplies",
    description: "Heavyweight textured paper perfect for charcoal and graphite.",
    fullDescription: "Unleash your creativity on our Eco-Sketch Artist Pad. Each sheet is 150gsm, providing a substantial tooth for charcoal, graphite, and light washes. Completely acid-free to prevent yellowing over time.",
    price: 8.99,
    currency: "USD",
    images: [
      "https://picsum.photos/id/152/800/800"
    ],
    features: [
      "50 sheets",
      "150gsm heavyweight paper",
      "Top glue binding",
      "Acid-free"
    ],
    stockStatus: 'Low Stock'
  },
  {
    id: "p-004",
    name: "Premium A4 Copier Paper",
    category: "Office Supplies",
    description: "High whiteness, jam-free paper for all printers.",
    fullDescription: "Reliability meets sustainability. Our Premium A4 Copier Paper is engineered for high-speed printing without jams. With 96 brightness, your text pops, making it ideal for presentations and official documents.",
    price: 6.50,
    currency: "USD",
    images: [
      "https://picsum.photos/id/175/800/800",
      "https://picsum.photos/id/250/800/800",
      "https://picsum.photos/id/366/800/800"
    ],
    features: [
      "500 sheets per ream",
      "80gsm weight",
      "ColorLok technology",
      "FSC Certified"
    ],
    stockStatus: 'In Stock'
  },
  {
    id: "p-005",
    name: "Pocket Memo Pad",
    category: "Notebooks",
    description: "Compact size for notes on the go.",
    fullDescription: "Never lose a thought again. This pocket-sized memo pad fits easily into a shirt pocket or purse. Featuring perforated sheets for easy tear-out and a stiff cardboard back for writing without a table.",
    price: 2.25,
    currency: "USD",
    images: [
      "https://picsum.photos/id/401/800/800",
      "https://picsum.photos/id/534/800/800"
    ],
    features: [
      "50 sheets",
      "Top wire binding",
      "Perforated pages",
      "3x5 inch size"
    ],
    stockStatus: 'Made to Order'
  }
];