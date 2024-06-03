import { DeviceModelId } from ".";
export const stringToDeviceModelId = (strDeviceModelId, defaultDeviceModelId) => {
    var _a;
    if ((_a = Object.values(DeviceModelId)) === null || _a === void 0 ? void 0 : _a.includes(strDeviceModelId)) {
        return DeviceModelId[strDeviceModelId];
    }
    return defaultDeviceModelId;
};
//# sourceMappingURL=helpers.js.map