"use client";

import { Config, cookieToInitialState, WagmiProvider } from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { config, wagmiAdapter } from "@/lib/wagmi";

const queryClient = new QueryClient();

const SwapProvider: React.FC<{
  children: React.ReactNode;
  cookies: string | null;
}> = ({ children, cookies }) => {
  const initialState = cookieToInitialState(
    wagmiAdapter.wagmiConfig as Config,
    cookies
  );

  return (
    <WagmiProvider config={config} initialState={initialState}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  );
};

export default SwapProvider;
