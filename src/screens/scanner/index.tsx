import React, {useCallback} from 'react';
import {
  FlatList,
  ListRenderItem,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Switch,
  Text,
  View,
} from 'react-native';
import {IBLEDevice} from '../../types/ble';
import {useScanner} from './logic/useScanner';
import {
  parseBLECentralState,
  parseBLEPeripherallAdvertisementDataKey,
  parseBLEPeripherallState,
} from '../../utils/util';

const App = () => {
  // hooks
  const {bleCentralState, devices, isActiveScan, toggleSwitch} = useScanner();

  //functions
  const renderSeparator = () => {
    return <View style={styles.listSeparator} />;
  };

  const renderItem: ListRenderItem<IBLEDevice> = useCallback(
    ({item}: {item: IBLEDevice}) => (
      <View style={styles.listItem}>
        <View style={styles.viewItem}>
          <Text style={styles.txtTitle}>Address: </Text>
          <Text>{item.address}</Text>
        </View>
        <View style={styles.viewItem}>
          <Text style={styles.txtTitle}>Name: </Text>
          <Text>{item.name}</Text>
        </View>
        <View style={styles.viewItem}>
          <Text style={styles.txtTitle}>State: </Text>
          <Text>{parseBLEPeripherallState(item.state)}</Text>
        </View>
        <View style={styles.viewItem}>
          <Text style={styles.txtTitle}>RSSI: </Text>
          <Text>{item.rssi}</Text>
        </View>
        <View style={styles.viewAdvertisementData}>
          <Text style={styles.txtTitle}>Advertisement Data: </Text>
          {Object.entries(item.advertisementData).map(([key, value]) => {
            return (
              <View key={key} style={styles.viewItem}>
                <Text style={styles.txtTitle}>
                  {parseBLEPeripherallAdvertisementDataKey(key)}:{' '}
                </Text>
                <Text>{value}</Text>
              </View>
            );
          })}
        </View>
      </View>
    ),
    [],
  );

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.viewSwitch}>
          <Switch
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isActiveScan}
          />
          <Text style={styles.textSwitch}>
            {isActiveScan ? 'Scan BLE Devices On' : 'Scan BLE Devices Off'}
          </Text>
        </View>
        <View style={styles.viewItem}>
          <Text>BLE State:</Text>
          <Text style={styles.txtTitle}>
            {parseBLECentralState(bleCentralState)}
          </Text>
        </View>
        <View style={styles.list}>
          <FlatList
            style={styles.list}
            data={devices}
            renderItem={renderItem}
            keyExtractor={(_, index) => index.toString()}
            ItemSeparatorComponent={renderSeparator}
          />
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
    backgroundColor: 'white',
  },
  safeArea: {
    flex: 1,
    rowGap: 8,
  },
  viewSwitch: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 8,
  },
  textSwitch: {
    color: '#000000',
    fontSize: 14,
  },
  statusPanel: {
    flex: 0,
    marginBottom: 15,
  },
  list: {
    flex: 1,
  },
  listItem: {
    padding: 16,
  },
  listSeparator: {
    height: 1,
    backgroundColor: 'gray',
  },
  viewItem: {
    flexDirection: 'row',
  },
  txtTitle: {
    fontWeight: 'bold',
  },
  viewAdvertisementData: {
    marginTop: 16,
  },
});

export default App;
