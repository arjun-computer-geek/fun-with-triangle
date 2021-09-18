import React from 'react'
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className="header-container">
                <span className="title">Fun With triangle</span>
                <nav>
                    <NavLink activeClassName="active" className="nav-link"  to="/is-triangle">is Triangle?</NavLink>
                    <NavLink activeClassName="active" className="nav-link"  to="/quiz">Quiz</NavLink>
                    <NavLink activeClassName="active" className="nav-link"  to="/hypotenuse">Hypotenuse</NavLink>
                    <NavLink activeClassName="active" className="nav-link"  to="/area-of-triangle">Area Of Triangle</NavLink>
                </nav>
        </div>
    )
}

export default Header
