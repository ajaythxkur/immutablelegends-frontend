"use client"

import { AptosWalletAdapterProvider } from "@aptos-labs/wallet-adapter-react";
import { PetraWallet } from "petra-plugin-wallet-adapter";
import { MartianWallet } from "@martianwallet/aptos-wallet-adapter";
export default function AptosWalletProvider({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const wallets = [new PetraWallet(), new MartianWallet()];
    return (
        <AptosWalletAdapterProvider plugins={wallets} autoConnect={true}>
            {children}
        </AptosWalletAdapterProvider>
    )
}