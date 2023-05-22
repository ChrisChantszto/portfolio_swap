import React, { useState, useEffect } from "react";
import { usePrepareContractWrite, useContractWrite, useWaitForTransaction } from "wagmi";

import { Contract, ethers } from "ethers";

const PoolAdd = ({ address, isConnected }) => {
    const [tokenAddress, setTokenAddress] = useState("0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48");
    const [tokenAmount, setTokenAmount] = useState(0);
    const [slippageTolerance, setSlippageTolerance] = useState("");

    const [amountTokenMin, setAmountTokenMin] = useState(0);
    const [amountETHMin, setAmountETHMin] = useState(0);
    const [receipientAddress, setReceipientAddress] = useState("0x...");
    const [deadline, setDeadline] = useState(Math.floor(Date.now() / 1000 + 60 * 60));

    const uniswapContractAddress = '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D';

    const { data, write } = useContractWrite({
        // network: 'goerli',
        address: '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D', // ethers.utils.getAddress(uniswapContractAddress),
        abi: [
            {
                name: "addLiquidityETH",
                type: "function",
                stateMutability: "payable",
                inputs: [
                    {
                        "internalType": "address",
                        "name": "token",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "amountTokenDesired",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "amountTokenMin",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "amountETHMin",
                        "type": "uint256"
                    },
                    {
                        "internalType": "address",
                        "name": "to",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "deadline",
                        "type": "uint256"
                    }
                ],
                outputs: [
                    {
                        "internalType": "uint256",
                        "name": "amountToken",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "amountETH",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "liquidity",
                        "type": "uint256"
                    }
                ],
            },
        ],
        functionName: 'addLiquidityETH',
        args: [
            tokenAddress,
            tokenAmount,
            amountTokenMin,
            amountETHMin,
            receipientAddress,
            deadline
        ],
        overrides: { value: ethers.utils.parseEther("1"), gasLimit: ethers.utils.hexlify(150000) },
    })

    // console.log('config', config)
    console.log('isConnected:', isConnected);

    // const { data, write } = useContractWrite(config)

    // const { isLoading, isSuccess } = useWaitForTransaction({
    //     hash: data?.hash,
    // });

    // useEffect(() => {
    //     console.log("data:", data);
    // }, [data]);

    const handleSubmit = (e) => {
        console.log("Submit called")
        e.preventDefault();
        write?.();
        console.log("write: ", write)
        console.log("data: ", data)
    };

    useEffect(() => {
        if (tokenAmount && slippageTolerance) {
            const slippageFactor = 1 - (slippageTolerance / 100);
            setAmountTokenMin(tokenAmount * slippageFactor);
            setAmountETHMin(tokenAmount * slippageFactor); // Assuming a 1:1 ratio for simplicity
        }
    }, [tokenAmount, slippageTolerance]);

    const { isLoading, isSuccess } = useWaitForTransaction({
        hash: data?.hash,
    });

    useEffect(() => {
        if (isLoading) {
            console.log("Transaction is being processed...");
        }
    
        if (isSuccess) {
            console.log("Transaction was successful!");
        }
    }, [isLoading, isSuccess]);

    console.log('tokenAddress:', tokenAddress)
    console.log('tokenAmount:', tokenAmount)
    console.log('amountETHMin:', amountETHMin)
    console.log('recipientAddress:', receipientAddress)
    console.log('deadline:', deadline)

    return (
        <div>
            <p>Connected to wallet: {address}</p>
            <form onSubmit={handleSubmit}>
                {/* Add input fields for tokenAddress, tokenAmount, and slippageTolerance, similar to the existing input fields */}
                <input
                    value={tokenAddress}
                    onChange={(e) => setTokenAddress(e.target.value)}
                    placeholder="token address"
                />
                {/* <input
                    value={slippageTolerance}
                    onChange={(e) => setSlippageTolerance(e.target.value)}
                    placeholder="Slippage Tolerance (%)"
                /> */}
                <input
                    value={tokenAmount}
                    onChange={(e) => setTokenAmount(e.target.value)}
                    placeholder="token amount"
                />
                <input
                    value={amountTokenMin}
                    onChange={(e) => setAmountTokenMin(e.target.value)}
                    placeholder="Amount Token Min"
                />
                <input
                    value={amountETHMin}
                    onChange={(e) => setAmountETHMin(e.target.value)}
                    placeholder="Amount ETH Min"
                />
                <input
                    value={receipientAddress}
                    onChange={(e) => setReceipientAddress(e.target.value)}
                    placeholder="Recipient Address"
                />
                <input
                    value={deadline}
                    onChange={(e) => setDeadline(e.target.value)}
                    placeholder="Deadline (Unix Timestamp)"
                />
                <button>Add Liquidity</button>
            </form>
        </div>
    );
};

export default PoolAdd;