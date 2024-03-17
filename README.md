# Momentor: Rewards Protocol for Quality Content Contribution

**Momentor** is a gamified user engagement protocol that leverages content contribution to cultivate and maintain a dedicated user base. This approach not only fosters a vibrant community but also generates high-quality content for event organizers to make use of as assets (for example marketing material) and training AI models, all while still being able to reward and give credit to the original controbutors. Momentor stands at the forefront of AI and blockchain integration in the event industry.

## Overview

At its core, Momentor has been built to stimulate user engagement during an event by rewarding them for capturing the best moments. It utilizes blockchain technology to allow organizers to collect and make use of creater generated assets, while still maintaining a link to the original creators so that every fan can be properly credited for their contribution. We also make use of AI techniques to gamify the experience for creators and motivate them to upload high-quality content. A typical flow of an event would consist of the following: the organizer would post their event on the platform and create multiple bounties during an event, prompting and rewarding users to contribute their media to capture specific moments of the event, e.g. the first goal of the match, the DJ at a NFT club party, a mascot of a famouse DeFi exchange at a blockchain hackathon, or something more creative, like "A picture of hackers celebrating as the submit their projects". Then, the creators (which we will call the momentors) capture the moment by taking a picture and feeding it into our AI model that gives them a score of how relevant the picture is to the organizers ask. Subsequently, if the user fulfills a certain relavency threshold then a NFT is minted to the user, which would make them eligible to receive rewards and appear in the leaderboard for that particular moment bounty.

![alt text](./leaderboard.png)

Momentor aims to motivate momenters to share their content, thereby enriching the and organizers fanbase and offering a deeper understanding of individual perspectives. This wealth of content becomes a valuable resource for event organizers, enabling them to gain insights into attendee behaviors and preferences. Leveraging the power of AI and blockchain, organizers can directly access insightful data from users' viewpoints, ensuring data ownership and confidentiality.

## Key Features

- **Gamified User Engagement**: Through tokens rewards and community recognition, our platform incentivizes user participation at events and content creation.
- **AI-Driven Rewards**: Engaging event participants not only builds a loyal community but also encourages the sharing of more insightful data. By rewarding contributions with tokens based on the quality of their content, users are recognized for their active participation and valuable input.
- **Decentralized Data Ownership**: The data is uploaded to filecoin and ipfs with lighthouse.storage, thus allowing the event organizers full ownership over monetization and distribution of the data, while also maintaining a link to the original momentor's upload.
- **Gasless Experience**: We don't require users to send any sort of transaction, except when the organizer has to transfer the reward tokens to the smart contract, thus enriching the user experience and retention to another level.

## How It Works

Momentor integrates seamlessly with EVM blockchains, requiring minimal setup from both organizers and users. Through a user-friendly interface, participants can upload their content, receive immediate feedback from AI analysis, and earn rewards for their contributions. On the backend, blockchain technology ensures the security and authenticity of data transactions, manages data communication with Filecoin services, making Momentor a robust solution for the future of event management and fan engagement.

On the AI side, we use an image-to-text model to get captions out of the image uploaded by the user. Given the caption and the bounty description we compare the associated vector embeddings to accurately rate the given output.

## Architecture

Tech Stack:

- **Dynamic.xyz** for wallet connection.
- Utilizing **lighthouse.storage** for image data.
- Solidity smart contracts deployed on **Chiliz, Arbitrum and Base**.
- Use any token as a reward, including **APE** coin.
- **Nouns DAO** design assets for UX/UI.
- React, Express.js and Python for Front-End and Back-end services.
- Viem for blockchain interaction, hardhat for contracts and prisma for the database.

![alt text](./architecture.jpg)

Deployments:

- Chiliz Spicy Testnet:
  - MomentNFT: `0x71d13A1066091550fd0988B4FD8887EAc26839b7`
  - MomentFactory: `0x5074E1bb5Dd9A5CF8ADaB7891427dc6C2542e467`
  - MockERC20: `0x6975cA53289FBe4c1d7D123593e0CD7dB2339808`
- Arbitrum Sepolia Testnet:
  - MomentNFT: `0xd1637946d430f0054Cbb39b5Ea83AC34C5C78b6c`
  - MomentFactory: `0xd7b212E3422113f2C76ab83554FF1b89A8EE66E6`
  - MockERC20: `0xf8f9D2C67f56A3A765b8468e91d82933D1F10a52`
- Base Sepolia Testnet:
  - MomentNFT: `0xd1637946d430f0054Cbb39b5Ea83AC34C5C78b6c`
  - MomentFactory: `0xd7b212E3422113f2C76ab83554FF1b89A8EE66E6`
  - MockERC20: `0xf8f9D2C67f56A3A765b8468e91d82933D1F10a52`

## License

This project is licensed under [MIT License](./LICENSE)
