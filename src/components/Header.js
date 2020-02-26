import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/addy.jpg';


class Header extends React.Component {
    render() {
        return (
            <header id="header">
                <div className="inner">
                    <a href="#" className="image avatar"><img src={avatar} alt="" /></a>
                    <h1><strong>I am Adnan</strong>, Web Developer  <br />
                   specialized in Front-end Development<br /></h1>
                </div>
                <Footer />
            </header>
        )
    }
}

export default Header
