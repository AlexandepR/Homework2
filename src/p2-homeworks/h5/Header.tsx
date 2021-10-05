import React from 'react'
import {NavLink} from 'react-router-dom'
import s from './pages/hm5.module.css'
import {PATH} from "./Routes";


function Header() {
    return (
        <div >
            <div className={s.headerNavbar}>
                <NavLink to={PATH.PRE_JUNIOR}activeClassName={s.activeNav} className={s.navbar} >PreJunior </NavLink>
                <NavLink to={PATH.JUNIOR} activeClassName={s.activeNav} className={s.navbar}>Junior </NavLink>
                <NavLink to={PATH.JUNIOR_PLUS} activeClassName={s.activeNav} className={s.navbar}>Junior+</NavLink>
                <div className={s.button}>Push me</div>
            </div>
        </div>
    )
}

export default Header


