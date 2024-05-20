export interface IBLEDevice {
  address: string;
  name: string;
  state: number;
  rssi: number;
  advertisementData: IBLEDeviceAdvertisementData;
}

export interface IBLEDeviceAdvertisementData {
  kCBAdvDataIsConnectable: number;
  kCBAdvDataRxPrimaryPHY: number;
  kCBAdvDataRxSecondaryPHY: number;
  kCBAdvDataTimestamp: number;
  kCBAdvDataTxPowerLevel: number;
  kCBAdvDataManufacturerData: string | null;
}

export interface IBLECentralState {
  state: number;
}
