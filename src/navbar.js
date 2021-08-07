import React, { Component } from 'react'
import './navbar.css'

 class Navbar extends Component {
    render() {
        return (
            <div className="navbar">
                <div className="search">
                    <img src="img/search.png" alt="" />
                    <input type="text" placeholder="Search for a race, car or racer" />
                </div>
                    <div className="down">
                        <img src="img/down.png" alt="" />
                        <input type="text" placeholder="Choose a car" />
                    </div>
                    <div  className="icon">
                        <img className="notification" src="img/notification.png"  alt="" />
                        <img className="img-icon" src="img/person.png"  alt="" />
                        <img className="img-man" src="img/sdMan.png"  alt="" />
                        
                    </div>
                
                
              

            </div>
        )
    }
}

export default Navbar