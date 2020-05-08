import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => (
    <header>
        <NavLink to="/" activeClassName="is-active" exact={true} >Home</NavLink>
        <NavLink to="/create" activeClassName="is-active" >New Expense</NavLink>
    </header>
)

export default Header