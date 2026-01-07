import plase1 from "../../assets/hotel/plase1.png"
import plase2 from "../../assets/hotel/plase2.png"
import plase3 from "../../assets/hotel/plase3.png"
import plase4 from "../../assets/hotel/plase4.png"
import plase5 from "../../assets/hotel/plase5.png"
import plase6 from "../../assets/hotel/plase6.png"
import plase7 from "../../assets/hotel/plase7.png"
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
    image: plase1,
  },
  {
    id: 2,
    name: "Hidden Haven",
    city: "New York",
    country: "USA",
    rating: 4.1,
    discount: "20% Off",
    image: plase2,
  },
  {
    id: 3,
    name: "Silent Nest",
    city: "New York",
    country: "USA",
    rating: 4.8,
    discount: "5% Off",
    image: plase3,
  },
  {
    id: 4,
    name: "Secret Escape",
    city: "New York",
    country: "USA",
    rating: 4.6,
    discount: "7% Off",
    image:plase4,
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
    image: plase5,
  },
  {
    id: 6,
    name: "Serene Shelter",
    city: "New York",
    country: "USA",
    rating: 4.3,
    discount: "10% Off",
    image: plase6,
  },
  {
    id: 7,
    name: "Mystic Retreat",
    city: "New York",
    country: "USA",
    rating: 4.3,
    discount: "20% Off",
    image: plase7,
  },
  {
    id: 8,
    name: "Dreamer's Refuge",
    city: "New York",
    country: "USA",
    rating: 4.3,
    discount: "15% Off",
    image: plase4,
  },
];



