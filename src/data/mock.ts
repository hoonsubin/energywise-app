import { ChargingKit } from "../types";

export const mockChargingStation: ChargingKit[] = [
  {
    name: "Hello world",
    icon: "hey",
    purchaseLink: '',
    provider: '',
    description: 'This is the best charging station kit you can ever find.',
    features: ['bluetooth', 'wireless', 'wlan', '4g'],
    priceRange: [30.5, 69],
    energy: {
      wattage: 300,
      voltage: 2,
      amperage: 200,
    },
    size: {
      height: 4,
      width: 5,
      weight: 30,
      cableLength: [15, 30],
    },
  },
  {
    name: "Hello world 2",
    icon: "hey",
    purchaseLink: '',
    provider: '',
    description: '',
    features: [],
    priceRange: [30.5, 69],
    energy: {
      wattage: 300,
      voltage: 2,
      amperage: 200,
    },
    size: {
      height: 4,
      width: 5,
      weight: 30,
      cableLength: [15, 30],
    },
  },
];
