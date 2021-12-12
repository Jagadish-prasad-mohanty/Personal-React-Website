import React from 'react'
import Navigation from './Navigation'
function Layout(props) {
    return (
        <div className={props.className?props.className:null}>
            <Navigation show={props.show}/>
            <main style={{marginTop:'3rem'}}>{props.children}</main>
        </div>
    )
}

export default Layout
