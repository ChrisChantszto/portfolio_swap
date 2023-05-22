import React from "react";

import { useContract, useProvider } from "wagmi";
import IUniswapV3PoolArtifact from '@uniswap/v3-core/artifacts/contracts/interfaces/IUniswapV3Pool.sol/IUniswapV3Pool.json';

// WETH - UNI pool with 0.3% fee
const POOL_ADDRESS = '0x07A4f63f643fE39261140DF5E613b9469eccEC86';

