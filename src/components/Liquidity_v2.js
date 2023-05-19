import React, { useState, useEffect } from "react";
import { Input, Popover, Radio, Modal, message } from "antd";
import { usePrepareContractWrite, useContractWrite, useWaitForTransaction } from "wagmi";

import Banner from "./Banner";

function AddLiquidityv2(props) {
    const { address, isConnected } = props;
    const [tokenOneAmount, setTokenOneAmount] = useState('')

    const { config } = usePrepareContractWrite({
        address: '0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2',
        abi: [
            {
                name: "mint",
                type: "function",
                stateMutability: "nonpayable",
                inputs: [{ internalType: 'uint256', name: 'tokenId', type: 'uint256' }],
                outputs: [],
            },
        ],
        functionName: 'mint',
        args: [parseInt(tokenOneAmount)],
        enabled: Boolean(tokenOneAmount),
    })

    const { data, write } = useContractWrite(config)

    const { isLoading, isSuccess } = useWaitForTransaction({
        hash: data?.hash,
    })

    console.log('write:', write);

    useEffect(() => {
        console.log('data:', data);
    }, [data]);
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
                    <button className="swapButton" disabled={!write}>
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