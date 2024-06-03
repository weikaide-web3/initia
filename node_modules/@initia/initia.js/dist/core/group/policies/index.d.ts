import { ThresholdDecisionPolicy } from './ThresholdDecisionPolicy';
import { PercentageDecisionPolicy } from './PercentageDecisionPolicy';
import { Any } from '@initia/initia.proto/google/protobuf/any';
export * from './ThresholdDecisionPolicy';
export * from './PercentageDecisionPolicy';
export * from './DecisionPolicyWindows';
export type DecisionPolicy = ThresholdDecisionPolicy | PercentageDecisionPolicy;
export declare namespace DecisionPolicy {
    type Amino = ThresholdDecisionPolicy.Amino | PercentageDecisionPolicy.Amino;
    type Data = ThresholdDecisionPolicy.Data | PercentageDecisionPolicy.Data;
    type Proto = Any;
    function fromAmino(data: DecisionPolicy.Amino): DecisionPolicy;
    function fromData(data: DecisionPolicy.Data): DecisionPolicy;
    function fromProto(proto: DecisionPolicy.Proto): DecisionPolicy;
}
