# EduChain 📚⛓️

Welcome to EduChain, a decentralized learn-to-earn platform built on the Celo blockchain. This application allows users to take courses, earn EDU tokens as rewards, stake their tokens to earn yields, and receive NFT achievement badges for their progress.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

---

## ✨ Core Features

-   **Wallet Integration:** Securely connect to the dApp using common browser wallets like MetaMask via the Celo network.
-   **On-Chain Course Catalog:** The list of available courses is fetched directly from a smart contract.
-   **Learn-to-Earn Rewards:** A system for awarding users with `EDU` tokens, which they can claim directly to their wallet.
-   **Token Staking:** A staking contract allows users to stake their `EDU` tokens in a flexible pool to earn rewards.
-   **Role-Based Admin Panel:** A secure admin page, accessible only to wallets with the `ADMIN_ROLE`, to manage courses and instructors.
-   **Live On-Chain Data:** User balances (wallet and staked) are fetched and displayed in real-time from the blockchain.
-   **Upgradeable Smart Contracts:** The contracts are built using the UUPS proxy pattern, allowing for future upgrades without data migration.

## 🛠️ Technology Stack

-   **Frontend:** React, Vite, TypeScript, Tailwind CSS
-   **UI Components:** shadcn/ui
-   **Blockchain Interaction:** wagmi, viem
-   **Smart Contracts:** Solidity
-   **Blockchain:**  (Mainnet)

## 🚀 Getting Started

Follow these instructions to set up and run the project locally for development and testing.

### Prerequisites

-   **Node.js** (v18 or higher recommended)
-   **npm** or **yarn**
-   A browser with a wallet extension like [MetaMask](https://metamask.io/) or [Rabby](https://rabby.io/).
-   Your wallet configured with the **Celo (Mainnet)** network.

### Installation & Setup

1.  **Clone the repository:**
    ```sh
    git clone <YOUR_GIT_REPOSITORY_URL>
    cd akin-tunde-edu-chain-quest
    ```

2.  **Install dependencies:**
    ```sh
    npm install
    ```

3.  **Set up environment variables:**
    Create a new file named `.env` in the root of the project directory. You will need to add a WalletConnect Project ID.

    -   Go to [WalletConnect Cloud](https://cloud.walletconnect.com/) to get a free `projectId`.
    -   Add the ID to your `.env` file:

    ```
    VITE_WALLETCONNECT_PROJECT_ID=your_project_id_here
    ```

4.  **Run the development server:**
    ```sh
    npm run dev
    ```
    The application should now be running on `http://localhost:8080`.

## 📝 Smart Contracts Overview

All contracts are deployed on the ** Mainnet**. They are upgradeable using the UUPS proxy pattern. The addresses listed below are the official **Proxy** addresses that the dApp interacts with.

                                                                                    |

## 📁 Project Structure

A brief overview of the key directories in this project:

-   `public/`: Contains static assets.
-   `src/components/`: Contains all React components.
    -   `ui/`: Auto-generated UI components from shadcn/ui.
    -   `Admin.tsx`, `Courses.tsx`, etc.: Feature-specific components.
-   `src/contract/`: The original Solidity smart contract source code.
-   `src/lib/`: Contains shared utilities, configuration files, and ABIs.
    -   `wagmi.ts`: Configuration for wallet connections and chains.
    -   `contracts.ts`: Deployed contract addresses and ABIs.
    -   `utils.ts`: Shared helper functions.
-   `src/pages/`: Contains the main page components that structure the application.

## 📜 Available Scripts

-   `npm run dev`: Starts the development server.
-   `npm run build`: Builds the application for production.
-   `npm run lint`: Lints the code for errors and style issues.
-   `npm run preview`: Previews the production build locally.
