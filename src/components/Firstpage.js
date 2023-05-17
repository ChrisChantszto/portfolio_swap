import React from 'react';
import './Firstpage.css';
import Banner from './Banner';

import pepe1 from './images/pepe1.png';

import pepe2 from './images/pepe2.jpg';

import pepe_coin from '../Pepe_Coin.gif';

import pepe_gif from './images/new_pepe_drink.gif';

import { motion } from 'framer-motion';

const Firstpage = () => {

    const topFarms = [
        {
            name: 'unshETH-USH LP v3',
            apr: '178.292%',
        },
        {
            name: 'SQUAD-CAKE LP',
            apr: '131.691%',
        },
        {
            name: 'REVV-EDU LP v3',
            apr: '122.663%',
        },
        {
            name: 'unshETH-USDT LP v3',
            apr: '92.866%',
        },
        {
            name: 'LVL-BNB LP',
            apr: '90.021%',
        },
    ];

    const topFarmsVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    };


    const bannerVariants = {
        hidden: { opacity: 0, y: -100 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    };

    const imgVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
    };

    return (
        <>
            <div className="swapWrapper">
                <motion.custom
                    as={Banner}
                    initial="hidden"
                    animate="visible"
                    variants={bannerVariants}
                />
            </div>
            <div className="landing-page">
                <section className="section">
                    <div className="section-text">
                        <h2>Welcome to Our Platform</h2>
                        <p>Discover the best token farms and earn amazing rewards by providing liquidity to your favorite pairs.</p>
                    </div>
                    <div className="section-image">
                        <motion.img
                            src={pepe1}
                            alt="Image 1"
                            initial="hidden"
                            animate="visible"
                            variants={imgVariants}
                        />
                    </div>
                </section>
                <section className="section reverse">
                    <div className="section-text">
                        <h2>Why Choose Us</h2>
                        <p>Our platform offers the most competitive APYs and a user-friendly interface, making it easy for you to maximize your earnings.</p>
                    </div>
                    <div className="section-image">
                        <motion.img
                            src={pepe2}
                            alt="image 2"
                            initial="hidden"
                            animate="visible"
                            variants={imgVariants}
                        />
                    </div>
                </section>
                <section className="section info-section">
                    <div className="info-header">
                        <img src={pepe_coin} alt="Icon" className="icon" />
                        <h2>Used by millions.</h2>
                        <h2>Trusted with billions.</h2>
                        <p>PancakeSwap has the most users of any decentralized platform, ever.</p>
                        <p>And those users are now entrusting the platform with over $2.2 billion in funds.</p>
                        <p>Will you join them?</p>
                    </div>
                    <div className="info-content">
                        <div className="info-box">
                            <h3>1.6 million</h3>
                            <p>users</p>
                            <p>in the last 30 days</p>
                        </div>
                        <div className="info-box">
                            <h3>21 million</h3>
                            <p>trades</p>
                            <p>made in the last 30 days</p>
                        </div>
                        <div className="info-box">
                            <h3>$2.2 billion</h3>
                            <p>staked</p>
                            <p>Total Value Locked</p>
                        </div>
                    </div>
                </section>
                <section className="section passive-income-section">
                    <div className="content-wrapper">
                        <div className="left-side">
                            <img src={pepe_gif} alt="pepe gif" style={{
                                width: '79%',
                                height: 'auto',
                            }} />
                        </div>
                        <div className="right-side">
                            <h2>Earn passive income with crypto.</h2>
                            <p>PancakeSwap makes it easy to make your crypto work for you.</p>
                            <button className="explore-btn">Explore</button>
                        </div>
                    </div>
                    <br />
                    <h3>Top Farms</h3>
                    <div className="top-farms">
                        <motion.div
                            className="top-farms"
                            initial="hidden"
                            animate="visible"
                            variants={topFarmsVariants}
                        >
                            {topFarms.map((farm, index) => (
                                <div key={index} className="top-farm">
                                    <h4>{farm.name}</h4>
                                    <p>{farm.apr}</p>
                                    <p>APR</p>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default Firstpage;