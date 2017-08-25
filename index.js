var { NativeModules, NativeEventEmitter } = require("react-native");
var { DeviceBattery } = NativeModules;

var deviceBatteryEmitter = new NativeEventEmitter(DeviceBattery);

export default {
  isCharging: DeviceBattery.isCharging,
  getBatteryLevel: DeviceBattery.getBatteryLevel,

  addListener: callback => {
    return deviceBatteryEmitter.addListener("batteryChange", callback);
  },
  removeListener: listener => {
    return deviceBatteryEmitter.removeListener("batteryChange", callback);
  }
};
