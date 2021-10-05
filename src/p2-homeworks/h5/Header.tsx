import React from 'react'
import {NavLink} from 'react-router-dom'

function Header() {
    return (
        <div>
            <NavLink to='/'>Home </NavLink>
            <NavLink to='PreJunior'>PreJunior </NavLink>
            <NavLink to='Junior'>Junior </NavLink>
            <NavLink to='Junior+'>Junior+</NavLink>

        </div>
    )
}

export default Header
