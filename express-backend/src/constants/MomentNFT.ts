const abi = [
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'maxSupply_',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: 'scoringAgent_',
        type: 'address',
      },
      {
        internalType: 'contract IERC20',
        name: 'rewardToken_',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'totalRewardedTokens_',
        type: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    inputs: [],
    name: 'AccessControlBadConfirmation',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
      {
        internalType: 'bytes32',
        name: 'neededRole',
        type: 'bytes32',
      },
    ],
    name: 'AccessControlUnauthorizedAccount',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'sender',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
    ],
    name: 'ERC721IncorrectOwner',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'operator',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256',
      },
    ],
    name: 'ERC721InsufficientApproval',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'approver',
        type: 'address',
      },
    ],
    name: 'ERC721InvalidApprover',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'operator',
        type: 'address',
      },
    ],
    name: 'ERC721InvalidOperator',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
    ],
    name: 'ERC721InvalidOwner',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'receiver',
        type: 'address',
      },
    ],
    name: 'ERC721InvalidReceiver',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'sender',
        type: 'address',
      },
    ],
    name: 'ERC721InvalidSender',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256',
      },
    ],
    name: 'ERC721NonexistentToken',
    type: 'error',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'approved',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256',
      },
    ],
    name: 'Approval',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'operator',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'bool',
        name: 'approved',
        type: 'bool',
      },
    ],
    name: 'ApprovalForAll',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: '_fromTokenId',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: '_toTokenId',
        type: 'uint256',
      },
    ],
    name: 'BatchMetadataUpdate',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: '_tokenId',
        type: 'uint256',
      },
    ],
    name: 'MetadataUpdate',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'addr',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint96',
        name: 'score',
        type: 'uint96',
      },
    ],
    name: 'ParticipantAdded',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'role',
        type: 'bytes32',
      },
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'previousAdminRole',
        type: 'bytes32',
      },
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'newAdminRole',
        type: 'bytes32',
      },
    ],
    name: 'RoleAdminChanged',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'role',
        type: 'bytes32',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'sender',
        type: 'address',
      },
    ],
    name: 'RoleGranted',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'role',
        type: 'bytes32',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'sender',
        type: 'address',
      },
    ],
    name: 'RoleRevoked',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'from',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256',
      },
    ],
    name: 'Transfer',
    type: 'event',
  },
  {
    inputs: [],
    name: 'AI_SCORING_AGENT',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'DEFAULT_ADMIN_ROLE',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'SCORE_DENOMINATOR',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256',
      },
    ],
    name: 'approve',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
    ],
    name: 'balanceOf',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'contestHasEnded',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'cumulativeScore',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'currentSupply',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'distributeRewards',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'endContest',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256',
      },
    ],
    name: 'getApproved',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 'role',
        type: 'bytes32',
      },
    ],
    name: 'getRoleAdmin',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 'role',
        type: 'bytes32',
      },
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
    ],
    name: 'grantRole',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 'role',
        type: 'bytes32',
      },
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
    ],
    name: 'hasRole',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'operator',
        type: 'address',
      },
    ],
    name: 'isApprovedForAll',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'maxSupply',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        internalType: 'string',
        name: 'imageURI',
        type: 'string',
      },
      {
        internalType: 'uint96',
        name: 'score',
        type: 'uint96',
      },
    ],
    name: 'mint',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'name',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256',
      },
    ],
    name: 'ownerOf',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    name: 'participants',
    outputs: [
      {
        internalType: 'address',
        name: 'addr',
        type: 'address',
      },
      {
        internalType: 'uint96',
        name: 'score',
        type: 'uint96',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'recoverTokens',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 'role',
        type: 'bytes32',
      },
      {
        internalType: 'address',
        name: 'callerConfirmation',
        type: 'address',
      },
    ],
    name: 'renounceRole',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 'role',
        type: 'bytes32',
      },
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
    ],
    name: 'revokeRole',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'rewardToken',
    outputs: [
      {
        internalType: 'contract IERC20',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'from',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256',
      },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'from',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: 'data',
        type: 'bytes',
      },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'operator',
        type: 'address',
      },
      {
        internalType: 'bool',
        name: 'approved',
        type: 'bool',
      },
    ],
    name: 'setApprovalForAll',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes4',
        name: 'interfaceId',
        type: 'bytes4',
      },
    ],
    name: 'supportsInterface',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'symbol',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256',
      },
    ],
    name: 'tokenURI',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'totalRewardedTokens',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'from',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256',
      },
    ],
    name: 'transferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'participant',
        type: 'address',
      },
    ],
    name: 'wasRewarded',
    outputs: [
      {
        internalType: 'bool',
        name: 'receivedReward',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
] as const;

const bytecode =
  '0x60e06040523480156200001157600080fd5b5060405162004223380380620042238339818101604052810190620000379190620003bf565b6040518060400160405280600981526020017f4d6f6d656e744e465400000000000000000000000000000000000000000000008152506040518060400160405280600481526020017f4d4e4654000000000000000000000000000000000000000000000000000000008152508160019081620000b49190620006a1565b508060029081620000c69190620006a1565b5050508360c081815250508173ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff16815250508060a08181525050620001226000801b336200016060201b60201c565b50620001557f4242473dd75e28dc99321e3749224dc35641c54746d4516e4e8a8639906cbc23846200016060201b60201c565b505050505062000788565b60006200017483836200026360201b60201c565b6200025857600160008085815260200190815260200160002060000160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550620001f4620002cd60201b60201c565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16847f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a4600190506200025d565b600090505b92915050565b600080600084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b600033905090565b600080fd5b6000819050919050565b620002ef81620002da565b8114620002fb57600080fd5b50565b6000815190506200030f81620002e4565b92915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620003428262000315565b9050919050565b620003548162000335565b81146200036057600080fd5b50565b600081519050620003748162000349565b92915050565b6000620003878262000335565b9050919050565b62000399816200037a565b8114620003a557600080fd5b50565b600081519050620003b9816200038e565b92915050565b60008060008060808587031215620003dc57620003db620002d5565b5b6000620003ec87828801620002fe565b9450506020620003ff8782880162000363565b93505060406200041287828801620003a8565b92505060606200042587828801620002fe565b91505092959194509250565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680620004b357607f821691505b602082108103620004c957620004c86200046b565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302620005337fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82620004f4565b6200053f8683620004f4565b95508019841693508086168417925050509392505050565b6000819050919050565b6000620005826200057c6200057684620002da565b62000557565b620002da565b9050919050565b6000819050919050565b6200059e8362000561565b620005b6620005ad8262000589565b84845462000501565b825550505050565b600090565b620005cd620005be565b620005da81848462000593565b505050565b5b818110156200060257620005f6600082620005c3565b600181019050620005e0565b5050565b601f82111562000651576200061b81620004cf565b6200062684620004e4565b8101602085101562000636578190505b6200064e6200064585620004e4565b830182620005df565b50505b505050565b600082821c905092915050565b6000620006766000198460080262000656565b1980831691505092915050565b600062000691838362000663565b9150826002028217905092915050565b620006ac8262000431565b67ffffffffffffffff811115620006c857620006c76200043c565b5b620006d482546200049a565b620006e182828562000606565b600060209050601f83116001811462000719576000841562000704578287015190505b62000710858262000683565b86555062000780565b601f1984166200072986620004cf565b60005b8281101562000753578489015182556001820191506020850194506020810190506200072c565b868310156200077357848901516200076f601f89168262000663565b8355505b6001600288020188555050505b505050505050565b60805160a05160c051613a33620007f06000396000818161080201528181610f9e0152818161138501526114e4015260008181610a7201528181610b890152610d3001526000818161067801528181610aef01528181610daf015261159c0152613a336000f3fe608060405234801561001057600080fd5b50600436106101fb5760003560e01c806370a082311161011a578063b666566b116100ad578063d547741f1161007c578063d547741f146105b1578063d5abeb01146105cd578063e985e9c5146105eb578063f7c618c11461061b578063fc0e46fc14610639576101fb565b8063b666566b1461053d578063b88d4fde1461055b578063c1ec478014610577578063c87b56dd14610581576101fb565b806395d89b41116100e957806395d89b41146104c75780639e8fa647146104e5578063a217fddf14610503578063a22cb46514610521576101fb565b806370a082311461042d578063771282f61461045d5780637b17b7a81461047b57806391d1485414610497576101fb565b8063248a9ca31161019257806342842e0e1161016157806342842e0e146103b95780635e12e790146103d55780636352211e146103f35780636f4a2cd014610423576101fb565b8063248a9ca3146103205780632f2ff15d1461035057806335c1d3491461036c57806336568abe1461039d576101fb565b8063095ea7b3116101ce578063095ea7b31461029a5780630f498336146102b65780631133678c146102e657806323b872dd14610304576101fb565b806301ffc9a714610200578063069c9fae1461023057806306fdde031461024c578063081812fc1461026a575b600080fd5b61021a60048036038101906102159190612875565b610657565b60405161022791906128bd565b60405180910390f35b61024a6004803603810190610245919061296c565b610669565b005b61025461071a565b6040516102619190612a3c565b60405180910390f35b610284600480360381019061027f9190612a5e565b6107ac565b6040516102919190612a9a565b60405180910390f35b6102b460048036038101906102af919061296c565b6107c8565b005b6102d060048036038101906102cb9190612ab5565b6107de565b6040516102dd91906128bd565b60405180910390f35b6102ee6107fe565b6040516102fb91906128bd565b60405180910390f35b61031e60048036038101906103199190612ae2565b61082a565b005b61033a60048036038101906103359190612b6b565b61092c565b6040516103479190612ba7565b60405180910390f35b61036a60048036038101906103659190612bc2565b61094b565b005b61038660048036038101906103819190612a5e565b61096d565b604051610394929190612c29565b60405180910390f35b6103b760048036038101906103b29190612bc2565b6109d5565b005b6103d360048036038101906103ce9190612ae2565b610a50565b005b6103dd610a70565b6040516103ea9190612c61565b60405180910390f35b61040d60048036038101906104089190612a5e565b610a94565b60405161041a9190612a9a565b60405180910390f35b61042b610aa6565b005b61044760048036038101906104429190612ab5565b610e5f565b6040516104549190612c61565b60405180910390f35b610465610f19565b6040516104729190612c61565b60405180910390f35b61049560048036038101906104909190612ddd565b610f1f565b005b6104b160048036038101906104ac9190612bc2565b6111ce565b6040516104be91906128bd565b60405180910390f35b6104cf611238565b6040516104dc9190612a3c565b60405180910390f35b6104ed6112ca565b6040516104fa9190612ba7565b60405180910390f35b61050b6112ee565b6040516105189190612ba7565b60405180910390f35b61053b60048036038101906105369190612e78565b6112f5565b005b61054561130b565b6040516105529190612c61565b60405180910390f35b61057560048036038101906105709190612f59565b611311565b005b61057f61132e565b005b61059b60048036038101906105969190612a5e565b6113ad565b6040516105a89190612a3c565b60405180910390f35b6105cb60048036038101906105c69190612bc2565b6114c0565b005b6105d56114e2565b6040516105e29190612c61565b60405180910390f35b61060560048036038101906106009190612fdc565b611506565b60405161061291906128bd565b60405180910390f35b61062361159a565b604051610630919061307b565b60405180910390f35b6106416115be565b60405161064e9190612c61565b60405180910390f35b6000610662826115c4565b9050919050565b6000801b61067681611625565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663a9059cbb84846040518363ffffffff1660e01b81526004016106d1929190613096565b6020604051808303816000875af11580156106f0573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061071491906130d4565b50505050565b60606001805461072990613130565b80601f016020809104026020016040519081016040528092919081815260200182805461075590613130565b80156107a25780601f10610777576101008083540402835291602001916107a2565b820191906000526020600020905b81548152906001019060200180831161078557829003601f168201915b5050505050905090565b60006107b782611639565b506107c1826116c1565b9050919050565b6107da82826107d56116fe565b611706565b5050565b600b6020528060005260406000206000915054906101000a900460ff1681565b60007f000000000000000000000000000000000000000000000000000000000000000060085414905090565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff160361089c5760006040517f64a0ae920000000000000000000000000000000000000000000000000000000081526004016108939190612a9a565b60405180910390fd5b60006108b083836108ab6116fe565b611718565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610926578382826040517f64283d7b00000000000000000000000000000000000000000000000000000000815260040161091d93929190613161565b60405180910390fd5b50505050565b6000806000838152602001908152602001600020600101549050919050565b6109548261092c565b61095d81611625565b6109678383611932565b50505050565b600a818154811061097d57600080fd5b906000526020600020016000915090508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060000160149054906101000a90046bffffffffffffffffffffffff16905082565b6109dd6116fe565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610a41576040517f6697b23200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610a4b8282611a23565b505050565b610a6b83838360405180602001604052806000815250611311565b505050565b7f000000000000000000000000000000000000000000000000000000000000000081565b6000610a9f82611639565b9050919050565b610aae6107fe565b610aed576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ae4906131e4565b60405180910390fd5b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401610b469190612a9a565b602060405180830381865afa158015610b63573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b879190613219565b7f00000000000000000000000000000000000000000000000000000000000000001115610be9576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610be090613292565b60405180910390fd5b6000600a80549050905060005b81811015610e5b576000600a8281548110610c1457610c136132b2565b5b9060005260206000200160000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600b60008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1615610cd1576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610cc89061332d565b60405180910390fd5b6001600b60008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555060006009547f0000000000000000000000000000000000000000000000000000000000000000600a8581548110610d6357610d626132b2565b5b9060005260206000200160000160149054906101000a90046bffffffffffffffffffffffff166bffffffffffffffffffffffff16610da1919061337c565b610dab91906133ed565b90507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663a9059cbb83836040518363ffffffff1660e01b8152600401610e08929190613096565b6020604051808303816000875af1158015610e27573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e4b91906130d4565b5050508080600101915050610bf6565b5050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610ed25760006040517f89c62b64000000000000000000000000000000000000000000000000000000008152600401610ec99190612a9a565b60405180910390fd5b600460008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b60085481565b7f4242473dd75e28dc99321e3749224dc35641c54746d4516e4e8a8639906cbc23610f4981611625565b612710826bffffffffffffffffffffffff161115610f9c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f939061346a565b60405180910390fd5b7f000000000000000000000000000000000000000000000000000000000000000060085410611000576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ff7906134d6565b60405180910390fd5b6000835111611044576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161103b90613542565b60405180910390fd5b600060016008546110559190613562565b90506110618185611b15565b61106b8582611b71565b80600881905550600a60405180604001604052808773ffffffffffffffffffffffffffffffffffffffff168152602001856bffffffffffffffffffffffff168152509080600181540180825580915050600190039060005260206000200160009091909190915060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160000160146101000a8154816bffffffffffffffffffffffff02191690836bffffffffffffffffffffffff1602179055505050826bffffffffffffffffffffffff16600960008282546111729190613562565b925050819055508473ffffffffffffffffffffffffffffffffffffffff167fe18fa0c02d2ab894923163d9b3ffd80544cfe9d531cf5099c15cc8012b38ab18846040516111bf9190613596565b60405180910390a25050505050565b600080600084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b60606002805461124790613130565b80601f016020809104026020016040519081016040528092919081815260200182805461127390613130565b80156112c05780601f10611295576101008083540402835291602001916112c0565b820191906000526020600020905b8154815290600101906020018083116112a357829003601f168201915b5050505050905090565b7f4242473dd75e28dc99321e3749224dc35641c54746d4516e4e8a8639906cbc2381565b6000801b81565b6113076113006116fe565b8383611b8f565b5050565b60095481565b61131c84848461082a565b61132884848484611cfe565b50505050565b6000801b61133b81611625565b6113436107fe565b15611383576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161137a906135fd565b60405180910390fd5b7f000000000000000000000000000000000000000000000000000000000000000060088190555050565b60606113b882611639565b5060006007600084815260200190815260200160002080546113d990613130565b80601f016020809104026020016040519081016040528092919081815260200182805461140590613130565b80156114525780601f1061142757610100808354040283529160200191611452565b820191906000526020600020905b81548152906001019060200180831161143557829003601f168201915b505050505090506000611463611eb5565b905060008151036114785781925050506114bb565b6000825111156114ad578082604051602001611495929190613659565b604051602081830303815290604052925050506114bb565b6114b684611ecc565b925050505b919050565b6114c98261092c565b6114d281611625565b6114dc8383611a23565b50505050565b7f000000000000000000000000000000000000000000000000000000000000000081565b6000600660008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b7f000000000000000000000000000000000000000000000000000000000000000081565b61271081565b6000634906490660e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916148061161e575061161d82611f35565b5b9050919050565b611636816116316116fe565b612017565b50565b60008061164583612068565b9050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036116b857826040517f7e2732890000000000000000000000000000000000000000000000000000000081526004016116af9190612c61565b60405180910390fd5b80915050919050565b60006005600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b600033905090565b61171383838360016120a5565b505050565b60008061172484612068565b9050600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16146117665761176581848661226a565b5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146117f7576117a86000856000806120a5565b6001600460008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825403925050819055505b600073ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff161461187a576001600460008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055505b846003600086815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550838573ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4809150509392505050565b600061193e83836111ce565b611a1857600160008085815260200190815260200160002060000160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055506119b56116fe565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16847f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a460019050611a1d565b600090505b92915050565b6000611a2f83836111ce565b15611b0a57600080600085815260200190815260200160002060000160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550611aa76116fe565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16847ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b60405160405180910390a460019050611b0f565b600090505b92915050565b80600760008481526020019081526020016000209081611b35919061381f565b507ff8e1a15aba9398e019f0b49df1a4fde98ee17ae345cb5f6b5e2c27f5033e8ce782604051611b659190612c61565b60405180910390a15050565b611b8b82826040518060200160405280600081525061232e565b5050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603611c0057816040517f5b08ba18000000000000000000000000000000000000000000000000000000008152600401611bf79190612a9a565b60405180910390fd5b80600660008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3183604051611cf191906128bd565b60405180910390a3505050565b60008373ffffffffffffffffffffffffffffffffffffffff163b1115611eaf578273ffffffffffffffffffffffffffffffffffffffff1663150b7a02611d426116fe565b8685856040518563ffffffff1660e01b8152600401611d649493929190613946565b6020604051808303816000875af1925050508015611da057506040513d601f19601f82011682018060405250810190611d9d91906139a7565b60015b611e24573d8060008114611dd0576040519150601f19603f3d011682016040523d82523d6000602084013e611dd5565b606091505b506000815103611e1c57836040517f64a0ae92000000000000000000000000000000000000000000000000000000008152600401611e139190612a9a565b60405180910390fd5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614611ead57836040517f64a0ae92000000000000000000000000000000000000000000000000000000008152600401611ea49190612a9a565b60405180910390fd5b505b50505050565b606060405180602001604052806000815250905090565b6060611ed782611639565b506000611ee2611eb5565b90506000815111611f025760405180602001604052806000815250611f2d565b80611f0c8461234a565b604051602001611f1d929190613659565b6040516020818303038152906040525b915050919050565b60007f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916148061200057507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b80612010575061200f82612418565b5b9050919050565b61202182826111ce565b6120645780826040517fe2517d3f00000000000000000000000000000000000000000000000000000000815260040161205b9291906139d4565b60405180910390fd5b5050565b60006003600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b80806120de5750600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614155b156122125760006120ee84611639565b9050600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415801561215957508273ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614155b801561216c575061216a8184611506565b155b156121ae57826040517fa9fbf51f0000000000000000000000000000000000000000000000000000000081526004016121a59190612a9a565b60405180910390fd5b811561221057838573ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45b505b836005600085815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050505050565b612275838383612492565b61232957600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036122ea57806040517f7e2732890000000000000000000000000000000000000000000000000000000081526004016122e19190612c61565b60405180910390fd5b81816040517f177e802f000000000000000000000000000000000000000000000000000000008152600401612320929190613096565b60405180910390fd5b505050565b6123388383612553565b6123456000848484611cfe565b505050565b6060600060016123598461264c565b01905060008167ffffffffffffffff81111561237857612377612c86565b5b6040519080825280601f01601f1916602001820160405280156123aa5781602001600182028036833780820191505090505b509050600082602001820190505b60011561240d578080600190039150507f3031323334353637383961626364656600000000000000000000000000000000600a86061a8153600a8581612401576124006133be565b5b049450600085036123b8575b819350505050919050565b60007f7965db0b000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916148061248b575061248a8261279f565b5b9050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415801561254a57508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16148061250b575061250a8484611506565b5b8061254957508273ffffffffffffffffffffffffffffffffffffffff16612531836116c1565b73ffffffffffffffffffffffffffffffffffffffff16145b5b90509392505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036125c55760006040517f64a0ae920000000000000000000000000000000000000000000000000000000081526004016125bc9190612a9a565b60405180910390fd5b60006125d383836000611718565b9050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146126475760006040517f73c6ac6e00000000000000000000000000000000000000000000000000000000815260040161263e9190612a9a565b60405180910390fd5b505050565b600080600090507a184f03e93ff9f4daa797ed6e38ed64bf6a1f01000000000000000083106126aa577a184f03e93ff9f4daa797ed6e38ed64bf6a1f01000000000000000083816126a05761269f6133be565b5b0492506040810190505b6d04ee2d6d415b85acef810000000083106126e7576d04ee2d6d415b85acef810000000083816126dd576126dc6133be565b5b0492506020810190505b662386f26fc10000831061271657662386f26fc10000838161270c5761270b6133be565b5b0492506010810190505b6305f5e100831061273f576305f5e1008381612735576127346133be565b5b0492506008810190505b612710831061276457612710838161275a576127596133be565b5b0492506004810190505b60648310612787576064838161277d5761277c6133be565b5b0492506002810190505b600a8310612796576001810190505b80915050919050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b6000604051905090565b600080fd5b600080fd5b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b6128528161281d565b811461285d57600080fd5b50565b60008135905061286f81612849565b92915050565b60006020828403121561288b5761288a612813565b5b600061289984828501612860565b91505092915050565b60008115159050919050565b6128b7816128a2565b82525050565b60006020820190506128d260008301846128ae565b92915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000612903826128d8565b9050919050565b612913816128f8565b811461291e57600080fd5b50565b6000813590506129308161290a565b92915050565b6000819050919050565b61294981612936565b811461295457600080fd5b50565b60008135905061296681612940565b92915050565b6000806040838503121561298357612982612813565b5b600061299185828601612921565b92505060206129a285828601612957565b9150509250929050565b600081519050919050565b600082825260208201905092915050565b60005b838110156129e65780820151818401526020810190506129cb565b60008484015250505050565b6000601f19601f8301169050919050565b6000612a0e826129ac565b612a1881856129b7565b9350612a288185602086016129c8565b612a31816129f2565b840191505092915050565b60006020820190508181036000830152612a568184612a03565b905092915050565b600060208284031215612a7457612a73612813565b5b6000612a8284828501612957565b91505092915050565b612a94816128f8565b82525050565b6000602082019050612aaf6000830184612a8b565b92915050565b600060208284031215612acb57612aca612813565b5b6000612ad984828501612921565b91505092915050565b600080600060608486031215612afb57612afa612813565b5b6000612b0986828701612921565b9350506020612b1a86828701612921565b9250506040612b2b86828701612957565b9150509250925092565b6000819050919050565b612b4881612b35565b8114612b5357600080fd5b50565b600081359050612b6581612b3f565b92915050565b600060208284031215612b8157612b80612813565b5b6000612b8f84828501612b56565b91505092915050565b612ba181612b35565b82525050565b6000602082019050612bbc6000830184612b98565b92915050565b60008060408385031215612bd957612bd8612813565b5b6000612be785828601612b56565b9250506020612bf885828601612921565b9150509250929050565b60006bffffffffffffffffffffffff82169050919050565b612c2381612c02565b82525050565b6000604082019050612c3e6000830185612a8b565b612c4b6020830184612c1a565b9392505050565b612c5b81612936565b82525050565b6000602082019050612c766000830184612c52565b92915050565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b612cbe826129f2565b810181811067ffffffffffffffff82111715612cdd57612cdc612c86565b5b80604052505050565b6000612cf0612809565b9050612cfc8282612cb5565b919050565b600067ffffffffffffffff821115612d1c57612d1b612c86565b5b612d25826129f2565b9050602081019050919050565b82818337600083830152505050565b6000612d54612d4f84612d01565b612ce6565b905082815260208101848484011115612d7057612d6f612c81565b5b612d7b848285612d32565b509392505050565b600082601f830112612d9857612d97612c7c565b5b8135612da8848260208601612d41565b91505092915050565b612dba81612c02565b8114612dc557600080fd5b50565b600081359050612dd781612db1565b92915050565b600080600060608486031215612df657612df5612813565b5b6000612e0486828701612921565b935050602084013567ffffffffffffffff811115612e2557612e24612818565b5b612e3186828701612d83565b9250506040612e4286828701612dc8565b9150509250925092565b612e55816128a2565b8114612e6057600080fd5b50565b600081359050612e7281612e4c565b92915050565b60008060408385031215612e8f57612e8e612813565b5b6000612e9d85828601612921565b9250506020612eae85828601612e63565b9150509250929050565b600067ffffffffffffffff821115612ed357612ed2612c86565b5b612edc826129f2565b9050602081019050919050565b6000612efc612ef784612eb8565b612ce6565b905082815260208101848484011115612f1857612f17612c81565b5b612f23848285612d32565b509392505050565b600082601f830112612f4057612f3f612c7c565b5b8135612f50848260208601612ee9565b91505092915050565b60008060008060808587031215612f7357612f72612813565b5b6000612f8187828801612921565b9450506020612f9287828801612921565b9350506040612fa387828801612957565b925050606085013567ffffffffffffffff811115612fc457612fc3612818565b5b612fd087828801612f2b565b91505092959194509250565b60008060408385031215612ff357612ff2612813565b5b600061300185828601612921565b925050602061301285828601612921565b9150509250929050565b6000819050919050565b600061304161303c613037846128d8565b61301c565b6128d8565b9050919050565b600061305382613026565b9050919050565b600061306582613048565b9050919050565b6130758161305a565b82525050565b6000602082019050613090600083018461306c565b92915050565b60006040820190506130ab6000830185612a8b565b6130b86020830184612c52565b9392505050565b6000815190506130ce81612e4c565b92915050565b6000602082840312156130ea576130e9612813565b5b60006130f8848285016130bf565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061314857607f821691505b60208210810361315b5761315a613101565b5b50919050565b60006060820190506131766000830186612a8b565b6131836020830185612c52565b6131906040830184612a8b565b949350505050565b7f636f6e74657374207374696c6c20616374697665000000000000000000000000600082015250565b60006131ce6014836129b7565b91506131d982613198565b602082019050919050565b600060208201905081810360008301526131fd816131c1565b9050919050565b60008151905061321381612940565b92915050565b60006020828403121561322f5761322e612813565b5b600061323d84828501613204565b91505092915050565b7f696e73756666696369656e742072657761726420746f6b656e73000000000000600082015250565b600061327c601a836129b7565b915061328782613246565b602082019050919050565b600060208201905081810360008301526132ab8161326f565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f7061727469636970616e7420616c726561647920726577617264656400000000600082015250565b6000613317601c836129b7565b9150613322826132e1565b602082019050919050565b600060208201905081810360008301526133468161330a565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061338782612936565b915061339283612936565b92508282026133a081612936565b915082820484148315176133b7576133b661334d565b5b5092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b60006133f882612936565b915061340383612936565b925082613413576134126133be565b5b828204905092915050565b7f73636f72652065786365656473206c696d697400000000000000000000000000600082015250565b60006134546013836129b7565b915061345f8261341e565b602082019050919050565b6000602082019050818103600083015261348381613447565b9050919050565b7f6d617820737570706c7920726561636865640000000000000000000000000000600082015250565b60006134c06012836129b7565b91506134cb8261348a565b602082019050919050565b600060208201905081810360008301526134ef816134b3565b9050919050565b7f696d61676555524920697320656d707479000000000000000000000000000000600082015250565b600061352c6011836129b7565b9150613537826134f6565b602082019050919050565b6000602082019050818103600083015261355b8161351f565b9050919050565b600061356d82612936565b915061357883612936565b92508282019050808211156135905761358f61334d565b5b92915050565b60006020820190506135ab6000830184612c1a565b92915050565b7f636f6e7465737420616c726561647920656e6465640000000000000000000000600082015250565b60006135e76015836129b7565b91506135f2826135b1565b602082019050919050565b60006020820190508181036000830152613616816135da565b9050919050565b600081905092915050565b6000613633826129ac565b61363d818561361d565b935061364d8185602086016129c8565b80840191505092915050565b60006136658285613628565b91506136718284613628565b91508190509392505050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b6000600883026136df7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff826136a2565b6136e986836136a2565b95508019841693508086168417925050509392505050565b600061371c61371761371284612936565b61301c565b612936565b9050919050565b6000819050919050565b61373683613701565b61374a61374282613723565b8484546136af565b825550505050565b600090565b61375f613752565b61376a81848461372d565b505050565b5b8181101561378e57613783600082613757565b600181019050613770565b5050565b601f8211156137d3576137a48161367d565b6137ad84613692565b810160208510156137bc578190505b6137d06137c885613692565b83018261376f565b50505b505050565b600082821c905092915050565b60006137f6600019846008026137d8565b1980831691505092915050565b600061380f83836137e5565b9150826002028217905092915050565b613828826129ac565b67ffffffffffffffff81111561384157613840612c86565b5b61384b8254613130565b613856828285613792565b600060209050601f8311600181146138895760008415613877578287015190505b6138818582613803565b8655506138e9565b601f1984166138978661367d565b60005b828110156138bf5784890151825560018201915060208501945060208101905061389a565b868310156138dc57848901516138d8601f8916826137e5565b8355505b6001600288020188555050505b505050505050565b600081519050919050565b600082825260208201905092915050565b6000613918826138f1565b61392281856138fc565b93506139328185602086016129c8565b61393b816129f2565b840191505092915050565b600060808201905061395b6000830187612a8b565b6139686020830186612a8b565b6139756040830185612c52565b8181036060830152613987818461390d565b905095945050505050565b6000815190506139a181612849565b92915050565b6000602082840312156139bd576139bc612813565b5b60006139cb84828501613992565b91505092915050565b60006040820190506139e96000830185612a8b565b6139f66020830184612b98565b939250505056fea264697066735822122044f461f7e0830cb42ad9019e5678b78efc7d4ee9a60c0dd38264b50239380b2464736f6c63430008180033';

export default {
  abi,
  bytecode,
};
