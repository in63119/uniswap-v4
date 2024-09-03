import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import dotenv from "dotenv";

dotenv.config();

const config: HardhatUserConfig = {
  solidity: "0.8.24",
  networks: {
    kaiaTestnet: {
      url: "https://public-en-kairos.node.kaia.io",
      accounts: [process.env.DEV_PRIVATE_KEY || ""],
    },
  },
};

export default config;
