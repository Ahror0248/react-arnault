import React, { Component } from 'react'
import './body.css'


 class Body extends Component {
    render() {
        return (
            <div className="body">
                <div className="container">
                    <div className="all-box">
                        <div className="box">
                            <img src="img/start.png" alt=""/>
                        </div>
                        <div className="boxes">
                            <img src="img/drive.png" alt="" />
                        </div>
                        <div className="boxess">
                            <img src="img/maintenance.png" alt="" />
                        </div>
                        <div className="boxes">
                            <img src="img/battery.png" alt="" />
                        </div>
                        <div className="boxes">
                            <img src="img/tires.png" alt="" />
                        </div>
                        <div className="boxes">
                            <img src="img/lock.png" alt="" />
                        </div>
                    </div>
                    <div className="all-car">
                        <div className="carsystem">
                            <div className="car">
                                <h1>Infiniti Renault<sup>TM</sup></h1>
                                <div className="cards">
                                    <img src="img/left.png" alt="" />
                                </div>
                                <div className="cards1">
                                    <img src="img/right.png" alt="" />
                                </div>
                            </div>
                            <div className="real-car">
                                <img src={"img/Car.png"} alt=""/>
                    
                            </div>
                        </div>
                        <div className="skills">
                            <div className="cat">
                                <div className="cat-card">
                                    <img src="img/cat icon.png" alt="" />
                                </div>
                                <div className="cat-text">
                                    <h1>72</h1>
                                    <p>Championship</p>
                                </div>
                            </div>
                            <div className="moon">
                                <div className="moon-card">
                                    <img src="img/moon icon.png" alt="" />
                                </div>
                                <div className="moon-text">
                                    <h1>32</h1>
                                    <p>Skins</p>
                                </div>
                            </div>
                            <div className="trophy">
                                <div className="trophy-card">
                                    <img src="img/title.png" alt="" />
                                </div>
                                <div className="trophy-text">
                                    <h1>64</h1>
                                    <p>Trophies won</p>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Body
