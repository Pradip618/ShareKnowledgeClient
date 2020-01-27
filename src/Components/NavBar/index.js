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
        <div style={navbarContainer}>
            <div style={{marginRight:'auto'}}>Header</div>
            <div style={loginWrapper}>
                <div style={loginButtonStyle}>Login</div>
                <div style={signUpButtonStyle}>Sign Up</div>
            </div>

        </div>
    )
}