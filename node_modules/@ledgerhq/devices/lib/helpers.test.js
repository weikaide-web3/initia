"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require(".");
const helpers_1 = require("./helpers");
describe("stringToDeviceModelId", () => {
    const tests = [
        {
            input: ["stax", _1.DeviceModelId.nanoSP],
            expectedOutput: _1.DeviceModelId.stax,
        },
        {
            input: ["does-not-exist", _1.DeviceModelId.nanoSP],
            expectedOutput: _1.DeviceModelId.nanoSP,
        },
    ];
    tests.forEach(({ input, expectedOutput }) => {
        test(`Input: ${JSON.stringify(input)} -> Expected output: ${expectedOutput}`, () => {
            const result = (0, helpers_1.stringToDeviceModelId)(...input);
            expect(result).toEqual(expectedOutput);
        });
    });
});
//# sourceMappingURL=helpers.test.js.map