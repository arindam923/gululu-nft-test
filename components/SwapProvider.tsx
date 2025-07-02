"use client";

import { WagmiProvider } from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { config } from "@/lib/wagmi";

const queryClient = new QueryClient();

const SwapProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <WagmiProvider config={config}>{children}</WagmiProvider>
    </QueryClientProvider>
  );
};

export default SwapProvider;
