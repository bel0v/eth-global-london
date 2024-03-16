// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import {ERC721} from "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import {ERC721URIStorage} from "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import {AccessControl} from "@openzeppelin/contracts/access/AccessControl.sol";

contract MomentNFT is AccessControl, ERC721URIStorage {
    struct Participant {
        address addr;
        uint96 score;
    }

    event ParticipantAdded(address indexed addr, uint96 score);

    bytes32 public constant AI_SCORING_AGENT = keccak256("AI_SCORING_AGENT");
    uint256 public constant SCORE_DENOMINATOR = 10_000; // 1 basis point = 0.01%
    IERC20 public immutable rewardToken;
    uint256 public immutable totalRewardedTokens;
    uint256 public immutable maxSupply;

    uint256 public currentSupply;
    uint256 public cumulativeScore;
    Participant[] public participants;
    mapping(address participant => bool receivedReward) public wasRewarded;

    constructor(
        uint256 maxSupply_,
        address scoringAgent,
        IERC20 rewardToken_,
        uint256 totalRewardedTokens_
    ) ERC721("MomentNFT", "MNFT") {
        maxSupply = maxSupply_;
        rewardToken = rewardToken_;
        totalRewardedTokens = totalRewardedTokens_;

        _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);
        _grantRole(AI_SCORING_AGENT, scoringAgent);
    }

    function mint(
        address to,
        string memory imageURI,
        uint96 score
    ) external onlyRole(AI_SCORING_AGENT) {
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
            totalRewardedTokens <= rewardToken.balanceOf(address(this)),
            "insufficient reward tokens"
        );

        uint256 totalParticipants = participants.length;
        for (uint256 i = 0; i < totalParticipants; i++) {
            address participant = participants[i].addr;
            require(!wasRewarded[participant], "participant already rewarded");
            wasRewarded[participant] = true;
            uint256 reward = (participants[i].score * totalRewardedTokens) /
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
        override(AccessControl, ERC721URIStorage)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }
}
