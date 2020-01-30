import React, {useState} from 'react';
import {withRouter} from 'react-router-dom';

const NavBar = (props) => {

    const [navLinks, toggleNavLinks] = useState(false);
    const [isAuthorized, setAuthorization] = useState(true)

    const handleHamBurgerPress = () => {
        toggleNavLinks(!navLinks)
    }

    const getAuthorizedNavBarItem = () => {
        return(
            <>

                <ul className= {navLinks ? 'nav-links open' :'nav-links'}>
                    <li className = {navLinks ? 'fade' :'nav-button'} onClick={()=>props.history.push('/write-article')}><a href="#">Write Article</a></li>
                    <li className = {navLinks ? 'fade' :'nav-button'}><a href="#">Profile</a></li>
                    <li className = {navLinks ? 'fade' :'nav-button'}><a href="#">Log Out</a></li>
                </ul>
            </>
        )
    }

    const getDefaultNavBarItem =  () => (
        <>
            <ul className= {navLinks ? 'nav-links open' :'nav-links'}>
                <li className = {navLinks ? 'fade' :null}><a href="#">New Post</a></li>
                <li className = {navLinks ? 'fade' :null}><a href="#">Login</a></li>
                <li className = {navLinks ? 'fade' :null}><a href="#">Sign Up</a></li>
            </ul>
        </>
    )
    
    return(
        <div className='nav'>
            <div className='nav-header' onClick={()=>props.history.push('/')}>Share Knowledge</div>

            <div className='hamburger' onClick={handleHamBurgerPress}>
                <div className='line'></div>
                <div className='line'></div>
                <div className='line'></div>
            </div>
            {isAuthorized ? getAuthorizedNavBarItem() : getDefaultNavBarItem()}
        </div>
    )
}

export default withRouter(NavBar);