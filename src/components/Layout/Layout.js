import React from 'react'
import Navigation from './Navigation'
function Layout(props) {
    return (
        <div className={props.className?props.className:null}>
            <Navigation/>
            <main>{props.children}</main>
        </div>
    )
}

export default Layout
