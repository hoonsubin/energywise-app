import { ChargingKit, StationTechnician, ItemBase } from '../types';

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



const mockTechnician: StationTechnician[] = [
  {
    name: 'Göpfert Elektrotechnik GmbH',
    website:'https://www.elektro-goepfert.de/elektro/elektroinstallation',
    description:'dsad',
    address: 'St.-Johann-Straße 44',
    postalCode: 80999,
    city: 'Munich',
    phoneNo: '0899901880',
    email: 'info@pittroff.de'
  },
  {
    name: 'KRAMMER',
    website:'https://www.krammer-technik.de',
    description:'dsad',
    address: 'Grillparzerstraße 14',
    postalCode: 81675,
    city: 'Munich',
    phoneNo: '089411898200',
    email: 'info@krammer-technik.de'
  },
  {
    name: 'Hans Loy GmbH',
    website:'http://hans-loy-elektro.de/leistungen/elektroinstallationen/',
    description:'dsad',
    address: 'Landshuter Allee 51-53',
    postalCode: 80637,
    city: 'Munich',
    phoneNo: '0891306700',
    email: 'mail@hans-loy-elektro.de'
  }
]

const addItemIndex = <T extends ItemBase>(itemList: T[]) => {
  return itemList.map((i, index) => {
    return {
      id: index,
      ...i,
    };
  })
}

export const mockTechnicianData = addItemIndex(mockTechnician);
export const mockChargingStationData = addItemIndex(mockChargingStation);