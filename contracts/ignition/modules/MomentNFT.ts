import { buildModule } from '@nomicfoundation/hardhat-ignition/modules';

const MomentModule = buildModule('MomentNFTModule', (m) => {
  const momentNFT = m.contract('MomentNFT');

  return { momentNFT };
});

export default MomentModule;
