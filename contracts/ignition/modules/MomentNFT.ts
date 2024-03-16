import { buildModule } from '@nomicfoundation/hardhat-ignition/modules';

const MomentModule = buildModule('MomentNFTModule', (m) => {
  const maxSupply = m.getParameter('maxSupply');
  const scoringAgent = m.getParameter('scoringAgent', m.getAccount(0));
  const rewardToken = m.getParameter('rewardToken');
  const totalRewardedTokens = m.getParameter('totalRewardedTokens');

  const momentNFT = m.contract('MomentNFT', [
    maxSupply,
    scoringAgent,
    rewardToken,
    totalRewardedTokens,
  ]);

  return { momentNFT };
});

export default MomentModule;
