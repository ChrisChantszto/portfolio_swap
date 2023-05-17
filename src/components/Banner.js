import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import banner1 from './images/banner1.png'
import banner2 from './images/banner2.png'

const Banner = () => {
    return (
      <Carousel
        showThumbs={false}
        showStatus={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={5000}
        showArrows={true}
        showIndicators={false}
      >
        {/* Slide 1 */}
        <div className='image-container'>
          <img src={banner1} alt="Banner 1" style={{ width: '468px', height: '190px', objectFit: 'cover' }} />
          <div className="carousel-caption">
            <h3 className='image-title'>Pepeswap earn your rewards through joining the pool</h3>
            <button href="your-link-1" className="discover-more-btn">
              Discover More
            </button>
          </div>
        </div>
  
        {/* Slide 2 */}
        <div className='image-container'>
          <img src={banner2} alt="Banner 2" style={{ width: '468px', height: '190px', objectFit: 'cover' }} />
          <div className="carousel-caption">
            <h3 className='image-title'>Pepeswap earn your rewards through joining the pool</h3>
            <button href="your-link-1" className="discover-more-btn">
              Discover More
            </button>
          </div>
        </div>
  
        {/* Add more slides as needed */}
      </Carousel>
    );
  };

  export default Banner