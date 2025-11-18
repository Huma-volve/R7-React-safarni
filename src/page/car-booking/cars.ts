// src/data/cars.ts
export interface Car {
  id: string;
  name: string;
  transmission: string;
  seats: number;
  fuel: string;
  image: string;
  power?: string;
  maxSpeed?: string;
  acceleration?: string;
}

export const cars: Car[] = [
  {
    id: "1",
    name: "S 500 Sedan",
    transmission: "Automatic",
    seats: 5,
    fuel: "Diesel",
    image:
      "https://www.mbusa.com/content/dam/mb-nafta/us/myco/my23/s/sedan/class-page/2023-S-SEDAN-CLASS-HIGHLIGHT-02-DR.jpg",
    power: "429 hp @ 6,100 rpm",
    maxSpeed: "280 km/h",
    acceleration: "4.9 sec 0-60 mph",
  },
  {
    id: "2",
    name: "GLA 250 SUV",
    transmission: "Automatic",
    seats: 7,
    fuel: "Diesel",
    image:
      "https://www.mbusa.com/content/dam/mb-nafta/us/myco/my23/gla/suv/class-page/2023-GLA-SUV-CLASS-HIGHLIGHT-02-DR.jpg",
    power: "225 hp",
    maxSpeed: "240 km/h",
    acceleration: "7.4 sec 0-60 mph",
  },
  {
    id: "3",
    name: "Volvo XC40",
    transmission: "Automatic",
    seats: 5,
    fuel: "Petrol",
    image:
      "https://www.volvocars.com/images/v/-/media/project/contentplatform/data/media/my23/xc40-hybrid/gallery/xc40h-gallery-1-16x9.jpg",
    power: "197 hp",
    maxSpeed: "210 km/h",
    acceleration: "8.2 sec 0-60 mph",
  },
  {
    id: "4",
    name: "Mazda CX-30",
    transmission: "Automatic",
    seats: 5,
    fuel: "Diesel",
    image:
      "https://www.mazdausa.com/siteassets/vehicles/2024/cx-30/gallery/hero/2024-cx-30-gallery-hero-1.jpg",
    power: "186 hp",
    maxSpeed: "200 km/h",
    acceleration: "8.9 sec 0-60 mph",
  },
];
