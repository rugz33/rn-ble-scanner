//
//  BLEModuleBridge.m
//  RNBLEScanner
//
//  Created by Rully Winata on 19/05/24.
//

#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(BLEModule, NSObject)

RCT_EXTERN_METHOD(startScan)
RCT_EXTERN_METHOD(stopScan)

@end
