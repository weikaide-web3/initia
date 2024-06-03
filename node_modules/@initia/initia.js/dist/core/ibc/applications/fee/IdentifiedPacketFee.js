"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IdentifiedPacketFees = void 0;
const json_1 = require("../../../../util/json");
const PacketFee_1 = require("./PacketFee");
const PacketId_1 = require("../../core/channel/PacketId");
/**
 *  IdentifiedPacketFees contains a list of type PacketFee and associated PacketId
 */
class IdentifiedPacketFees extends json_1.JSONSerializable {
    /**
     * @param packet_id unique packet identifier comprised of the channel ID, port ID and sequence
     * @param packet_fees list of packet fees
     */
    constructor(packet_id, packet_fees = []) {
        super();
        this.packet_id = packet_id;
        this.packet_fees = packet_fees;
    }
    static fromAmino(data) {
        const { packet_id, packet_fees } = data;
        return new IdentifiedPacketFees(packet_id ? PacketId_1.PacketId.fromAmino(packet_id) : undefined, packet_fees.map(fee => PacketFee_1.PacketFee.fromAmino(fee)));
    }
    toAmino() {
        const { packet_id, packet_fees } = this;
        const res = {
            packet_id: packet_id === null || packet_id === void 0 ? void 0 : packet_id.toAmino(),
            packet_fees: packet_fees.map(fee => fee.toAmino()),
        };
        return res;
    }
    static fromData(data) {
        const { packet_id, packet_fees } = data;
        return new IdentifiedPacketFees(packet_id ? PacketId_1.PacketId.fromData(packet_id) : undefined, packet_fees.map(fee => PacketFee_1.PacketFee.fromData(fee)));
    }
    toData() {
        const { packet_id, packet_fees } = this;
        const res = {
            packet_id: packet_id === null || packet_id === void 0 ? void 0 : packet_id.toData(),
            packet_fees: packet_fees.map(fee => fee.toData()),
        };
        return res;
    }
    static fromProto(proto) {
        return new IdentifiedPacketFees(proto.packetId ? PacketId_1.PacketId.fromProto(proto.packetId) : undefined, proto.packetFees.map(fee => PacketFee_1.PacketFee.fromProto(fee)));
    }
    toProto() {
        const { packet_id, packet_fees } = this;
        const res = {
            packetId: packet_id === null || packet_id === void 0 ? void 0 : packet_id.toProto(),
            packetFees: packet_fees.map(fee => fee.toProto()),
        };
        return res;
    }
}
exports.IdentifiedPacketFees = IdentifiedPacketFees;
//# sourceMappingURL=IdentifiedPacketFee.js.map