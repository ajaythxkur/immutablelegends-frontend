"use client";

import React, { useEffect, useState } from "react";
import { WalletSelector } from "@aptos-labs/wallet-adapter-ant-design";
import "@aptos-labs/wallet-adapter-ant-design/dist/index.css";
import { Aptos, AptosConfig, InputViewRequestData, Network } from "@aptos-labs/ts-sdk";
import { InputTransactionData, useWallet } from "@aptos-labs/wallet-adapter-react";
type LockData = {
    total_locked: number,
    num_locked: number, //locked by user
    num_users_locked: number, //number of users locked
}
export default function Locking() {
    const LOCK_CONTRACT_ADDRESS = process.env.LOCK_CONTRACT_ADDRESS?.toString();
    const CREATOR_ADDRESS = process.env.CREATOR_ADDRESS?.toString();
    const TOTAL_NFTS = 1212;
    const COLLECTION_NAME = "Immutable Legends"

    const aptosConfig = new AptosConfig({ network: Network.DEVNET });
    const aptos = new Aptos(aptosConfig);

    const { account, signAndSubmitTransaction } = useWallet();

    const [NFTs, setNFTs] = useState<any[]>([])
    const [nftsToLock, setNftsToLock] = useState<string[]>([]);
    const [transactionInProgress, setTransactionInProgress] = useState<boolean>(false);

    const [viewData, setViewData] = useState<LockData>({
        total_locked: 0,
        num_locked: 0,
        num_users_locked: 0
    })
    const fetchNft = async () => {
        if (!account) return;
        setTransactionInProgress(true)
        try {
            const ownedToken = await aptos.getOwnedDigitalAssets({ ownerAddress: account.address });
            if (ownedToken.length == 0) return;
            const nftsToLock = ownedToken.filter((token) => token.current_token_data?.current_collection?.collection_name == COLLECTION_NAME)
            setNFTs(nftsToLock)
        } catch (error: any) {
            setNFTs([])
            console.log("error: ", error);
        } finally {
            setTransactionInProgress(false)
        }

    }
    const onMintClick = async () => {
        if (!account) return;
        const randomString = `Immutable Legends #${(Math.floor(Math.random() * 2000) + 1).toString()}`;
        const transaction: InputTransactionData = {
            data: {
                function: `${CREATOR_ADDRESS}::test_nft::mint`,
                functionArguments: [randomString],
            }
        };
        try {
            const response = await signAndSubmitTransaction(transaction);
            await aptos.waitForTransaction({ transactionHash: response.hash })
            fetchNft()
        } catch (error: any) {
            console.log("error: ", error)
        }
    }

    const onNFTLock = async () => {
        if (!account) return;
        const argument = nftsToLock;
        const transaction: InputTransactionData = {
            data: {
                function: `${LOCK_CONTRACT_ADDRESS}::nft_lockup::lockup_nfts`,
                functionArguments: [argument],
            },
        };
        try {
            const response = await signAndSubmitTransaction(transaction);
            await aptos.waitForTransaction({ transactionHash: response.hash })
            setNFTs((prev) => prev.filter((token) => !nftsToLock.includes(token?.current_token_data?.token_name)));
            setNftsToLock([])
        } catch (error: any) {
            console.log("error: ", error)
        }
    }
    const nftLockSelect = (token: string) => {
        setNftsToLock((prev) => {
            const nfts = [...prev];
            if (nfts.includes(token)) {
                return nfts.filter((nftName) => nftName != token)
            }
            nfts.push(token)
            return nfts;
        })
    }

    const fetchViewFunction = async () => {
        const modules = await aptos.getAccountModules({ accountAddress: LOCK_CONTRACT_ADDRESS! });
        const moduleExists = modules.some((v) => v.abi?.name == "nft_lockup")
        if (!moduleExists) return;
        const viewFnData: LockData = {
            total_locked: 0,
            num_locked: 0,
            num_users_locked: 0
        }
        const totalLockedTxn: InputViewRequestData = {
            function: `${LOCK_CONTRACT_ADDRESS}::nft_lockup::total_locked`,
            functionArguments: [],
        }
        const usersLockedTxn: InputViewRequestData = {
            function: `${LOCK_CONTRACT_ADDRESS}::nft_lockup::num_users_locked`,
            functionArguments: [],
        }
        if (account) {
            const userLockedTxn: InputViewRequestData = {
                function: `${LOCK_CONTRACT_ADDRESS}::nft_lockup::num_locked`,
                functionArguments: [account?.address],
            };
            const num_locked = await aptos.view({ payload: userLockedTxn });
            viewFnData.num_locked = Number(num_locked.at(0));
        }
        const total_locked = await aptos.view({ payload: totalLockedTxn });
        viewFnData.total_locked = Number(total_locked.at(0));
        const num_users_locked = await aptos.view({ payload: usersLockedTxn });
        viewFnData.num_users_locked = Number(num_users_locked.at(0));
        setViewData(viewFnData);
    }
    useEffect(() => {
        fetchNft()
        fetchViewFunction()
    }, [account?.address])
    return (
        <React.Fragment>
            <section className="staking">
                <div className="container">
                    <div className="main-staking">
                        <h2>Lock you LEGENDS</h2>
                        <h6>Lock and Burn your Legend to earn new <b>LEGEND</b> with multiple utilities</h6>

                        <WalletSelector />
                        <button className="btn" type="button" onClick={onMintClick}>
                            <strong>Test NFT Mint</strong>
                            <div id="container-stars">
                                <div id="stars"></div>
                            </div>

                            <div id="glow">
                                <div className="circle"></div>
                                <div className="circle"></div>
                            </div>
                        </button>
                    </div>

                    <main className="main flow">
                        <h1 className="main__heading"></h1>
                        <div className="main__cards cards">
                            <div className="cards__inner">
                                <div className="cards__card card">
                                    <ul>
                                        <li>No. of Legends Locked
                                        </li>
                                    </ul>
                                    <h2>{viewData.total_locked}</h2>
                                </div>

                                <div className="cards__card card">
                                    <ul>
                                        <li>No. of Users</li>
                                    </ul>
                                    <h2>{viewData.num_users_locked}</h2>
                                </div>

                                <div className="cards__card card">
                                    <ul>
                                        <li>Your NFTs Locked</li>
                                    </ul>
                                    <h2>{viewData.num_locked}</h2>
                                </div>

                                <div className="cards__card card">
                                    <ul>
                                        <li>% of Legends Locked</li>
                                    </ul>
                                    <h2>{Math.floor((viewData.total_locked / TOTAL_NFTS) * 100)}%</h2>
                                </div>
                            </div>

                            <div className="overlay cards__inner"></div>
                        </div>
                    </main>
                </div>
            </section>
            {
                NFTs.length > 0 &&
                <section className="nft-show">
                    <div className="container">
                        {
                            NFTs.map((tokendata, index) => (
                                <div className="card" key={index}>
                                    <div className="card-img">

                                    </div>
                                    <div className="card-textContent" >
                                        <h3>{tokendata?.current_token_data?.token_name}</h3>
                                        <div className="card-btn">
                                            <button className="button" onClick={() => nftLockSelect(tokendata?.current_token_data?.token_name)}>
                                                {nftsToLock.includes(tokendata?.current_token_data?.token_name) ? 'Remove NFT' : 'Add NFT'}
                                            </button>
                                        </div>
                                    </div>

                                </div>

                            ))
                        }
                    </div>
                    <button className="button" data-bs-toggle="modal" data-bs-target="#lock-nft-modal">Confirm NFT Locking</button>
                </section>

            }
            <div className="modal fade" id="lock-nft-modal" tabIndex={-1} aria-labelledby="lockNftModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">

                        <div className="modal-body">
                            <div className="cookiesContent" id="cookiesPopup">
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                <img src="https://cdn-icons-png.flaticon.com/512/1047/1047711.png" alt="cookies-img" />
                                <p>We use cookies for improving user experience, analytics and marketing.</p>
                                <button className="accept" onClick={() => onNFTLock()}>Confirm Locking!</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}