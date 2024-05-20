import {useCallback, useEffect, useState} from 'react';
import useBLEModule from '../../../hooks/useBleModule';
import {IBLEDevice, IBLECentralState} from '../../../types/ble';
import {BLECentralState} from '../../../utils/constants';

export const useScanner = () => {
  // hooks
  const {startScanBLEDevices, stopScanBLEDevices, listenBLECentralState} =
    useBLEModule();

  // states
  const [devices, setDevices] = useState<Array<IBLEDevice>>([]);
  const [isActiveScan, setActiveScan] = useState<boolean>(false);
  const [bleCentralState, setBleCentralState] = useState<number>(
    BLECentralState.UNKNOWN,
  );

  useEffect(() => {
    listenBLECentralState((bleState: IBLECentralState) => {
      setBleCentralState(bleState.state);
    });
  }, [listenBLECentralState]);

  useEffect(() => {
    if (isActiveScan) {
      startScanBLEDevices((device: IBLEDevice) => {
        setDevices([...devices, device]);
      });
    } else {
      stopScanBLEDevices();
    }
  }, [devices, isActiveScan, startScanBLEDevices, stopScanBLEDevices]);

  const toggleSwitch = useCallback(() => {
    setActiveScan(!isActiveScan);
  }, [isActiveScan]);

  return {
    bleCentralState,
    devices,
    isActiveScan,
    toggleSwitch,
  };
};
