import React from 'react'
import Eth from "../eth.svg";
import Pepe_Coin from "../Pepe_Coin.gif"


import { Link } from "react-router-dom";

function Header(props) {

  const { address, isConnected, connect } = props;

  return (
    <header>
      <div className="leftH">
        <Link to="/" className="link">
          <img src={Pepe_Coin} alt="logo" className="logo" />
        </Link>
        <Link to="/" className="link">
          <div className="headerItem">Home</div>
        </Link>
        <Link to="/swap" className="link">
          <div className="headerItem">Swap</div>
        </Link>
        <Link to="/tokens" className="link">
          <div className="headerItem">Tokens</div>
        </Link>
        <Link to="/liquidity" className="link">
          <div className="headerItem">Liquidity</div>
        </Link>
        <Link to="" className="link">
          <div className="headerItem" style={{ position: "relative" }}>
            AI coin
            <span
              style={{
                position: "absolute",
                top: -9,
                right: -39,
                fontSize: 10,
                background: "red",
                color: "white",
                borderRadius: 5,
                padding: "2px 5px",
                zIndex: 2,
              }}
            >
              Coming Soon
            </span>
          </div>
        </Link>
        <Link to="" className="link">
          <div className="headerItem" style={{ position: "relative" }}>
            FOMO game
            <span
              style={{
                position: "absolute",
                top: -9,
                right: -15,
                fontSize: 10,
                background: "red",
                color: "white",
                borderRadius: 5,
                padding: "2px 5px",
                zIndex: 2,
              }}
            >
              Coming Soon
            </span>
          </div>
        </Link>
        <Link to="" className="link">
          <div className="headerItem" style={{ position: "relative" }}>
            BRC 20
            <span
              style={{
                position: "absolute",
                top: -9,
                right: -38,
                fontSize: 10,
                background: "red",
                color: "white",
                borderRadius: 5,
                padding: "2px 5px",
                zIndex: 2,
              }}
            >
              Coming Soon
            </span>
          </div>
        </Link>
      </div>
      <div className="rightH">
        <div className="headerItem">
          <img src={Eth} alt="eth" className="eth" />
          Ethereum
        </div>
        <div className="connectButton" onClick={connect}>
          {isConnected ? (address.slice(0, 4) + "..." + address.slice(38)) : "Connect"}
        </div>
      </div>
    </header>
  );
}

export default Header