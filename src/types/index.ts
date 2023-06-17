type Phase = 'single' | 'triple';

export interface ItemBase {
  id?: number;
  name: string;
  image?: string;
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
  phase: Phase;
}

export interface ChargingKitSize {
  height: number;
  width: number;
  weight: number;
  depth: number;
  cableLength: number[];
}

export interface StationTechnician extends ItemBase {
  address: string;
  postalCode: number;
  city: string;
  phoneNo: string;
  email: string;
  website: string;
}
