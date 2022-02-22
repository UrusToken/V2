/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface IStakingMasterInterface extends ethers.utils.Interface {
  functions: {
    "addToStake(address,uint256)": FunctionFragment;
    "batchRecreateStake((uint256,address,uint256,uint256,uint256,uint256,bool,uint256,uint256,bool)[])": FunctionFragment;
    "claimRewards(address)": FunctionFragment;
    "closeStake(address)": FunctionFragment;
    "createStaking(uint256,uint256,address)": FunctionFragment;
    "recreateStake((uint256,address,uint256,uint256,uint256,uint256,bool,uint256,uint256,bool))": FunctionFragment;
    "returnCurrentStakeValue(address)": FunctionFragment;
    "returnStakeState(address)": FunctionFragment;
    "returnStakesClaimablePoolRewards(address)": FunctionFragment;
    "returnStakesClaimableRewards(address)": FunctionFragment;
    "returnUsersStakes(address)": FunctionFragment;
    "returnUsersTotalStakeValue(address)": FunctionFragment;
    "returnValidUsersProviderStake(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "addToStake",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "batchRecreateStake",
    values: [
      {
        _balance: BigNumberish;
        _recipient: string;
        _investedAmount: BigNumberish;
        _stakeEndTime: BigNumberish;
        _interestRate: BigNumberish;
        _lastUpdate: BigNumberish;
        _compounded: boolean;
        _rawInvestedAmount: BigNumberish;
        _stakeStartTime: BigNumberish;
        _providerStake: boolean;
      }[]
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "claimRewards",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "closeStake", values: [string]): string;
  encodeFunctionData(
    functionFragment: "createStaking",
    values: [BigNumberish, BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "recreateStake",
    values: [
      {
        _balance: BigNumberish;
        _recipient: string;
        _investedAmount: BigNumberish;
        _stakeEndTime: BigNumberish;
        _interestRate: BigNumberish;
        _lastUpdate: BigNumberish;
        _compounded: boolean;
        _rawInvestedAmount: BigNumberish;
        _stakeStartTime: BigNumberish;
        _providerStake: boolean;
      }
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "returnCurrentStakeValue",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "returnStakeState",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "returnStakesClaimablePoolRewards",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "returnStakesClaimableRewards",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "returnUsersStakes",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "returnUsersTotalStakeValue",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "returnValidUsersProviderStake",
    values: [string]
  ): string;

  decodeFunctionResult(functionFragment: "addToStake", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "batchRecreateStake",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "claimRewards",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "closeStake", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "createStaking",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "recreateStake",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "returnCurrentStakeValue",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "returnStakeState",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "returnStakesClaimablePoolRewards",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "returnStakesClaimableRewards",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "returnUsersStakes",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "returnUsersTotalStakeValue",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "returnValidUsersProviderStake",
    data: BytesLike
  ): Result;

  events: {};
}

export class IStakingMaster extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: IStakingMasterInterface;

  functions: {
    addToStake(
      _stakingAddress: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    batchRecreateStake(
      recreateStakeArgs: {
        _balance: BigNumberish;
        _recipient: string;
        _investedAmount: BigNumberish;
        _stakeEndTime: BigNumberish;
        _interestRate: BigNumberish;
        _lastUpdate: BigNumberish;
        _compounded: boolean;
        _rawInvestedAmount: BigNumberish;
        _stakeStartTime: BigNumberish;
        _providerStake: boolean;
      }[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    claimRewards(
      _stakingAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    closeStake(
      _stakingAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    createStaking(
      _amount: BigNumberish,
      _duration: BigNumberish,
      _recipient: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    recreateStake(
      recreateStakeArgs: {
        _balance: BigNumberish;
        _recipient: string;
        _investedAmount: BigNumberish;
        _stakeEndTime: BigNumberish;
        _interestRate: BigNumberish;
        _lastUpdate: BigNumberish;
        _compounded: boolean;
        _rawInvestedAmount: BigNumberish;
        _stakeStartTime: BigNumberish;
        _providerStake: boolean;
      },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    returnCurrentStakeValue(
      _stakingAddress: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    returnStakeState(
      _stakingAddress: string,
      overrides?: CallOverrides
    ): Promise<
      [
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        boolean,
        BigNumber,
        BigNumber
      ] & {
        currentStakeValue: BigNumber;
        stakeEndTime: BigNumber;
        interestRate: BigNumber;
        lastUpdate: BigNumber;
        compounding: boolean;
        rawInvestedAmount: BigNumber;
        stakeStartTime: BigNumber;
      }
    >;

    returnStakesClaimablePoolRewards(
      _stakingAddress: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    returnStakesClaimableRewards(
      _stakingAddress: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    returnUsersStakes(
      _user: string,
      overrides?: CallOverrides
    ): Promise<[string[]] & { usersStakes: string[] }>;

    returnUsersTotalStakeValue(
      _user: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    returnValidUsersProviderStake(
      _user: string,
      overrides?: CallOverrides
    ): Promise<[string]>;
  };

  addToStake(
    _stakingAddress: string,
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  batchRecreateStake(
    recreateStakeArgs: {
      _balance: BigNumberish;
      _recipient: string;
      _investedAmount: BigNumberish;
      _stakeEndTime: BigNumberish;
      _interestRate: BigNumberish;
      _lastUpdate: BigNumberish;
      _compounded: boolean;
      _rawInvestedAmount: BigNumberish;
      _stakeStartTime: BigNumberish;
      _providerStake: boolean;
    }[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  claimRewards(
    _stakingAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  closeStake(
    _stakingAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  createStaking(
    _amount: BigNumberish,
    _duration: BigNumberish,
    _recipient: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  recreateStake(
    recreateStakeArgs: {
      _balance: BigNumberish;
      _recipient: string;
      _investedAmount: BigNumberish;
      _stakeEndTime: BigNumberish;
      _interestRate: BigNumberish;
      _lastUpdate: BigNumberish;
      _compounded: boolean;
      _rawInvestedAmount: BigNumberish;
      _stakeStartTime: BigNumberish;
      _providerStake: boolean;
    },
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  returnCurrentStakeValue(
    _stakingAddress: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  returnStakeState(
    _stakingAddress: string,
    overrides?: CallOverrides
  ): Promise<
    [
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      boolean,
      BigNumber,
      BigNumber
    ] & {
      currentStakeValue: BigNumber;
      stakeEndTime: BigNumber;
      interestRate: BigNumber;
      lastUpdate: BigNumber;
      compounding: boolean;
      rawInvestedAmount: BigNumber;
      stakeStartTime: BigNumber;
    }
  >;

  returnStakesClaimablePoolRewards(
    _stakingAddress: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  returnStakesClaimableRewards(
    _stakingAddress: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  returnUsersStakes(
    _user: string,
    overrides?: CallOverrides
  ): Promise<string[]>;

  returnUsersTotalStakeValue(
    _user: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  returnValidUsersProviderStake(
    _user: string,
    overrides?: CallOverrides
  ): Promise<string>;

  callStatic: {
    addToStake(
      _stakingAddress: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    batchRecreateStake(
      recreateStakeArgs: {
        _balance: BigNumberish;
        _recipient: string;
        _investedAmount: BigNumberish;
        _stakeEndTime: BigNumberish;
        _interestRate: BigNumberish;
        _lastUpdate: BigNumberish;
        _compounded: boolean;
        _rawInvestedAmount: BigNumberish;
        _stakeStartTime: BigNumberish;
        _providerStake: boolean;
      }[],
      overrides?: CallOverrides
    ): Promise<void>;

    claimRewards(
      _stakingAddress: string,
      overrides?: CallOverrides
    ): Promise<void>;

    closeStake(
      _stakingAddress: string,
      overrides?: CallOverrides
    ): Promise<void>;

    createStaking(
      _amount: BigNumberish,
      _duration: BigNumberish,
      _recipient: string,
      overrides?: CallOverrides
    ): Promise<void>;

    recreateStake(
      recreateStakeArgs: {
        _balance: BigNumberish;
        _recipient: string;
        _investedAmount: BigNumberish;
        _stakeEndTime: BigNumberish;
        _interestRate: BigNumberish;
        _lastUpdate: BigNumberish;
        _compounded: boolean;
        _rawInvestedAmount: BigNumberish;
        _stakeStartTime: BigNumberish;
        _providerStake: boolean;
      },
      overrides?: CallOverrides
    ): Promise<void>;

    returnCurrentStakeValue(
      _stakingAddress: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    returnStakeState(
      _stakingAddress: string,
      overrides?: CallOverrides
    ): Promise<
      [
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        boolean,
        BigNumber,
        BigNumber
      ] & {
        currentStakeValue: BigNumber;
        stakeEndTime: BigNumber;
        interestRate: BigNumber;
        lastUpdate: BigNumber;
        compounding: boolean;
        rawInvestedAmount: BigNumber;
        stakeStartTime: BigNumber;
      }
    >;

    returnStakesClaimablePoolRewards(
      _stakingAddress: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    returnStakesClaimableRewards(
      _stakingAddress: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    returnUsersStakes(
      _user: string,
      overrides?: CallOverrides
    ): Promise<string[]>;

    returnUsersTotalStakeValue(
      _user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    returnValidUsersProviderStake(
      _user: string,
      overrides?: CallOverrides
    ): Promise<string>;
  };

  filters: {};

  estimateGas: {
    addToStake(
      _stakingAddress: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    batchRecreateStake(
      recreateStakeArgs: {
        _balance: BigNumberish;
        _recipient: string;
        _investedAmount: BigNumberish;
        _stakeEndTime: BigNumberish;
        _interestRate: BigNumberish;
        _lastUpdate: BigNumberish;
        _compounded: boolean;
        _rawInvestedAmount: BigNumberish;
        _stakeStartTime: BigNumberish;
        _providerStake: boolean;
      }[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    claimRewards(
      _stakingAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    closeStake(
      _stakingAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    createStaking(
      _amount: BigNumberish,
      _duration: BigNumberish,
      _recipient: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    recreateStake(
      recreateStakeArgs: {
        _balance: BigNumberish;
        _recipient: string;
        _investedAmount: BigNumberish;
        _stakeEndTime: BigNumberish;
        _interestRate: BigNumberish;
        _lastUpdate: BigNumberish;
        _compounded: boolean;
        _rawInvestedAmount: BigNumberish;
        _stakeStartTime: BigNumberish;
        _providerStake: boolean;
      },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    returnCurrentStakeValue(
      _stakingAddress: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    returnStakeState(
      _stakingAddress: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    returnStakesClaimablePoolRewards(
      _stakingAddress: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    returnStakesClaimableRewards(
      _stakingAddress: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    returnUsersStakes(
      _user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    returnUsersTotalStakeValue(
      _user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    returnValidUsersProviderStake(
      _user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addToStake(
      _stakingAddress: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    batchRecreateStake(
      recreateStakeArgs: {
        _balance: BigNumberish;
        _recipient: string;
        _investedAmount: BigNumberish;
        _stakeEndTime: BigNumberish;
        _interestRate: BigNumberish;
        _lastUpdate: BigNumberish;
        _compounded: boolean;
        _rawInvestedAmount: BigNumberish;
        _stakeStartTime: BigNumberish;
        _providerStake: boolean;
      }[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    claimRewards(
      _stakingAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    closeStake(
      _stakingAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    createStaking(
      _amount: BigNumberish,
      _duration: BigNumberish,
      _recipient: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    recreateStake(
      recreateStakeArgs: {
        _balance: BigNumberish;
        _recipient: string;
        _investedAmount: BigNumberish;
        _stakeEndTime: BigNumberish;
        _interestRate: BigNumberish;
        _lastUpdate: BigNumberish;
        _compounded: boolean;
        _rawInvestedAmount: BigNumberish;
        _stakeStartTime: BigNumberish;
        _providerStake: boolean;
      },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    returnCurrentStakeValue(
      _stakingAddress: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    returnStakeState(
      _stakingAddress: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    returnStakesClaimablePoolRewards(
      _stakingAddress: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    returnStakesClaimableRewards(
      _stakingAddress: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    returnUsersStakes(
      _user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    returnUsersTotalStakeValue(
      _user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    returnValidUsersProviderStake(
      _user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
