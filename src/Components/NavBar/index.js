import React, {useState} from 'react';

export default function NavBar() {
    const navbarContainer ={
        display:'flex',
        justifyContent: 'flex-end',
        background:'gray',
        height:40,
        alignItems:'center'
    }
    const loginWrapper ={
        // display:'flex',
    }
    const loginButtonStyle ={
        display:'inline-block',
        background: 'orange',
        height:25,
        margin:'0px 16px',
        padding: '4px 8px'

    } 
    const signUpButtonStyle ={
        display:'inline-block',
        height:25,
        background: 'red',
        margin:'0px 16px',
        padding: '4px 8px'

    }

    const [navLinks, toggleNavLinks] = useState(false);

    const handleHamBurgerPress = () => {
        toggleNavLinks(!navLinks)
    }
    
    return(
        <div className='nav'>
            <div className='hamburger' onClick={handleHamBurgerPress}>
                <div className='line'></div>
                <div className='line'></div>
                <div className='line'></div>
            </div>

            <ul className= {navLinks ? 'nav-links open' :'nav-links'}>
                <li className = {navLinks ? 'fade' :null}><a href="#">New Post</a></li>
                <li className = {navLinks ? 'fade' :null}><a href="#">Login</a></li>
                <li className = {navLinks ? 'fade' :null}><a href="#">Sign Up</a></li>
            </ul>
        </div>
    )
}