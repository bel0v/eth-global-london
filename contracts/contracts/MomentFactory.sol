/// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.24;

import {Clones} from "@openzeppelin/contracts/proxy/Clones.sol";
import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import {MomentNFT} from "./MomentNFT.sol";

contract MomentFactory {
    address public implementation;

    constructor(address _implementation) {
        implementation = _implementation;
    }

    function createBounty(
        uint256 maxSupply,
        address admin,
        IERC20 rewardToken,
        uint256 totalReward
    ) external returns (address) {
        MomentNFT momentNFT = MomentNFT(Clones.clone(implementation));
        momentNFT.initialize(maxSupply, admin, rewardToken, totalReward);
        return address(momentNFT);
    }
}
