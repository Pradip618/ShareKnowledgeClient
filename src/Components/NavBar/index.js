import React from 'react';

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
    
    return(
        <div className='nav'>
            <div className='hamburger'>
                <div className='line'></div>
                <div className='line'></div>
                <div className='line'></div>
            </div>

            <ul className='nav-links'>
                <li><a href="#">New Post</a></li>
                <li><a href="#">Login</a></li>
                <li><a href="#">Sign Up</a></li>
            </ul>
        </div>
    )
}