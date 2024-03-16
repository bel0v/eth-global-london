import { PrismaClient } from '@prisma/client';
import { privateKeyToAccount } from 'viem/accounts';
import EnvVars from './constants/EnvVars';
import { Hex, createWalletClient, http } from 'viem';
import { spicy } from 'viem/chains';

export const db = new PrismaClient();

export const account = privateKeyToAccount(
  EnvVars.Blockchain.PrivateKey as Hex
);

export const walletClient = createWalletClient({
  chain: spicy,
  transport: http(),
  account: account,
});
