import { createAppKit } from "@reown/appkit/react";
import { WagmiAdapter } from "@reown/appkit-adapter-wagmi";
import { bsc } from "@reown/appkit/networks";

const projectId =
  (process.env.NEXT_PUBLIC_PROJECT_ID as string) ||
  "b56e18d47c72ab683b10814fe9495694";

const metadata = {
  name: "Gululu NFT",
  description:
    "Swap Your Ridiculous Dragons And Nomaimai NFTs For Gululu Points",
  url: "https://gululu-nft-test.vercel.app",
  icons: ["https://avatars.githubusercontent.com/u/179229932"],
};

// 3. Set the networks
const networks = [bsc];

// 4. Create Wagmi Adaptere
export const wagmiAdapter = new WagmiAdapter({
  networks,
  projectId,
  ssr: false,
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
