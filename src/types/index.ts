interface ItemBase {
    name: string;
    icon?: string;
    description: string;
}

export interface ChargingKit extends ItemBase {
  priceRange: [number, number];
  provider: string;
  energy: ChargingKitEnergy;
  size: ChargingKitSize;
  purchaseLink: string;
  features: string[];
}

export interface ChargingKitEnergy {
  power: number;
  voltage: number;
  amperage: number;
}

export interface ChargingKitSize {
  height: number;
  width: number;
  weight: number;
  depth: number;
  cableLength: number[];
}

export interface StationTechnician extends ItemBase {
}
