import React from 'react';
import './ImageRight.css';
import pepe_right from '../pepe_right.png';

const ImageRight = () => {
  return (
    <div className="image-right">
      <img src={pepe_right} alt="Your Image Description" />
    </div>
  );
};

export default ImageRight;