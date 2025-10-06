// src/components/WalletIcon.tsx

import { Wallet } from "lucide-react";


export const WalletIcon = ({ connectorId, className }: { connectorId: string, className: string }) => {
    // Wagmi standard IDs: 'io.metamask', 'com.coinbase.wallet', 'walletConnect'
    switch (connectorId) {
        // We can add specific SVG icons here later if desired
        default:
            return <Wallet className={className} />;
    }
};
