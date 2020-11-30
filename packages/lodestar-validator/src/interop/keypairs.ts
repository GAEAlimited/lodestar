import {hash} from "@chainsafe/ssz";
import {bytesToBigInt, intToBytes} from "@chainsafe/lodestar-utils";
import bls, {ISecretKey} from "@chainsafe/bls";
import {toBufferBE} from "bigint-buffer";

const CURVE_ORDER = BigInt("52435875175126190479447740508185965837690552500527637822603658699938581184513");

export function interopSecretKeys(validatorCount: number): ISecretKey[] {
  return Array.from({length: validatorCount}, (_, i) => {
    return interopSecretKey(i);
  });
}

export function interopSecretKey(index: number): ISecretKey {
  const secretKeyBytes = toBufferBE(bytesToBigInt(hash(intToBytes(index, 32))) % CURVE_ORDER, 32);
  return bls.SecretKey.fromBytes(secretKeyBytes);
}
