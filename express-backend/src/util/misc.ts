import fs from 'fs';

export function tick(milliseconds: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, milliseconds);
  });
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
