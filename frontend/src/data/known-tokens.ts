import TokenManImage from '../images/tokens/token-man.jpg'
import TokenApeImage from '../images/tokens/token-ape.jpg'

export const knownTokens = [
  {
    address: '0xB241898A378e4ff39cb0ccdAe6B585D3A36d32Af', //testnet
    ticker: '$CITY',
    icon: TokenManImage,
  },
  {
    address: '0x6975cA53289FBe4c1d7D123593e0CD7dB2339808', // chiliz mock
    ticker: '$APE',
    icon: TokenApeImage,
  },
]

export const knownTokensMap: Record<
  string,
  { address: string; ticker: string; icon: string }
> = {
  '0xB241898A378e4ff39cb0ccdAe6B585D3A36d32Af': {
    address: '0xB241898A378e4ff39cb0ccdAe6B585D3A36d32Af', //testnet
    ticker: '$CITY',
    icon: TokenManImage,
  },
  '0x6975cA53289FBe4c1d7D123593e0CD7dB2339808': {
    address: '0x6975cA53289FBe4c1d7D123593e0CD7dB2339808', // chiliz mock
    ticker: '$APE',
    icon: TokenApeImage,
  },
}
