import {
  time,
  loadFixture,
} from '@nomicfoundation/hardhat-toolbox-viem/network-helpers';
import { expect } from 'chai';
import hre from 'hardhat';
import { parseEther } from 'viem';

describe('MomentNFT', function () {
  // We define a fixture to reuse the same setup in every test.
  // We use loadFixture to run this setup once, snapshot that state,
  // and reset Hardhat Network to that snapshot in every test.
  async function deployMomentNFT() {
    const maxSupply = 10n;

    const rewardToken = await hre.viem.deployContract('MockERC20');
    const totalRewardedTokens = parseEther('100');

    const [admin] = await hre.viem.getWalletClients();

    const momentNFTImpl = await hre.viem.deployContract('MomentNFT');
    const momentFactory = await hre.viem.deployContract('MomentFactory', [
      momentNFTImpl.address,
    ]);

    const { result: momentNFTAddress } =
      await momentFactory.simulate.createBounty([
        maxSupply,
        admin.account.address,
        rewardToken.address,
        totalRewardedTokens,
      ]);

    await momentFactory.write.createBounty(
      [
        maxSupply,
        admin.account.address,
        rewardToken.address,
        totalRewardedTokens,
      ],
      { account: admin.account }
    );

    const momentNFT = await hre.viem.getContractAt(
      'MomentNFT',
      momentNFTAddress
    );
    const publicClient = await hre.viem.getPublicClient();

    return {
      momentNFT,
      maxSupply,
      rewardToken,
      totalRewardedTokens,
      admin,
      publicClient,
    };
  }

  describe('Deployment', function () {
    it('Should set the right params', async function () {
      const { momentNFT, maxSupply, totalRewardedTokens, admin } =
        await loadFixture(deployMomentNFT);

      expect(await momentNFT.read.maxSupply()).to.equal(maxSupply);
      expect(await momentNFT.read.totalReward()).to.equal(totalRewardedTokens);
      const DEFAULT_ADMIN_ROLE = await momentNFT.read.DEFAULT_ADMIN_ROLE();
      expect(
        await momentNFT.read.hasRole([
          DEFAULT_ADMIN_ROLE,
          admin.account.address,
        ])
      ).to.equal(true);
    });
  });

  describe('Mints', function () {
    it('Should mint', async function () {
      const { momentNFT, rewardToken, totalRewardedTokens, admin } =
        await loadFixture(deployMomentNFT);
      const tokenId = 1n;
      const tokenURI = 'https://example.com/token/1';
      await momentNFT.write.mint([admin.account.address, tokenURI, 100n], {
        account: admin.account,
      });

      expect(await momentNFT.read.balanceOf([admin.account.address])).to.equal(
        1n
      );
      expect((await momentNFT.read.ownerOf([tokenId])).toLowerCase()).to.equal(
        admin.account.address
      );
      expect(await momentNFT.read.currentSupply()).to.equal(1n);
      expect(await momentNFT.read.tokenURI([tokenId])).to.equal(tokenURI);
      const participant = await momentNFT.read.participants([0n]);
      expect(participant[0].toLowerCase()).to.equal(admin.account.address);

      await momentNFT.write.endContest({ account: admin.account });
      await rewardToken.write.mint([momentNFT.address, totalRewardedTokens]);
      await momentNFT.write.distributeRewards({ account: admin.account });

      expect(
        await rewardToken.read.balanceOf([admin.account.address])
      ).to.equal(totalRewardedTokens);
    });
  });
});
