import React from 'react';
import *as ReactDOMClient from 'react-dom/client';
import style from './footer.css'

class Footer extends React.Component{

    render(){
        return(
            <footer>
                <div id="upFooter">
                    <div id="leftFooter">
                        <ul id="listLeft">
            	            <li><h2>Quick link</h2></li>
                            <li>Home</li>
                            <li>Services</li>
                            <li>About us</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <div id="centerFooter">
                        <h1 id="getit">Get in Touch</h1>
                        <p>Amet minim molit non deserunt ullamco est<br/> sit
                        aliqua dolor do amet sint.</p>
                        <div id="contBut">
                            <input id="email" type="email" placeholder="Enter Email"></input>
                            <button id="butSub">Subscribe</button>
                        </div>
                    </div>
                    <div id="rightFooter">
                        <ul id="listRight">
                            <li><h2>Useful</h2></li>
                            <li>Privacy policy</li>
                            <li>Legal</li>
                            <li>FAQ</li>
                            <li>Blogs</li>
                        </ul>
                    </div>
                </div>
            </footer>
        )
    }   
}

export default Footer;