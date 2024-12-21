import React from 'react';
import *as ReactDOMClient from 'react-dom/client';
import logo from './images/hostel.jpg'
import style from './header.css'

class Header extends React.Component{
    render(){
        return(
            <header>
                <div id="upperHeader">
                    <div id="logo">
                        <img src={logo} alt="logo"></img>
                    </div>
                    <div id="listServices">
                        <ul id="list">
                            <li>Home</li>
                            <li>Services</li>
                            <li>About Us</li>
                            <li>Room</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <div id="ButtonBook">
                        <button>Book Now</button>
                    </div>
                </div>
                <div id="downHeader">
                    <div id="leftDownHeader">
                        <h1 id="open">Open The Door For A<br/> 
                            Spaceous <p id="living">Living-</p>
                        </h1>
                        <p id="apet">Amet minim molit non deserunt ullamco est sit<br/>
                            aliqua dolor do amet sint. Velit officia consequat.
                        </p>
                    </div>
                    <div id="rightDownHeader">
                    <div className="row" id="p1">
                        <p className="href" >Book A Hotel Service</p><div class="buttonForHref">&gt;</div>
                    </div> 
                    <div className="row" id="p2"> 
                        <p className="href" >Book A Car Service  </p><div class="buttonForHref">&gt;</div> 
                    </div> 
                    <div className="row" id="p3"> 
                        <p className="href" >Book Spa Service    </p><div class="buttonForHref">&gt;</div> 
                    </div>
                    </div>
                </div>
            </header>
        )
    }
}
export default Header;