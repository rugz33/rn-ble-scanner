//
//  BLEModule.swift
//  RNBLEScanner
//
//  Created by Rully Winata on 19/05/24.
//

import Foundation
import React
import CoreBluetooth

@objc(BLEModule)
class BLEModule:  RCTEventEmitter, CBCentralManagerDelegate, CBPeripheralDelegate {
  var centralManager: CBCentralManager? = nil
  
  // RCTEventEmitter
  override func supportedEvents() -> [String]! {
    return ["SCAN_BLE", "LISTEN_BLE_CENTRAL_STATE"]
  }
  
  // CBCentralManagerDelegate
  func centralManager(_ central: CBCentralManager, didDiscover peripheral: CBPeripheral, advertisementData: [String : Any], rssi RSSI: NSNumber) {
    self.sendDevice(peripheral: peripheral, rssi: RSSI, advertisementData: advertisementData)
  }
  
  func centralManagerDidUpdateState(_ central: CBCentralManager) {
    switch (central.state) {
    case .poweredOn:
      let options: [String: Any] = [CBCentralManagerScanOptionAllowDuplicatesKey: false]
      centralManager?.scanForPeripherals(withServices: nil, options: options)
      break
    case .unknown:
      break
    case .resetting:
      break
    case .unsupported:
      break
    case .unauthorized:
      break
    case .poweredOff:
      break
    @unknown default:
      break
    }
    
    self.sendEvent(withName: "LISTEN_BLE_CENTRAL_STATE", body: ["state":central.state.rawValue])
  }
  
  // Native Method
  @objc func startScan() {
    if(centralManager != nil) {
      centralManager?.stopScan()
    }
    centralManager =  CBCentralManager(delegate: self, queue: nil)
  }
  
  @objc func stopScan() {
    centralManager?.stopScan()
    centralManager = nil
  }
  
  @objc func sendDevice(peripheral: CBPeripheral, rssi: NSNumber, advertisementData: [String : Any]) {
    self.sendEvent(withName: "SCAN_BLE", body: ["name":peripheral.name ?? "-",
                                                "state":peripheral.state.rawValue,
                                                "address":peripheral.identifier.uuidString,
                                                "rssi": rssi,
                                                "advertisementData": advertisementData])
  }
  
  @objc override static func requiresMainQueueSetup() -> Bool {
    return false
  }
}
