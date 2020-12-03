import React from 'react';

//IMAGES
import Outer from '../Images/one.svg';
import Inner from '../Images/two.svg';

export const Shutter = () => (

    <div>
        <div className="outer" style={{backgroundImage: `url(${Outer})`}}></div>
        <div className="inner" style={{backgroundImage: `url(${Inner})`}}></div>
    </div>

)
export default Shutter;