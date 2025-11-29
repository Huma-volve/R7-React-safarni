export interface Hotel {
  id: number;
  name: string;
  city: string;
  country: string;
  image: string;
  rating: number;
  discount: string;
}

export const recommendedHotels: Hotel[] = [
  {
    id: 1,
    name: "Oasis Overture",
    city: "New York",
    country: "USA",
    rating: 4.2,
    discount: "10% Off",
    image: "https://i.imgur.com/6Iej2cE.jpeg",
  },
  {
    id: 2,
    name: "Hidden Haven",
    city: "New York",
    country: "USA",
    rating: 4.1,
    discount: "20% Off",
    image: "https://i.imgur.com/xD87Ukk.jpeg",
  },
  {
    id: 3,
    name: "Silent Nest",
    city: "New York",
    country: "USA",
    rating: 4.8,
    discount: "5% Off",
    image: "https://i.imgur.com/3d1XJ9F.jpeg",
  },
  {
    id: 4,
    name: "Secret Escape",
    city: "New York",
    country: "USA",
    rating: 4.6,
    discount: "7% Off",
    image: "https://i.imgur.com/3POYh3W.jpeg",
  },
];

export const nearbyHotels: Hotel[] = [
  {
    id: 5,
    name: "Golden Valley",
    city: "New York",
    country: "USA",
    rating: 4.3,
    discount: "15% Off",
    image: "https://i.imgur.com/OXqv2V0.jpeg",
  },
  {
    id: 6,
    name: "Serene Shelter",
    city: "New York",
    country: "USA",
    rating: 4.3,
    discount: "10% Off",
    image: "https://i.imgur.com/5o4Xd4n.jpeg",
  },
  {
    id: 7,
    name: "Mystic Retreat",
    city: "New York",
    country: "USA",
    rating: 4.3,
    discount: "20% Off",
    image: "https://i.imgur.com/vqPjYzB.jpeg",
  },
  {
    id: 8,
    name: "Dreamer's Refuge",
    city: "New York",
    country: "USA",
    rating: 4.3,
    discount: "15% Off",
    image: "https://i.imgur.com/Q3jHF2Z.jpeg",
  },
];



