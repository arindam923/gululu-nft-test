import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { bsc } from "wagmi/chains";
import {
  metaMaskWallet,
  trustWallet,
  binanceWallet,
  coinbaseWallet,
  walletConnectWallet,
  injectedWallet,
  braveWallet,
  coin98Wallet,
  safeWallet,
} from "@rainbow-me/rainbowkit/wallets";

export const config = getDefaultConfig({
  appName: "Gululand",
  projectId: "05e21b0bc8ed3b5c5c17c5af120b2cc2",
  chains: [bsc],
  wallets: [
    {
      groupName: "Recommended",
      wallets: [
        metaMaskWallet,
        trustWallet,
        binanceWallet,
        coinbaseWallet,
        braveWallet,
        coin98Wallet,
      ],
    },
    {
      groupName: "Other",
      wallets: [walletConnectWallet, injectedWallet, safeWallet],
    },
  ],
  ssr: true,
});
