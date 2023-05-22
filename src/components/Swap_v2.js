import React from "react";
import { SwapWidget } from '@uniswap/widgets'
import '@uniswap/widgets/fonts.css'

function Swapv2() {

    const theme = {
        primary: '#FFF',
        secondary: '#A9A9A9',
        interactive: '#4E4E5A',
        container: '#0E111B',
        module: '#222633',
        accent: 'transparent',
        outline: 'transparent',
        dialog: '#000',
        fontFamily: 'Segoe UI',
        borderRadius: 15,
    }

    return (
        <div className="Uniswap">
            <div className='widgetWrapper'>
                <SwapWidget theme={theme} />
                <div className='coverUniswapText'></div> {/* Add the overlay element */}
            </div>
        </div>
    )
}

export default Swapv2;