import fs from 'fs';
import { Address, keccak256 } from 'viem';

export function tick(milliseconds: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, milliseconds);
  });
}

export function getNoun(seed: Address) {
  // Take random number from seed
  const randomHex = keccak256(seed).slice(0, 4);
  const random = parseInt(randomHex, 16) % 18;
  const nounPath = __dirname + `/../public/images/${random}.png`;

  const image = fs.readFileSync(nounPath, 'base64');

  // append prefix
  return 'data:image/png;base64,' + image;
}

export function createNFTJson(image: string, score: number) {
  const jsonObject = {
    name: 'An unforgettable moment',
    description: 'A moment that will last forever',
    image: image,
    attributes: {
      score: score,
    },
  };

  // write to temp file
  const tempFilePath = __dirname + '/nft.json';
  const jsonString = JSON.stringify(jsonObject);
  fs.writeFileSync(tempFilePath, jsonString);

  return tempFilePath;
}
