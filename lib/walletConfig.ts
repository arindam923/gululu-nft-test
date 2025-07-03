import {
  injectedWallet,
  walletConnectWallet,
  metaMaskWallet,
  trustWallet,
  rainbowWallet,
} from "@rainbow-me/rainbowkit/wallets";

export const getWalletOptions = (projectId: string) => ({
  projectId,
  walletConnectVersion: "2",
  qrModalOptions: {
    themeMode: "light",
    desktopWallets: true,
    mobileWallets: true,
  },
});

export const wallets = [
  {
    groupName: "Popular",
    wallets: [
      injectedWallet,
      metaMaskWallet,
      walletConnectWallet,
      trustWallet,
      rainbowWallet,
    ],
  },
];
