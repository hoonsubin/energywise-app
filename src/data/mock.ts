import { ChargingKit, StationTechnician, ItemBase } from '../types';
import mockChargingStation from './ev-data.json';

const mockTechnician: StationTechnician[] = [
  {
    name: 'Göpfert Elektrotechnik GmbH',
    website: 'https://www.elektro-goepfert.de/elektro/elektroinstallation',
    description: 'dsad',
    address: 'St.-Johann-Straße 44',
    postalCode: 80999,
    city: 'Munich',
    phoneNo: '0899901880',
    email: 'info@pittroff.de',
  },
  {
    name: 'KRAMMER',
    website: 'https://www.krammer-technik.de',
    description: 'dsad',
    address: 'Grillparzerstraße 14',
    postalCode: 81675,
    city: 'Munich',
    phoneNo: '089411898200',
    email: 'info@krammer-technik.de',
  },
  {
    name: 'Hans Loy GmbH',
    website: 'http://hans-loy-elektro.de/leistungen/elektroinstallationen/',
    description: 'dsad',
    address: 'Landshuter Allee 51-53',
    postalCode: 80637,
    city: 'Munich',
    phoneNo: '0891306700',
    email: 'mail@hans-loy-elektro.de',
  },
];

const addItemIndex = <T extends ItemBase>(itemList: T[]) => {
  return itemList.map((i, index) => {
    return {
      id: index,
      ...i,
    };
  });
};

export const mockTechnicianData = addItemIndex(mockTechnician);
export const mockChargingStationData = addItemIndex(mockChargingStation) as ChargingKit[];
