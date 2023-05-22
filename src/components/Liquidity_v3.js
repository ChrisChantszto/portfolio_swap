import React from "react";
import { usePrepareContractWrite, useContractWrite, useWaitForTransaction } from "wagmi";



import Banner from "./Banner";


function AddLiquidityv3() {

    console.log("AddLiquidityv3 component rendered")

    const { config } = usePrepareContractWrite({
        address: '0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2',
        abi: [
            {
                name: 'mint',
                type: 'function',
                stateMutability: 'nonpayable',
                inputs: [],
                outputs: [],
            },
        ],
        functionName: 'mint',
    })

    const { data, write } = useContractWrite(config)

    const { isLoading, isSuccess } = useWaitForTransaction({
        hash: data?.hash,
    })

    const handleClick = (e) => {
        e.preventDefault();
        console.log("Button clicked");
        write?.();
        console.log("write: ", write)
    };

    const testingClick = (e) => {
        e.preventDefault();
        console.log("testing clicked")
    }

    return (
        <div>
            <div className="swapWrapper">
                <Banner />
            </div>
            <div className="tradeBoxLiquid">
                <div className="tradeBoxHeader">
                    <h4>
                        Add Random Liquidity{" "}
                        <span
                            style={{
                                backgroundColor: "red",
                                color: "white",
                                borderRadius: "4px",
                                padding: "2px 4px",
                                marginLeft: "130px",
                            }}
                        >
                            beta
                        </span>
                    </h4>
                </div>
                <button className="swapButton"
                    // disabled={!write || isLoading}
                    onClick={handleClick}
                >
                    {isLoading ? 'Its loading...' : 'Add random liquidity'}
                </button>
                {isSuccess && (
                    <div>
                        Successfully added liquidity
                        <div>
                            <a href={`https://etherscan.io/tx/${data?.hash}`}>Etherscan</a>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )

}

export default AddLiquidityv3;