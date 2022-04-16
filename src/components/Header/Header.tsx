import React from 'react';
import s from './Header.module.css'

const Header = () => {
    return <header className={s.header}>
        <img
            src="https://images.fastcompany.net/image/upload/w_1280,f_auto,q_auto,fl_lossy/w_596,c_limit,q_auto:best,f_auto/fc/3034007-inline-i-applelogo.jpg"/>

        <div className={s.loginBlock}></div>
    </header>
}

export default Header