import React from 'react';

import FarmFilters from './Filter';

const Tokens = () => {
  const farms = [
    {
      name: 'CAKE-BNB LP',
      apy: '260%',
      earned: '0.2345',
      details: 'Provide liquidity for the CAKE-BNB pair.'
    },
    {
      name: 'USDT-BUSD LP',
      apy: '18%',
      earned: '1.23',
      details: 'Provide liquidity for the USDT-BUSD pair.'
    },
    {
      name: 'BTC-BNB LP',
      apy: '150%',
      earned: '0.75',
      details: 'Provide liquidity for the BTC-BNB pair.'
    },
    {
      name: 'ETH-BNB LP',
      apy: '220%',
      earned: '1.10',
      details: 'Provide liquidity for the ETH-BNB pair.'
    },
    {
      name: 'DOT-BNB LP',
      apy: '110%',
      earned: '0.55',
      details: 'Provide liquidity for the DOT-BNB pair.'
    },
    {
      name: 'ADA-BNB LP',
      apy: '130%',
      earned: '0.32',
      details: 'Provide liquidity for the ADA-BNB pair.'
    },
  ];

  return (
    <div className="farms">
      <h1>Farms</h1>
      <FarmFilters />
      <div className="farm-cards">
        {farms.map(farm => (
          <div className="farm-card">
            <div className="farm-card-top">
              <p>{farm.name}</p>
              <div className="farm-card-top-right">
                <div className="farm-apy">
                  <p>APY</p>
                  <p>{farm.apy}</p>
                </div>
                <div className="farm-earned">
                  <p>CAKE</p>
                  <p>{farm.earned}</p>
                </div>
              </div>
            </div>
            <p className="farm-details">{farm.details}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tokens;