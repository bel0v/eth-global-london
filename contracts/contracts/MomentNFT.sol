// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import {ERC721} from "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import {ERC721URIStorageUpgradeable} from "@openzeppelin/contracts-upgradeable/token/ERC721/extensions/ERC721URIStorageUpgradeable.sol";
import {AccessControlUpgradeable} from "@openzeppelin/contracts-upgradeable/access/AccessControlUpgradeable.sol";

contract MomentNFT is AccessControlUpgradeable, ERC721URIStorageUpgradeable {
    struct Participant {
        address addr;
        uint96 score;
    }

    event ParticipantAdded(address indexed addr, uint96 score);

    uint256 public constant SCORE_DENOMINATOR = 10_000; // 1 basis point = 0.01%
    IERC20 public rewardToken;
    uint256 public totalReward;
    uint256 public maxSupply;

    uint256 public currentSupply;
    uint256 public cumulativeScore;
    Participant[] public participants;
    mapping(address participant => bool receivedReward) public wasRewarded;

    constructor() {
        _disableInitializers();
    }

    function initialize(
        uint256 maxSupply_,
        address admin,
        IERC20 rewardToken_,
        uint256 totalReward_
    ) external initializer {
        __ERC721_init("Momentor", "MOM");
        __ERC721URIStorage_init();
        __AccessControl_init();

        maxSupply = maxSupply_;
        rewardToken = rewardToken_;
        totalReward = totalReward_;

        _grantRole(DEFAULT_ADMIN_ROLE, admin);
    }

    function mint(
        address to,
        string memory imageURI,
        uint96 score
    ) external onlyRole(DEFAULT_ADMIN_ROLE) {
        require(score <= SCORE_DENOMINATOR, "score exceeds limit");
        require(currentSupply < maxSupply, "max supply reached");
        require(bytes(imageURI).length > 0, "imageURI is empty");

        uint256 nextTokenId = currentSupply + 1;
        _setTokenURI(nextTokenId, imageURI);
        _safeMint(to, nextTokenId);
        currentSupply = nextTokenId;

        participants.push(Participant({addr: to, score: score}));
        cumulativeScore += score;

        emit ParticipantAdded(to, score);
    }

    function distributeRewards() external {
        require(contestHasEnded(), "contest still active");
        require(
            totalReward <= rewardToken.balanceOf(address(this)),
            "insufficient reward tokens"
        );

        uint256 totalParticipants = participants.length;
        for (uint256 i = 0; i < totalParticipants; i++) {
            address participant = participants[i].addr;
            require(!wasRewarded[participant], "participant already rewarded");
            wasRewarded[participant] = true;
            uint256 reward = (participants[i].score * totalReward) /
                cumulativeScore;
            rewardToken.transfer(participant, reward);
        }
    }

    function endContest() external onlyRole(DEFAULT_ADMIN_ROLE) {
        require(!contestHasEnded(), "contest already ended");
        currentSupply = maxSupply;
    }

    function contestHasEnded() public view returns (bool) {
        return currentSupply == maxSupply;
    }

    function recoverTokens(
        address to,
        uint256 amount
    ) external onlyRole(DEFAULT_ADMIN_ROLE) {
        rewardToken.transfer(to, amount);
    }

    function supportsInterface(
        bytes4 interfaceId
    )
        public
        view
        virtual
        override(AccessControlUpgradeable, ERC721URIStorageUpgradeable)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }
}
