// src/data/cars.ts
import brand1 from "../../assets/car/brand1.png";
import brand2 from "../../assets/car/brand2.png";
import brand3 from "../../assets/car/brand3.png";
import brand4 from "../../assets/car/brand4.png";
import brand5 from "../../assets/car/brand5.png";
import brand6 from "../../assets/car/brand6.png";
import car1 from "../../assets/car/car1.png";
import car2 from "../../assets/car/car2.png";
import car3 from "../../assets/car/car3.png";
import car4 from "../../assets/car/car4.png";
export interface Brand {
  id: string;
  name: string;
  image: string;
}

export interface Car {
  id: string;
  name: string;
  brandId: string;
  transmission: string;
  seats: number;
  fuel: string;
  image: string;
  power?: string;
  maxSpeed?: string;
  acceleration?: string;
}

/* ---------- BRANDS ---------- */

export const brands: Brand[] = [
  {
    id: "1",
    name: "Mercedes",
    image: brand1,
  },
  {
    id: "2",
    name: "Volvo",
    image: brand2,
  },
  {
    id: "3",
    name: "Mazda",
    image: brand3,
  },
    {
    id: "4",
    name: "Mercedes",
    image: brand4,
  },
  {
    id: "5",
    name: "Volvo",
    image: brand5,
  },
  {
    id: "6",
    name: "Mazda",
    image: brand6,
  },
];

/* ---------- CARS ---------- */
export const cars: Car[] = [
  {
    id: "1",
    name: "S 500 Sedan",
    brandId: "1",
    transmission: "Automatic",
    seats: 5,
    fuel: "Diesel",
    image: car1,
    power: "429 hp @ 6,100 rpm",
    maxSpeed: "280 km/h",
    acceleration: "4.9 sec 0-60 mph",
  },
  {
    id: "2",
    name: "GLA 250 SUV",
    brandId: "1",
    transmission: "Automatic",
    seats: 7,
    fuel: "Diesel",
    image: car2,
    power: "225 hp",
    maxSpeed: "240 km/h",
    acceleration: "7.4 sec 0-60 mph",
  },
  {
    id: "3",
    name: "Volvo XC40",
    brandId: "2",
    transmission: "Automatic",
    seats: 5,
    fuel: "Petrol",
    image: car3,
    power: "197 hp",
    maxSpeed: "210 km/h",
    acceleration: "8.2 sec 0-60 mph",
  },
  {
    id: "4",
    name: "Mazda CX-30",
    brandId: "3",
    transmission: "Automatic",
    seats: 5,
    fuel: "Diesel",
    image: car4,
    power: "186 hp",
    maxSpeed: "200 km/h",
    acceleration: "8.9 sec 0-60 mph",
  },
];