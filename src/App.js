import './App.css';
import React from 'react';
import Sidebar from './sidebar';
import Navbar from './navbar'
import Body from './body'

class App extends React.Component{

  render(){
    return(
      <div className="all">
        <Sidebar/>
        <div className="all-part">
          <Navbar/>
          <Body/>
        </div>
      </div>
    )
  }

}


export default App;