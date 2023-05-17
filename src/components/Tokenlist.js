import React from 'react';
import "../App.css"

const TopTenCryptos = () => {
  const cryptos = [
    { rank: 1, name: 'Bitcoin', symbol: 'BTC', marketCap: '$1,000,000,000', price: '$50,000', change: '2.5%', priceChangeDirection: 'increase' },
    { rank: 2, name: 'Ethereum', symbol: 'ETH', marketCap: '$400,000,000', price: '$3,000', change: '1.8%', priceChangeDirection: 'increase' },
    { rank: 3, name: 'Binance Coin', symbol: 'BNB', marketCap: '$60,000,000', price: '$500', change: '0.5%', priceChangeDirection: 'increase' },
    { rank: 4, name: 'Cardano', symbol: 'ADA', marketCap: '$40,000,000', price: '$2.00', change: '3.1%', priceChangeDirection: 'increase' },
    { rank: 5, name: 'Solana', symbol: 'SOL', marketCap: '$35,000,000', price: '$100', change: '7.2%', priceChangeDirection: 'increase' },
    { rank: 6, name: 'XRP', symbol: 'XRP', marketCap: '$30,000,000', price: '$1.00', change: '-0.5%', priceChangeDirection: 'decrease' },
    { rank: 7, name: 'Polkadot', symbol: 'DOT', marketCap: '$25,000,000', price: '$20', change: '1.0%', priceChangeDirection: 'increase' },
    { rank: 8, name: 'Dogecoin', symbol: 'DOGE', marketCap: '$20,000,000', price: '$0.10', change: '0.3%', priceChangeDirection: 'increase' },
    { rank: 9, name: 'Chainlink', symbol: 'LINK', marketCap: '$15,000,000', price: '$30', change: '2.9%', priceChangeDirection: 'increase' },
    { rank: 10, name: 'Uniswap', symbol: 'UNI', marketCap: '$10,000,000', price: '$25', change: '-1.5%', priceChangeDirection: 'decrease' },
  ];

  return (
    <div className="mainWindow">
      <table>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Symbol</th>
            <th>Market Cap</th>
            <th>Price</th>
            <th>24h Change</th>
          </tr>
        </thead>
        <tbody>
          {cryptos.map((crypto) => (
            <tr key={crypto.rank}>
              <td>{crypto.rank}</td>
              <td>{crypto.name}</td>
              <td>{crypto.symbol}</td>
              <td>{crypto.marketCap}</td>
              <td>{crypto.price}</td>
              <td className={crypto.priceChangeDirection === 'increase' ? 'price-increase' : 'price-decrease'}>
                {crypto.change}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TopTenCryptos;