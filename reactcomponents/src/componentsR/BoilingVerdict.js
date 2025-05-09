import React from 'react';

const BoilingVerdict = ({ celcious = 0 }) => {

    if(celcious>=100){
        return <p>Water is boiled</p>
    }
    return <p>Water is not boiled</p>
}

export default BoilingVerdict;
