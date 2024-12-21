import React from 'react';
import *as ReactDOMClient from 'react-dom/client';
import room from './images/room.webp'
import style from './main.css'
import wifi from './images/wifi.jpg'
import car from './images/car.png'
import bottle from './images/bottle.png'
import house from './images/house.webp'
import roomMain from './images/roomInMain.webp'
import room1 from './images/room2.webp'
import room2 from './images/room3.webp'
import room3 from './images/room4.jpg'
import room4 from './images/room5.jpg'

import tree from './images/tree.jpg'
import list from './images/list.png'
import bottle1 from './images/bottle1.jpg'

class Main extends React.Component{
    render(){
        return(
            <main>

                <img src={room} alt="room" id="roomImages"></img>

                <div id="resursesForUsers">
                    <div className="imageBlocks">
                        <img className="Images" src={bottle} alt="tea"></img>
                        <p className="pppp">Welcome<br/> Drinks</p>
                    </div >

                    <div className="imageBlocks">
                        <img className="Images" src={car} alt="car"></img>
                        <p className="pppp">Car<br/> Rent Service</p>
                    </div>

                    <div className="imageBlocks">
                        <img className="Images" src={house} alt="monument"></img>
                        <p className="pppp">Resort<br/>& Spa</p>
                    </div>

                    <div className="imageBlocks">
                        <img className="Images" src={wifi} alt="wifi"></img>
                        <p className="pppp">Free<br/>WIFI Service</p>
                    </div >

                </div>

                <div id="containerForCont">
                    <div id="container">
                        <h1>Why You Should <p>Stay Here</p></h1>
                        <p>Amet minim molit non deserunt ullamco est sit
                        aliqua dolor do<div id="center">amet sint. Velit officia consequat.</div></p>
                    </div>
                </div>

                <div id="Main">
                    <div id="leftMain">
                        <div className="WhyHere">
                            <div className="num">1</div>
                            <h3 className="hhh">Provide the best choise of Room.</h3>
                            <p className="ppp">Amet minim molit non deserunt ullamco est sit
                            aliqua dolor do<br/> amet sint. Velit officia consequat.</p>
                        </div>

                        <div className="WhyHere">
                            <div className="num">2</div>
                            <h3 className="hhh">Low price with Best Quality</h3>
                            <p className="ppp">Amet minim molit non deserunt ullamco est sit
                            aliqua dolor do<br/> amet sint. Velit officia consequat.</p>
                        </div>

                        <div className="WhyHere">
                            <div className="num">3</div>
                            <h3 className="hhh">Restaurant Service</h3>
                            <p className="ppp">Amet minim molit non deserunt ullamco est sit
                            aliqua dolor do<br/> amet sint. Velit officia consequat.</p>
                        </div>
                    </div>

                    <div id="rightMain">
                        <img src={roomMain} alt="room" id="roomBed"></img>
                        <img src={room} alt="room" id="room"></img>
                    </div>
                </div>

                <div id="containerCont">
                    <div id="cont">
                        <p id="orr">Our Room</p>
                        <h1>A World Of <p> Choise</p></h1>
                        <p>Amet minim molit non deserunt ullamco est sit
                        aliqua dolor do<div id="cent">amet sint. Velit officia consequat.</div></p>
                    </div>
                </div>

                <div id="bigCont">
                    <div id="littleCont">
                        <div id="Room1">
                        <img alt="room" className="room" src={room} ></img>
                        <p className="nameRoom" id="p1">Room with View</p>
                        </div>
                        <div id="Room2">
                        <img alt="room" className="room" src={room1} ></img>
                        <p className="nameRoom" id="p2">small Room</p>
                        </div>
                        <div id="bigRoom">
                        <img alt="room" className="room" id="brimg" src={room2}></img>
                        <p className="nameRoom" id="p3">Luxury <br/>Room</p>
                        </div>
                        <div id="Room3">
                        <img alt="room" className="room" src={room3}></img>
                        <p className="nameRoom" id="p4">Appartment</p>
                        </div>
                        <div id="Room4">
                        <img alt="room" className="room" src={room4}></img>
                        <p className="nameRoom" id="p5">Midium Room</p>
                        </div>
                    </div>
                </div>

                <div id="contFinish">
                    <div id="leftFinish">
                        <div id="inCont">
                            <div id="contH">
                                <h1 id="about">About&nbsp;</h1><h1 id="us"> Us</h1>
                            </div>
                            <p id="pp1">
                            Amet minim molit non deserunt ullamco est sit
                            aliqua dolor do amet sint. <br/> 
                            Velit officia consequatduis enim.Amet minim molit non deserunt ullamco<br/> est sit
                            aliqua dolor do amet sint. Velit officia consequatduis enim.<br/>
                            </p>
                            <p id="pp2">Amet minim molit non deserunt ullamco est sit
                            aliqua dolor do amet sint. <br/> 
                            Velit officia consequatduis enim.</p>
                            <button>Explore</button>
                        </div>
                    </div>
                    <div id="rightFinish">
                    <img src={room2} alt="room" id="ImagesF"></img>
                    </div>
                </div>

                <div id="containerr">
                    <div id="LeftContainerr">
                        <h1>Classic Room and<br/> interior</h1>
                        <p>Excellent 5000+reviews</p>
                        <p>Peoples successfully got this<br/> dream place</p>
                    </div>
                    <div id="RightContainerr">
                        <div id="block1">
                            <img className="Image" src={bottle} alt="tea"></img>
                            <h1 className="IH">Restaurant Service</h1>
                            <p>Amet minim molit non deserunt ullamco est sit
                            aliqua dolor do amet sint. Velit officia consequat.</p>                      
                        </div>
                        <div id="block2">
                            <img className="Image" src={bottle1} alt="bottle"></img>
                            <h1 className="IH">SPA & Wellness</h1> 
                            <p>Amet minim molit non deserunt ullamco est sit
                            aliqua dolor do amet sint. Velit officia consequat.</p>                        
                        </div>
                        <div id="block3">
                            <img className="Image" src={list} alt="list"></img>
                            <h1 className="IH">The Best Room</h1>  
                            <p>Amet minim molit non deserunt ullamco est sit
                            aliqua dolor do amet sint. Velit officia consequat.</p>                     
                        </div>
                        <div id="block4">
                            <img className="Image" src={tree} alt="tree"></img>
                            <h1 className="IH">Lounge Bar</h1>
                            <p>Amet minim molit non deserunt ullamco est sit
                            aliqua dolor do amet sint. Velit officia consequat.</p> 
                        </div>
                    </div>
                </div>
            </main>
        )
    }
}
export default Main;