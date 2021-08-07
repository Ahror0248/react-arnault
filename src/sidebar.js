import React, { Component } from 'react'
import './sidebar.css'

 class sidebar extends Component {
    render() {
        return (
            <div className="sidebar">
                <div className="container">
                    <div className="home">
                        <img src="img/sdHome.png" alt="" />
                        <h3>iffee</h3>
                    </div>
                    <div className="menu">
                        <h4>Menu</h4>
                        <div className="home1-page">
                            <img src="img/sdHouse.png" alt="" />
                            <p>Home</p>
                        </div>
                        <div className="service-page">
                            <img src="img/sdServices.png" alt="" />
                            <p>Service Menu</p>
                        </div>
                        <div className="home-page">
                            <img src="img/sdUseer.png" alt="" />
                            <p>Racers</p>
                        </div>
                        <div className="home-page">
                            <img src="img/calculator.png" alt="" />
                            <p>Calculator</p>
                        </div>
                        <div className="home-page">
                            <img src="img/settings.png" alt="" />
                            <p>Settings</p>
                        </div>
                    </div>
                    <div className="loops">
                        <h2>Scheduled Races</h2>
                        <div className="loopBlue1">
                            <img src="img/sdBlue.png" alt="" />
                            <p>MotoGP 2022</p>
                        </div>
                        <div className="loopBlue">
                            <img src="img/sdRed.png" alt="" />
                            <p>Dynamic 22</p>
                        </div>
                        <div className="loopBlue">
                            <img src="img/sdGreen.png" alt="" />
                            <p>Olympics</p>
                        </div>
                    </div>
                    <div className="card">
                        <img className="man" src="img/sdMan.png" alt="" />
                        <h5>Killua</h5>
                        <img className="next" src="img/next.png" alt="" />
                    </div>
                </div>
            </div>
        )
    }
}

export default sidebar