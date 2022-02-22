/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Signer,
  utils,
  BigNumberish,
  Contract,
  ContractFactory,
  Overrides,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Provider, ProviderInterface } from "../Provider";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_uniSwapTokenAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "_auroxTokenAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "_stakingMaster",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_epochStart",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_migrationContractAddress",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_from",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "AddLiquidity",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_from",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "bool",
        name: "_sendRewardsToStaking",
        type: "bool",
      },
    ],
    name: "ClaimRewards",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_from",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "RemoveLiquidity",
    type: "event",
  },
  {
    stateMutability: "payable",
    type: "fallback",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "currentEpoch",
        type: "uint256",
      },
    ],
    name: "_getSecondsToEpochEnd",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "lastClaimedTimestamp",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "currentEpoch",
        type: "uint256",
      },
    ],
    name: "_returnClaimSecondsForPulledLiquidity",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "epoch",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "currentEpoch",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "lastEpochClaimed",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "lastClaimedTimestamp",
        type: "uint256",
      },
    ],
    name: "_returnEpochClaimSeconds",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    name: "_returnEpochToTimestamp",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "usersInvestmentTotal",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "overallInvestmentTotal",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "secondsToClaim",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "totalReward",
        type: "uint256",
      },
    ],
    name: "_returnRewardAmount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "addLiquidity",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "_sendRewardsToStaking",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "stakeDuration",
        type: "uint256",
      },
    ],
    name: "claimRewards",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "epochAmounts",
    outputs: [
      {
        internalType: "uint256",
        name: "shareTotal",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "allPrevInvestmentTotals",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "currentInvestmentTotal",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "withdrewLiquidity",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "lastEpochUpdate",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "_user",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "_amount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "_bonusRewardMultiplier",
            type: "uint256",
          },
        ],
        internalType: "struct IProvider.MigrateArgs[]",
        name: "allMigrateArgs",
        type: "tuple[]",
      },
    ],
    name: "migrateUsersLPPositions",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "migrationContractAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "removeLiquidity",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
    ],
    name: "returnAllClaimableRewardAmounts",
    outputs: [
      {
        internalType: "uint256",
        name: "rewardTotal",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "lastLiquidityAddedEpochReference",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "lastEpochLiquidityWithdrawn",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "returnCurrentAPY",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "returnCurrentEpoch",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "currentEpoch",
        type: "uint256",
      },
    ],
    name: "returnEpochShare",
    outputs: [
      {
        internalType: "uint256",
        name: "share",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "epoch",
        type: "uint256",
      },
    ],
    name: "returnGivenEpochEndTime",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "epoch",
        type: "uint256",
      },
    ],
    name: "returnGivenEpochStartTime",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "currentEpoch",
        type: "uint256",
      },
    ],
    name: "returnIfInFirstDayOfEpoch",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "epoch",
        type: "uint256",
      },
    ],
    name: "returnTotalRewardForEpoch",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "epoch",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
    ],
    name: "returnUsersEpochTotals",
    outputs: [
      {
        internalType: "uint256",
        name: "shareTotal",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "currentInvestmentTotal",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "allPrevInvestmentTotals",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
    ],
    name: "returnUsersInvestmentTotal",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "userInvestments",
    outputs: [
      {
        internalType: "uint256",
        name: "lastLiquidityAddedEpochReference",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "lastEpochUpdate",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "lastClaimedTimestamp",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "lastEpochLiquidityWithdrawn",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "bonusRewardMultiplier",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60806040526212750060025560016004553480156200001d57600080fd5b50604051620023e8380380620023e88339810160408190526200004091620000bc565b6001600081905591909155600580546001600160a01b039586166001600160a01b031991821617909155600680549486169482169490941790935560078054928516928416929092179091556008805491909316911617905562000123565b80516001600160a01b0381168114620000b757600080fd5b919050565b600080600080600060a08688031215620000d557600080fd5b620000e0866200009f565b9450620000f0602087016200009f565b935062000100604087016200009f565b92506060860151915062000117608087016200009f565b90509295509295909350565b6122b580620001336000396000f3fe6080604052600436106101405760003560e01c80639c8f9f23116100b6578063c1e472601161006f578063c1e47260146104e5578063c4a274eb14610505578063cb85049014610525578063d0ebb19f14610545578063e215718914610565578063e3a7d1581461058557610140565b80639c8f9f23146103695780639d847eda14610389578063a5a87503146103b9578063adfe6754146103d9578063b023eba5146103f9578063b34d72f81461046b57610140565b806351c6590a1161010857806351c6590a146102a457806358e3d223146102c65780635ceb78ad146102db578063646d7a98146102fb5780637fd89194146103335780638676950f1461035357610140565b80631feb0e3c146101985780632cc70f22146102065780632d1f91c5146102415780633e4dbc37146102645780634f324f6614610284575b60405162461bcd60e51b815260206004820152602260248201527f43616e6e6f742073656e6420657468657220746f207468697320636f6e74726160448201526118dd60f21b60648201526084015b60405180910390fd5b3480156101a457600080fd5b506101df6101b3366004611f22565b600360208190526000918252604090912080546001820154600283015492909301549092919060ff1684565b60408051948552602085019390935291830152151560608201526080015b60405180910390f35b34801561021257600080fd5b50610226610221366004611f53565b6105a5565b604080519384526020840192909252908201526060016101fd565b34801561024d57600080fd5b5061025661088d565b6040519081526020016101fd565b34801561027057600080fd5b5061025661027f366004611f22565b6109c4565b34801561029057600080fd5b5061025661029f366004611f22565b610a0c565b3480156102b057600080fd5b506102c46102bf366004611f22565b610a2c565b005b3480156102d257600080fd5b50610256610d2f565b3480156102e757600080fd5b506102c46102f6366004611f7e565b610d5c565b34801561030757600080fd5b5060085461031b906001600160a01b031681565b6040516001600160a01b0390911681526020016101fd565b34801561033f57600080fd5b5061025661034e366004611f22565b6110b7565b34801561035f57600080fd5b5061025660045481565b34801561037557600080fd5b506102c4610384366004611f22565b6110d9565b34801561039557600080fd5b506103a96103a4366004611f22565b6114f6565b60405190151581526020016101fd565b3480156103c557600080fd5b506102566103d4366004611f22565b61153b565b3480156103e557600080fd5b506102566103f4366004611faa565b611588565b34801561040557600080fd5b50610443610414366004611f53565b600960205260009081526040902080546001820154600283015460038401546004909401549293919290919085565b604080519586526020860194909452928401919091526060830152608082015260a0016101fd565b34801561047757600080fd5b50610226610486366004611fdc565b6001600160a01b031660009081526009602090815260408083209383526005909301815290829020825160808101845281548082526001830154938201849052600283015494820185905260039092015460ff16151560609091015292565b3480156104f157600080fd5b5061025661050036600461200c565b6115c3565b34801561051157600080fd5b506102c461052036600461202e565b6115e3565b34801561053157600080fd5b50610256610540366004611f22565b6117c8565b34801561055157600080fd5b50610256610560366004611f53565b6117e4565b34801561057157600080fd5b50610256610580366004611faa565b61184e565b34801561059157600080fd5b506102566105a036600461200c565b6118bb565b6001600160a01b03811660009081526009602052604081206001810154829182916105db57600080600093509350935050610886565b60006105e6426110b7565b905060006105f783600201546110b7565b835460038501549192506000918291908190855b87811161087857600081815260058a01602052604090206003015460ff1615610632578091505b600081815260058a016020526040902054156106ab57808414610653578093505b600081815260058a01602090815260409182902082516080810184528154815260018201549281019290925260028101549282019290925260039091015460ff16151560608201526106a49061190c565b955061071a565b8515806106c157506106be84600161191c565b81145b1561071a57600084815260058a01602090815260409182902082516080810184528154815260018201549281019290925260028101549282019290925260039091015460ff161515606082015261071790611928565b95505b8561072457610866565b6000818152600360205260409020541561079657808314610743578092505b60008181526003602081815260409283902083516080810185528154815260018201549281019290925260028101549382019390935291015460ff161515606082015261078f9061190c565b9450610800565b8415806107ac57506107a983600161191c565b81145b156108005760008381526003602081815260409283902083516080810185528154815260018201549281019290925260028101549382019390935291015460ff16151560608201526107fd90611928565b94505b6000610814828a8a8d600201548b8b611945565b90508882146108585760008284101561083457610831838561197c565b90505b61085461084e8c600401548361191c90919063ffffffff16565b83611988565b9150505b6108628d8261191c565b9c50505b80610870816120b9565b91505061060b565b509198509096505050505050505b9193909250565b600080610898610d2f565b90506000600a8210156109255760006108b2600a8461197c565b9050825b6108c0828561191c565b8110156108f45760006108d28261153b565b90506108de848261191c565b93505080806108ec906120b9565b9150506108b6565b5061091d610916610906601a8461197c565b682086ac351052600000906119a6565b839061191c565b91505061093c565b610939682086ac351052600000601a6119a6565b90505b60045460009081526003602081815260408084208151608081018352815481526001820154938101939093526002810154918301919091529091015460ff161515606082015261098b90611928565b90508061099d5750670de0b6b3a76400005b60006109bb826109b585670de0b6b3a76400006119a6565b906119b2565b95945050505050565b6000806109e86109df600254856119a690919063ffffffff16565b6001549061191c565b9050428110156109fb5750600092915050565b610a05814261197c565b9392505050565b6000610a266109df836002546119a690919063ffffffff16565b92915050565b60026000541415610a4f5760405162461bcd60e51b815260040161018f906120d4565b60026000556001544211610aa55760405162461bcd60e51b815260206004820152601c60248201527f45706f6368206f6e65206861736e277420737461727465642079657400000000604482015260640161018f565b80610aea5760405162461bcd60e51b815260206004820152601560248201527410d85b9b9bdd081859190818480c08185b5bdd5b9d605a1b604482015260640161018f565b60055481906001600160a01b031663dd62ed3e336040516001600160e01b031960e084901b1681526001600160a01b039091166004820152306024820152604401602060405180830381865afa158015610b48573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b6c919061210b565b1015610be05760405162461bcd60e51b815260206004820152603e60248201527f416c6c6f77616e6365206f662050726f7669646572206e6f74206c617267652060448201527f656e6f75676820666f722074686520726571756972656420616d6f756e740000606482015260840161018f565b60055481906001600160a01b03166370a08231336040516001600160e01b031960e084901b1681526001600160a01b039091166004820152602401602060405180830381865afa158015610c38573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c5c919061210b565b1015610cd05760405162461bcd60e51b815260206004820152603e60248201527f42616c616e6365206f66207468652073656e646572206e6f74206c617267652060448201527f656e6f75676820666f722074686520726571756972656420616d6f756e740000606482015260840161018f565b610cda33826119be565b610cf2336005546001600160a01b0316903084611bd8565b60405181815233907fbb37879e252460856212dc4e8c6edf174e473df9423e3a7feccd21f8c28d587a9060200160405180910390a2506001600055565b6000610d576001610d516002546109b56001544261197c90919063ffffffff16565b9061191c565b905090565b60026000541415610d7f5760405162461bcd60e51b815260040161018f906120d4565b600260009081553381526009602052604090206001810154610e0b576040805162461bcd60e51b81526020600482015260248101919091527f5573657220686173206e6f207265776172647320746f20636c61696d2c20617360448201527f20746865792068617665206e65766572206164646564206c6971756964697479606482015260840161018f565b60008080610e18336105a5565b9250925092508160001415610e3057505050506110ae565b8184556003840181905542600285015582610e4e57505050506110ae565b8515611058576007546000906001600160a01b03166393a3d6de336040516001600160e01b031960e084901b1681526001600160a01b039091166004820152602401602060405180830381865afa158015610ead573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ed19190612124565b90506001600160a01b03811615610f4d5760075460405163a43b0c8d60e01b81526001600160a01b038381166004830152602482018790529091169063a43b0c8d90604401600060405180830381600087803b158015610f3057600080fd5b505af1158015610f44573d6000803e3d6000fd5b50505050611052565b60008611610fd65760405162461bcd60e51b815260206004820152604a60248201527f5374616b65206475726174696f6e206d7573742062652067726561746572207460448201527f68616e2030206966207265776172647320617265206265696e672073656e7420606482015269746f207374616b696e6760b01b608482015260a40161018f565b6007546001600160a01b031663e0c6920a8588336040516001600160e01b031960e086901b168152600481019390935260248301919091526001600160a01b03166044820152606401600060405180830381600087803b15801561103957600080fd5b505af115801561104d573d6000803e3d6000fd5b505050505b50611070565b600654611070906001600160a01b0316803386611bd8565b6040518381528615159033907fb48dd49bcea48f05137500e486585bd21d95c844e71a8a175d163ebc1f3811c29060200160405180910390a3505050505b50506001600055565b6000610a266001610d516002546109b56001548761197c90919063ffffffff16565b600260005414156110fc5760405162461bcd60e51b815260040161018f906120d4565b60026000818155338152600960209081526040808320600180820154855260058201845282852083516080810185528154815291810154948201949094529483015491850191909152600382015460ff16151560608501529290919061116190611928565b9050838110156111d95760405162461bcd60e51b815260206004820152603760248201527f5573657220646f65736e2774206861766520656e6f7567682062616c616e636560448201527f20746f2077697468647261772074686520616d6f756e74000000000000000000606482015260840161018f565b60006111e4426110b7565b6000818152600586016020526040812060028701549293509161120790846118bb565b905060006112246002546109b5848b6119a690919063ffffffff16565b90508061122f575060015b8254156112605782546000858152600360205260409020546112509161197c565b6000858152600360205260409020555b8083556001870154841461128b57611278858961197c565b60018085019190915587018490556112f3565b87866001015410156112d45760006112b087600101548a61197c90919063ffffffff16565b6000600186015560028801549091506112c9908261197c565b6002850155506112f3565b60018601546112e3908961197c565b6001840155600280870154908401555b6003808401805460ff191660011790556000858152602091909152604090205461131d908261191c565b60008581526003602052604090205560045484146113ad5760045460009081526003602081815260408084208151608081018352815481526001820154938101939093526002810154918301919091529091015460ff161515606082015261138490611928565b9050611390818a61197c565b600086815260036020526040902060010155506004849055611451565b600084815260036020526040902060010154881115611422576000848152600360205260408120600101546113e3908a9061197c565b600086815260036020526040812060018101919091556002015490915061140a908261197c565b60008681526003602052604090206002015550611451565b60008481526003602052604090206001015461143e908961197c565b6000858152600360205260409020600101555b61145a846114f6565b1561147b57611476336005546001600160a01b0316908a611c49565b6114b2565b6114a23361148f600a6109b58c60096119a6565b6005546001600160a01b03169190611c49565b6114b2600161148f8a600a6119b2565b60405188815233907fdfdd120ded9b7afc0c23dd5310e93aaa3e1c3b9f75af9b805fab3030842439f29060200160405180910390a250506001600055505050505050565b600080611502836109c4565b9050600061151b8260025461197c90919063ffffffff16565b9050620151808111611531575060019392505050565b5060009392505050565b6000600a82106115555750682086ac351052600000919050565b6000610a0561157861156885600161197c565b68056bc75e2d63100000906119a6565b685150ae84a8cdf000009061197c565b600080611599856109b585896119a6565b905060006115b66002546109b587856119a690919063ffffffff16565b925050505b949350505050565b6000806115cf836109c4565b6002549091506115bb906109b586846119a6565b60015442116116345760405162461bcd60e51b815260206004820152601c60248201527f45706f6368206f6e65206861736e277420737461727465642079657400000000604482015260640161018f565b6008546001600160a01b0316336001600160a01b0316146116bd5760405162461bcd60e51b815260206004820152603c60248201527f50726f76696465723a204f6e6c7920746865206d6967726174696f6e20636f6e60448201527f74726163742063616e2063616c6c20746869732066756e6374696f6e00000000606482015260840161018f565b60006116c8426110b7565b90506000805b60ff811684111561173b5784848260ff168181106116ee576116ee612141565b90506060020160200135826117039190612157565b915061172985858360ff1681811061171d5761171d612141565b90506060020184611c7e565b806117338161216f565b9150506116ce565b5060048281556005546008546040516323b872dd60e01b81526001600160a01b03918216938101939093523060248401526044830184905216906323b872dd906064016020604051808303816000875af115801561179d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117c1919061218f565b5050505050565b6000610a266109df6117db84600161197c565b600254906119a6565b6001600160a01b0381166000908152600960209081526040808320600180820154855260059091018352818420825160808101845281548152918101549382019390935260028301549181019190915260039091015460ff1615156060820152816115bb82611928565b60008385141561189057838314156118715761186a428361197c565b90506115bb565b600061187c866117c8565b9050611888428261197c565b9150506115bb565b848314156118af5760006118a386610a0c565b9050611888818461197c565b50600254949350505050565b6000806118c7846110b7565b90506000838214156118e7576118dd428661197c565b9250610a26915050565b60006118f2856109c4565b600254909150611902908261197c565b9350505050610a26565b80516020820151600091610a2691905b6000610a058284612157565b6000610a268260400151836020015161191c90919063ffffffff16565b6000806119548888888861184e565b905060006119618961153b565b905061196f85858484611588565b9998505050505050505050565b6000610a0582846121ac565b6000600a83111561199857600a92505b610a05610916600a6109b585875b6000610a0582846121c3565b6000610a0582846121e2565b60006119c9426110b7565b6001600160a01b03841660009081526009602052604090206001810154919250906119f8578181554260028201555b6001808201546000908152600583016020908152604080832081516080810183528154815294810154928501929092526002820154908401526003015460ff161515606083015290611a4990611928565b905080611a7f578282600301819055506000611a6883600201546110b7565b90508260010154811115611a7d574260028401555b505b6000611a8b85856115c3565b90508383600101541015611ae5576001808401546000908152600585016020526040812091820154600290920154611ac490839061191c565b60008781526005870160205260409020600190810191909155850186905550505b6000848152600584016020526040902054611b00908261191c565b6000858152600585016020526040902090815560020154611b21908661191c565b6000858152600585016020526040902060020155600454841115611b835760045460009081526003602052604081206001810154600290910154909190611b6990839061191c565b600087815260036020526040902060010155505060048490555b600084815260036020526040902054611b9c908261191c565b600085815260036020526040902090815560020154611bbb908661191c565b600094855260036020526040909420600201939093555050505050565b6040516001600160a01b0380851660248301528316604482015260648101829052611c439085906323b872dd60e01b906084015b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b031990931692909217909152611d55565b50505050565b6040516001600160a01b038316602482015260448101829052611c7990849063a9059cbb60e01b90606401611c0c565b505050565b6000600981611c906020860186611f53565b6001600160a01b0316815260208082019290925260409081016000908120600181018690554260028201556003810186905585815591860135600483015590925090611cdf90850135846115c3565b60008481526005840160209081526040808320848155888301356002909101556003909152902054909150611d14908261191c565b6000848152600360209081526040909120918255600290910154611d3a9186013561191c565b60009384526003602052604090932060020192909255505050565b6000611daa826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b0316611e279092919063ffffffff16565b805190915015611c795780806020019051810190611dc8919061218f565b611c795760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b606482015260840161018f565b60606115bb848460008585843b611e805760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015260640161018f565b600080866001600160a01b03168587604051611e9c9190612230565b60006040518083038185875af1925050503d8060008114611ed9576040519150601f19603f3d011682016040523d82523d6000602084013e611ede565b606091505b50915091506115b682828660608315611ef8575081610a05565b825115611f085782518084602001fd5b8160405162461bcd60e51b815260040161018f919061224c565b600060208284031215611f3457600080fd5b5035919050565b6001600160a01b0381168114611f5057600080fd5b50565b600060208284031215611f6557600080fd5b8135610a0581611f3b565b8015158114611f5057600080fd5b60008060408385031215611f9157600080fd5b8235611f9c81611f70565b946020939093013593505050565b60008060008060808587031215611fc057600080fd5b5050823594602084013594506040840135936060013592509050565b60008060408385031215611fef57600080fd5b82359150602083013561200181611f3b565b809150509250929050565b6000806040838503121561201f57600080fd5b50508035926020909101359150565b6000806020838503121561204157600080fd5b823567ffffffffffffffff8082111561205957600080fd5b818501915085601f83011261206d57600080fd5b81358181111561207c57600080fd5b86602060608302850101111561209157600080fd5b60209290920196919550909350505050565b634e487b7160e01b600052601160045260246000fd5b60006000198214156120cd576120cd6120a3565b5060010190565b6020808252601f908201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00604082015260600190565b60006020828403121561211d57600080fd5b5051919050565b60006020828403121561213657600080fd5b8151610a0581611f3b565b634e487b7160e01b600052603260045260246000fd5b6000821982111561216a5761216a6120a3565b500190565b600060ff821660ff811415612186576121866120a3565b60010192915050565b6000602082840312156121a157600080fd5b8151610a0581611f70565b6000828210156121be576121be6120a3565b500390565b60008160001904831182151516156121dd576121dd6120a3565b500290565b6000826121ff57634e487b7160e01b600052601260045260246000fd5b500490565b60005b8381101561221f578181015183820152602001612207565b83811115611c435750506000910152565b60008251612242818460208701612204565b9190910192915050565b602081526000825180602084015261226b816040850160208701612204565b601f01601f1916919091016040019291505056fea2646970667358221220cf413f0ba39806063d3eb4e57ea7b6d3c049efe7b943fc0919e840a35b351ea464736f6c634300080a0033";

export class Provider__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    _uniSwapTokenAddress: string,
    _auroxTokenAddress: string,
    _stakingMaster: string,
    _epochStart: BigNumberish,
    _migrationContractAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Provider> {
    return super.deploy(
      _uniSwapTokenAddress,
      _auroxTokenAddress,
      _stakingMaster,
      _epochStart,
      _migrationContractAddress,
      overrides || {}
    ) as Promise<Provider>;
  }
  getDeployTransaction(
    _uniSwapTokenAddress: string,
    _auroxTokenAddress: string,
    _stakingMaster: string,
    _epochStart: BigNumberish,
    _migrationContractAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _uniSwapTokenAddress,
      _auroxTokenAddress,
      _stakingMaster,
      _epochStart,
      _migrationContractAddress,
      overrides || {}
    );
  }
  attach(address: string): Provider {
    return super.attach(address) as Provider;
  }
  connect(signer: Signer): Provider__factory {
    return super.connect(signer) as Provider__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ProviderInterface {
    return new utils.Interface(_abi) as ProviderInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Provider {
    return new Contract(address, _abi, signerOrProvider) as Provider;
  }
}
