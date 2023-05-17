import React, { useState, useEffect } from "react";
import { Input, Popover, Radio, Modal, message } from "antd";
import { usePrepareContractWrite, useContractWrite, useWaitForTransaction } from "wagmi";

import Banner from "./Banner";

function AddLiquidityv2(props) {
    const { address, isConnected } = props;
    const [tokenOneAmount, setTokenOneAmount] = useState('')

    const { config } = usePrepareContractWrite({
        address: '0x5fbdb2315678afecb367f032d93f642f64180aa3',
        abi: [
            {
                name: "addLiquidity",
                type: "function",
                stateMutability: "payable",
                inputs: [
                    {
                        internalType: "uint256",
                        name: "_tokenAmount",
                        type: "uint256"
                    }
                ],
                outputs: [],
            }
        ],
        functionName: 'addLiquidity',
        args: [parseInt(tokenOneAmount) || 0], // Pass _tokenAmount input from user
        enabled: Boolean(tokenOneAmount),
    })

    const { data, write } = useContractWrite(config)

    const { isLoading, isSuccess } = useWaitForTransaction({
        hash: data?.hash,
    })

    return (
        <>
            <div className="swapWrapper">
                <Banner />
            </div>
            <form
                onSubmit={(e) => {
                    e.preventDefault()
                    write?.()
                }}
            >
                <div className="tradeBox">
                    <div className="tradeBoxHeader">
                        <h4>Add Liquidity</h4>
                    </div>
                    <div className="inputs">
                        <Input
                            placeholder="0"
                            onChange={(e) => setTokenOneAmount(e.target.value)}
                            value={tokenOneAmount}
                        />
                    </div>
                    <button className="swapButton" disabled={!write || isLoading}>
                        {isLoading ? 'Loading...' : 'Add Liquidity'}
                    </button>
                    {isSuccess && (
                        <div>
                            Successfully minted your NFT!
                            <div>
                                <a href={`https://etherscan.io/tx/${data?.hash}`}>Etherscan</a>
                            </div>
                        </div>
                    )}
                </div>
            </form>
        </>
    );
}

export default AddLiquidityv2;