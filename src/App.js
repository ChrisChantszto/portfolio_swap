import "./App.css";

import Header from "./components/Header";

import Swap from "./components/Swap";
import Swapv2 from "./components/Swap_v2";

import Tokens from "./components/Tokens";
import { Routes, Route } from "react-router-dom";

import { useConnect, useAccount } from "wagmi";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";

import AddLiquidityv2 from "./components/Liquidity_v2";
import AddLiquidityv3 from "./components/Liquidity_v3";

import PoolAdd from "./components/PoolAdd";
import PoolAddv2 from "./components/PoolAdd_v2";

import Footer from "./components/Footer";
import ChatBox from './components/ChatBox';

import ImageRight from "./components/ImageRight";

import TopTenCryptos from "./components/Tokenlist";

import Firstpage from "./components/Firstpage";

import TermsOfService from "./components/Termsofservice";

function App() {
  const { address, isConnected } = useAccount();
  const { connect } = useConnect({
    connector: new MetaMaskConnector(),
  });
  return (
    <div className="App">
      <Header connect={connect} isConnected={isConnected} address={address} />
      <div className="contentWrapper">
        <div className="mainWindow">
          <Routes>
            <Route path="/" element={<Firstpage isConnected={isConnected} address={address} />} />
            <Route path="/swap" element={<Swapv2 isConnected={isConnected} address={address} />} />
            <Route path="/tokens" element={<Tokens isConnected={isConnected} address={address} />} />
            <Route path="/liquiditytest" element={<AddLiquidityv3 isConnected={isConnected} address={address} />} />
            <Route path="/list" element={<TopTenCryptos isConnected={isConnected} address={address} />} />
            <Route path="/liquidity" element={<PoolAddv2 isConnected={isConnected} address={address} />} />
            <Route path="/terms-of-service" element={<TermsOfService isConnected={isConnected} address={address} />} />
          </Routes>
        </div>
      </div>
      <Footer />
      <ChatBox />
      <ImageRight />
    </div>
  )
}

export default App;