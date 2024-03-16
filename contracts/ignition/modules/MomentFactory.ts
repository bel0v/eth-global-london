import { buildModule } from '@nomicfoundation/hardhat-ignition/modules';

const MomentFactoryModule = buildModule('MomentFactory', (m) => {
  const implAddress = m.getParameter('implAddress');

  const momentFactory = m.contract('MomentFactory', [implAddress]);

  return { momentFactory };
});

export default MomentFactoryModule;
