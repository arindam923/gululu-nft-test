import { createAppKit } from "@reown/appkit/react";
import { WagmiAdapter } from "@reown/appkit-adapter-wagmi";
import { bsc } from "@reown/appkit/networks";

// 1. Get projectId from https://cloud.walletconnect.com
const projectId = "79a9f90c238da1f445b4f668fbab96cc";

// 2. Create a metadata object - optional
const metadata = {
  name: "Gululu NFT",
  description:
    "Swap Your Ridiculous Dragons And Nomaimai NFTs For Gululu Points",
  url: "https://gululu.com", // origin must match your domain & subdomain
  icons: ["https://avatars.githubusercontent.com/u/179229932"],
};

// 3. Set the networks
const networks = [bsc];

// 4. Create Wagmi Adapter
const wagmiAdapter = new WagmiAdapter({
  networks,
  projectId,
  ssr: true,
});

// 5. Create modal
createAppKit({
  adapters: [wagmiAdapter],
  networks: [bsc],
  projectId,
  metadata,
  features: {
    analytics: true,
  },
});

export const config = wagmiAdapter.wagmiConfig;
