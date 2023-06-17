import { ChargingKit } from '../types';

const mockChargingStation: ChargingKit[] = [
  {
    name: 'Terra AC Wallbox',
    image: 'https://docs-demo.ionic.io/assets/madison.jpg',
    purchaseLink: '',
    provider: 'ABB Ltd',
    description: 'This is the best charging station kit you can ever find.',
    features: ['bluetooth', 'wireless', 'wlan', '4g'],
    priceRange: [30.5, 69],
    energy: {
      power: 300,
      voltage: 2,
      phase: 'single'
    },
    size: {
      height: 320,
      width: 195,
      depth: 143,
      weight: 30,
      cableLength: [15, 30],
    },
  },
  {
    name: 'Hello world 2',
    image: 'https://docs-demo.ionic.io/assets/madison.jpg',
    purchaseLink: '',
    provider: '',
    description: '',
    features: [],
    priceRange: [30.5, 69],
    energy: {
      power: 300,
      voltage: 2,
      phase: 'triple'
    },
    size: {
      height: 4,
      width: 5,
      weight: 30,
      depth: 20,
      cableLength: [15, 30],
    },
  },
  {
    name: 'Terra AC Wallbox',
    image: 'https://docs-demo.ionic.io/assets/madison.jpg',
    purchaseLink: '',
    provider: 'ABB Ltd',
    description: 'This is the best charging station kit you can ever find.',
    features: ['bluetooth', 'wireless', 'wlan', '4g'],
    priceRange: [30.5, 69],
    energy: {
      power: 300,
      voltage: 2,
      phase: 'single'
    },
    size: {
      height: 320,
      width: 195,
      depth: 143,
      weight: 30,

      cableLength: [15, 30],
    },
  },
];

export const mockChargingStationData = mockChargingStation.map((i, index) => {
  return {
    id: index,
    ...i,
  };
});
