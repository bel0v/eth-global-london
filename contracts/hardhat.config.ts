import { HardhatUserConfig } from 'hardhat/config';
import '@nomicfoundation/hardhat-toolbox-viem';
import 'dotenv';

const config: HardhatUserConfig = {
  networks: {
    chiliz: {
      url: 'https://spicy-rpc.chiliz.com/',
      accounts: [process.env.PRIVATE_KEY as string],
    },
  },
  solidity: '0.8.24',
};

export default config;
