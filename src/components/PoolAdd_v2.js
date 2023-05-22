import { useState, useEffect } from 'react'

import { ethers } from 'ethers';
import contractABI from './contractABI.json'; // Replace this with the path to your ABI file

import { Input, Select } from "antd";
import tokenList from '../tokenList.json';

// import { ChainId, Token, WETH, Fetcher, Route } from '@uniswap/sdk';

// const chainId = ChainId.MAINNET;

function PoolAddv2({ isConnected, address }) {
    // Define the contract address
    const contractAddress = '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D';

    // Connect to the Ethereum network using ethers.js
    const provider = new ethers.providers.Web3Provider(window.ethereum);

    // Create a contract instance
    const contract = new ethers.Contract(contractAddress, contractABI, provider);

    const [tokenAmountDesiredInput, setTokenAmountDesiredInput] = useState('');
    const [tokenAmountMinInput, setTokenAmountMinInput] = useState('');
    const [ethAmountMinInput, setEthAmountMinInput] = useState('');
    const [tokenAddress, setTokenAddress] = useState(''); // Add state for tokenAddress

    const [warningMessage, setWarningMessage] = useState('');

    // const fetchTokenETHExchangeRate = async (tokenAddress) => {
    //     if (tokenAddress === '') {
    //         return;
    //     }

    //     const token = new Token(chainId, tokenAddress, 18);
    //     const pair = await Fetcher.fetchPairData(token, WETH[chainId]);
    //     const route = new Route([pair], WETH[chainId]);

    //     // Update the exchange rate when the token address changes
    //     updateETHAmountMin(route);
    // };

    // const updateETHAmountMin = (route) => {
    //     if (!route || tokenAmountDesiredInput === '') {
    //         return;
    //     }

    //     const tokenAmountDesired = ethers.utils.parseUnits(tokenAmountDesiredInput, 18);
    //     const ethAmount = route.quote(tokenAmountDesired);
    //     const ethAmountFormatted = ethers.utils.formatUnits(ethAmount, 18);

    //     setEthAmountMinInput(ethAmountFormatted);
    // };

    // useEffect(() => {
    //     fetchTokenETHExchangeRate(tokenAddress);
    // }, [tokenAddress]);

    // useEffect(() => {
    //     if (tokenAddress === '') {
    //         return;
    //     }

    //     (async () => {
    //         const token = new Token(chainId, tokenAddress, 18);
    //         const pair = await Fetcher.fetchPairData(token, WETH[chainId]);
    //         const route = new Route([pair], WETH[chainId]);
    //         updateETHAmountMin(route);
    //     })();
    // }, [tokenAmountDesiredInput]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (
            tokenAmountDesiredInput === '' ||
            tokenAmountMinInput === '' ||
            ethAmountMinInput === '' ||
            tokenAddress === ''
        ) {
            setWarningMessage('Please fill in all input fields.');
            return;
        }
        try {
            const signer = provider.getSigner();
            const contractWithSigner = contract.connect(signer);

            const tokenAmountDesired = ethers.utils.parseUnits(tokenAmountDesiredInput, 18);
            const tokenAmountMin = ethers.utils.parseUnits(tokenAmountMinInput, 18);
            const ethAmountMin = ethers.utils.parseUnits(ethAmountMinInput, 18);
            const deadline = Math.floor(Date.now() / 1000) + 60 * 20;

            const txResponse = await contractWithSigner.addLiquidityETH(
                tokenAddress,
                tokenAmountDesired,
                tokenAmountMin,
                ethAmountMin,
                signer.getAddress(),
                deadline,
                { value: ethAmountMin, gasLimit: ethers.utils.hexlify(150000) }
            );

            console.log('Transaction Response:', txResponse);
        } catch (error) {
            console.error('Error while submitting:', error);
        }
    };

    const handleTokenSelect = (value) => {
        setTokenAddress(value);
    };

    return (
        <div className='tradeBoxLiquid'>
            <div className="tradeBoxHeader">
                <h4>
                    Add Liquidity
                </h4>
            </div>
            <p>Connected to wallet: {address}</p>
            <form onSubmit={handleSubmit}>
                <div className='inputs'>
                    <label>
                        <Select
                            style={{ width: '100%' }}
                            placeholder="Select a token"
                            optionFilterProp="children"
                            onChange={handleTokenSelect}
                            filterOption={(input, option) =>
                                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                            }
                        >
                            {tokenList.map((token, index) => (
                                <Select.Option key={index} value={token.address}>
                                    <img src={token.img} alt={token.ticker} style={{ width: '20px', marginRight: '8px' }} />
                                    {token.ticker} - {token.name}
                                </Select.Option>
                            ))}
                        </Select>
                    </label>
                </div>
                <br />
                <div className="inputs" style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div style={{ width: '48%' }}>
                        <label>
                            <Input
                                type="text"
                                value={tokenAmountDesiredInput}
                                onChange={(e) => setTokenAmountDesiredInput(e.target.value)}
                                placeholder="Token Amount Desired"
                                className='smallPlaceholder'
                            />
                        </label>
                    </div>
                    <div style={{ width: '48%' }}>
                        <label>
                            <Input
                                type="text"
                                value={tokenAmountMinInput}
                                onChange={(e) => setTokenAmountMinInput(e.target.value)}
                                placeholder="Token Amount Min"
                                className='smallPlaceholder'
                            />
                        </label>
                    </div>
                </div>
                <br />
                <div className="inputs">
                    <label>
                        <Input
                            type="text"
                            value={ethAmountMinInput}
                            onChange={(e) => setEthAmountMinInput(e.target.value)}
                            placeholder="ETH Amount Min"
                            className='smallPlaceholder'
                        />
                    </label>
                </div>
                <br />
                <button className="swapButton">Add Liquidity</button>
            </form >
            {warningMessage && <p style={{ color: 'red' }}>{warningMessage}</p>}
        </div >
    )

}

export default PoolAddv2;