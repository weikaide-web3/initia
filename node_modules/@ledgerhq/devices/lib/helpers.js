"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stringToDeviceModelId = void 0;
const _1 = require(".");
const stringToDeviceModelId = (strDeviceModelId, defaultDeviceModelId) => {
    var _a;
    if ((_a = Object.values(_1.DeviceModelId)) === null || _a === void 0 ? void 0 : _a.includes(strDeviceModelId)) {
        return _1.DeviceModelId[strDeviceModelId];
    }
    return defaultDeviceModelId;
};
exports.stringToDeviceModelId = stringToDeviceModelId;
//# sourceMappingURL=helpers.js.map