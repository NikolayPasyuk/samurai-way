import React from 'react';
import preloader from '../../../assets/images/loading-1.gif';

export const Preloader = () => {
    return <div style={{backgroundColor: 'white'}}>
        <img src={preloader}/>
    </div>
};
