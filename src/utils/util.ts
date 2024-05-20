import {
  BLECentralState,
  BLEPeripheralAdvertisementDataKey,
  BLEPeripheralState,
} from './constants';

export const parseBLECentralState = (state: number) => {
  let result = '-';
  switch (state) {
    case BLECentralState.UNKNOWN:
      result = 'Unknown';
      break;
    case BLECentralState.RESETTING:
      result = 'Resetting';
      break;
    case BLECentralState.UNSUPPORTED:
      result = 'Unsupported';
      break;
    case BLECentralState.UNAUTHORIZED:
      result = 'Unauthorized';
      break;
    case BLECentralState.POWERED_OFF:
      result = 'Powered Off';
      break;
    case BLECentralState.POWERED_ON:
      result = 'Powered On';
      break;
    default:
      break;
  }

  return result;
};

export const parseBLEPeripherallState = (state: number) => {
  let result = '-';
  switch (state) {
    case BLEPeripheralState.DISCONNECTED:
      result = 'Disconnected';
      break;
    case BLEPeripheralState.CONNECTING:
      result = 'Connecting';
      break;
    case BLEPeripheralState.CONNECTED:
      result = 'Connected';
      break;
    case BLEPeripheralState.DISCONNECTING:
      result = 'Disconnecting';
      break;
    default:
      break;
  }

  return result;
};

export const parseBLEPeripherallAdvertisementDataKey = (key: string) => {
  let result = '-';
  switch (key) {
    case BLEPeripheralAdvertisementDataKey.CONNECTABLE:
      result = 'Connectable';
      break;
    case BLEPeripheralAdvertisementDataKey.RX_PRIMARY_PHY:
      result = 'RX Primary PHY';
      break;
    case BLEPeripheralAdvertisementDataKey.RX_SECONDARY_PHY:
      result = 'RX Secondary PHY';
      break;
    case BLEPeripheralAdvertisementDataKey.TIMESTAMP:
      result = 'Timestamp';
      break;
    case BLEPeripheralAdvertisementDataKey.TX_POWER_LEVEL:
      result = 'TX Power Level';
      break;
    case BLEPeripheralAdvertisementDataKey.MANUFACTURER_DATA:
      result = 'Manufacturer Data';
      break;
    default:
      result = key;
      break;
  }

  return result;
};
