import {EmitterSubscription, NativeEventEmitter} from 'react-native';
import {IBLECentralState, IBLEDevice} from '../types/ble';
import BLEModule from '../modules/bleModule';

const useBLEModule = () => {
  const eventEmitter = new NativeEventEmitter(BLEModule);

  const startScanBLEDevices = (
    callback: (device: IBLEDevice) => void,
  ): EmitterSubscription | undefined => {
    const eventListener = (event: IBLEDevice) => {
      callback(event);
    };

    BLEModule.startScan();

    const result = eventEmitter!.addListener('SCAN_BLE', eventListener);
    return result;
  };

  const stopScanBLEDevices = (emitterSubscription?: EmitterSubscription) => {
    BLEModule.stopScan();

    if (emitterSubscription != null) {
      emitterSubscription.remove();
    }
  };

  const listenBLECentralState = (
    callback: (device: IBLECentralState) => void,
  ): EmitterSubscription | undefined => {
    const eventListener = (event: IBLECentralState) => {
      callback(event);
    };

    const result = eventEmitter!.addListener(
      'LISTEN_BLE_CENTRAL_STATE',
      eventListener,
    );
    return result;
  };

  return {startScanBLEDevices, stopScanBLEDevices, listenBLECentralState};
};

export default useBLEModule;
