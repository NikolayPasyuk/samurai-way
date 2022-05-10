import React from 'react';
import s from './Header.module.css'
import {NavLink} from 'react-router-dom';

type HeaderType = {
    login: string,
    isAuth: boolean
    logout: () => void
}


const Header = (props: HeaderType) => {
    return <header className={s.header}>
        <img
            src="https://images.fastcompany.net/image/upload/w_1280,f_auto,q_auto,fl_lossy/w_596,c_limit,q_auto:best,f_auto/fc/3034007-inline-i-applelogo.jpg"/>
        <div className={s.loginBlock}>
            {props.isAuth
                ? <div>{props.login} - <button onClick={props.logout}>Log out</button></div>
                : <NavLink to={'/login'}>Login</NavLink>}
        </div>
    </header>
}

export default Header