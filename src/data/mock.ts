import { ChargingKit, StationTechnician, ItemBase } from '../types';
import mockChargingStation from './station-db.json';
import mockTechnician from './technician-db.json';

const addItemIndex = <T extends ItemBase>(itemList: T[]) => {
  return itemList.map((i, index) => {
    return {
      id: index,
      ...i,
    };
  });
};

export const mockTechnicianData = addItemIndex(mockTechnician) as StationTechnician[];
export const mockChargingStationData = addItemIndex(mockChargingStation) as ChargingKit[];
