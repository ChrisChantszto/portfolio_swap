import React from "react";
import { SwapWidget } from '@uniswap/widgets'
import '@uniswap/widgets/fonts.css'

function Swapv2() {

    const theme = {
        primary: '#5981F3',
        secondary: '#A9A9A9',
        interactive: '#A9A9A9',
        container: '#0E111B',
        module: '#222633',
        accent: '#A9A9A9',
        outline: 'transparent',
        dialog: '#243056',
        fontFamily: 'Segoe UI',
        borderRadius: 15,
    }

    return (
        <div className="Uniswap">
            <div className='widgetWrapper'>
                <SwapWidget theme={theme} brandedFooter={false} />
            </div>
        </div>
    )
}

export default Swapv2;