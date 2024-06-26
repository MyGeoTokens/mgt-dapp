import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { WalletProvider } from "@solana/wallet-adapter-react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useMemo } from "react";
import { UmiProvider } from "../utils/UmiProvider";
import "@/styles/globals.css";
import "@solana/wallet-adapter-react-ui/styles.css";
import { ChakraProvider } from '@chakra-ui/react'
import { image, headerText } from 'settings'
import { SolanaTimeProvider } from "@/utils/SolanaTimeContext";


export default function App({ Component, pageProps }: AppProps) {
  let network = WalletAdapterNetwork.Devnet;
  if (process.env.NEXT_PUBLIC_ENVIRONMENT === "mainnet-beta" || process.env.NEXT_PUBLIC_ENVIRONMENT === "mainnet") {
    network = WalletAdapterNetwork.Mainnet;
  }
  let endpoint = "https://greatest-white-energy.solana-mainnet.quiknode.pro/ae601942a3024081e44d8d1f0e04d30f058671b8/";
  if (process.env.NEXT_PUBLIC_RPC) {
    // endpoint = process.env.NEXT_PUBLIC_RPC;
    endpoint = "https://greatest-white-energy.solana-mainnet.quiknode.pro/ae601942a3024081e44d8d1f0e04d30f058671b8/"
  }
  const wallets = useMemo(
    () => [
    ],
    []
  );
  return (
    <>
      <Head>
        <meta property="og:type" content="website" />
        <meta property="og:title" content={headerText} />
        <meta
          property="og:description"
          content="Mint your Geo Genesis NFT now"
        />
        <meta name="description" content="Mint your Geo Genesis NFT now" />

        <meta
          property="og:image"
          content={image}
        />
        <meta
          property="og:image:secure_url"
          content="https://nftstorage.link/ipfs/bafkreibalq4tezfsukdacqetrpvnidquahvwipbevhlh3rvskw2g6iteim"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{headerText}</title>
        <link rel="icon" href="/favicon.ico" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://mint.mygeotokens.com" />
        <meta property="twitter:title" content="MyGeoTokens" />
        <meta property="twitter:description" content="Mint NOW!" />
        <meta property="twitter:image" content="https://nftstorage.link/ipfs/bafkreibalq4tezfsukdacqetrpvnidquahvwipbevhlh3rvskw2g6iteim" />

      </Head>
      <ChakraProvider>
        <WalletProvider wallets={wallets} autoConnect>
          <UmiProvider endpoint={endpoint}>
            <WalletModalProvider>
              <SolanaTimeProvider>
                <Component {...pageProps} />
              </SolanaTimeProvider>
            </WalletModalProvider>
          </UmiProvider>
        </WalletProvider>
      </ChakraProvider>
    </>
  );
}
