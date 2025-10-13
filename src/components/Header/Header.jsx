import React, { useState } from 'react'
import './Header.scss'
import Burger from './menu.svg.png'
import BurgerClose from './close-menu.png'
import Logo from '../../assets/img/avatar.jpg'
import Main from '../pages/Main.jsx'
//import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Link, Route, Routes } from 'react-router-dom'

const Header = () => {
    const [isOpen, setOpen] = useState();
    return (
        <>
            <header className='header'>
                <div className='container'>
                    <div className='header__body'>
                        <div className='header__logo'>
                            <img src={Logo} alt='Logo' />
                        </div>
                        <nav className={`header__nav ${isOpen ? 'active' : ''}`}>
                            <ul className='header__nav-list'>
                                <li className='header__nav-item'>
                                    <Link to='/'>Main</Link>
                                </li>
                            </ul>
                        </nav>
                        <span className='header__menu-button' onClick={() => setOpen(!isOpen)}>
                            {isOpen ? <img src={BurgerClose} alt='menu-close' /> : <img src={Burger} alt='burger' />}
                        </span>
                    </div>
                </div>
            </header>
            <Routes>
                <Route path='/' element={<Main />} />
            </Routes>
        </>

    )
}

export default Header