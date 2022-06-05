import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Navbar.module.css';
import cn from 'classnames';

function Navbar() {
    return <nav className={s.nav}>
        <div className={s.nav_section}>
            <NavLink className={s.item} to="/profile" activeClassName={s.active}>Profile</NavLink>
            <NavLink className={s.item} to="/dialogs" activeClassName={s.active}>Messages</NavLink>
            <NavLink className={s.item} to="/users" activeClassName={s.active}>Users</NavLink>
            <NavLink className={s.item} activeClassName={s.active} to="/music">Music</NavLink>
                <NavLink className={cn(s.item, s.margin)} activeClassName={s.active}
                         to="/settings">Settings</NavLink>
        </div>
    </nav>
}


export default Navbar