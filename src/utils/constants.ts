export const BLECentralState = {
  UNKNOWN: 0,
  RESETTING: 1,
  UNSUPPORTED: 2,
  UNAUTHORIZED: 3,
  POWERED_OFF: 4,
  POWERED_ON: 5,
};

export const BLEPeripheralState = {
  DISCONNECTED: 0,
  CONNECTING: 1,
  CONNECTED: 2,
  DISCONNECTING: 3,
};

export const BLEPeripheralAdvertisementDataKey = {
  CONNECTABLE: 'kCBAdvDataIsConnectable',
  RX_PRIMARY_PHY: 'kCBAdvDataRxPrimaryPHY',
  RX_SECONDARY_PHY: 'kCBAdvDataRxSecondaryPHY',
  TIMESTAMP: 'kCBAdvDataTimestamp',
  TX_POWER_LEVEL: 'kCBAdvDataTxPowerLevel',
  MANUFACTURER_DATA: 'kCBAdvDataManufacturerData',
};
