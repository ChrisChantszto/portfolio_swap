import React from 'react';
import construction from './images/construction.gif';
import './Maintenance.css';

const Maintenance = () => {
  return (
    <div>
      <h1>Not Found</h1>
      <br />
      <h2>Under Maintenance</h2>
      <br />
      <img src={construction} alt="no" />
    </div>
  );
};

export default Maintenance;