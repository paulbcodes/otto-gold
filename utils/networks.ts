export const main = {
  chainId: `0x${Number(1).toString(16)}`,
  chainName: "Main Net",
  nativeCurrency: {
    name: "Ethereum",
    symbol: "ETH",
    decimals: 18,
  },
  rpcUrls: ["https://eth.llamarpc.com"],
  blockExplorerUrls: ["https://etherscan.io"],
};

export const sepolia = {
  chainId: `0x${Number(11155111).toString(16)}`,
  chainName: "sepolia",
  nativeCurrency: {
    name: "sepolia",
    symbol: "ETH",
    decimals: 18,
  },
  rpcUrls: ["https://rpc.sepolia.io"],
  blockExplorerUrls: ["https://sepolia.etherscan.io"],
};

export const goerli = {
  chainId: `0x${Number(9100).toString(16)}`,
  chainName: "OttoChain Testnet",
  nativeCurrency: {
    name: "OTTO",
    symbol: "OTTO",
    decimals: 18,
  },
  rpcUrls: ["https://gateway.testnet.octopus.network/ottochain/m4k5urt9h33dpbhgsp4lqxemo6naeihz"],
  blockExplorerUrls: ["http://34.69.4.240:4000/"],
};
