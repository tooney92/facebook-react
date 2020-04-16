import React from 'react';
import logo from './logo.svg';
import './App.css';
import Banner from './components/banner.js' 
import NavBar from './components/navbar.js' 
import SecondPart from './components/main'

class App extends React.Component{

  render(){

    return(
      <div>
        <nav>
          <NavBar />
        </nav>
        <header>
          <Banner />
        </header>
        <main>
          <SecondPart />
        </main>
      </div>

    )



  }


}

export default App;
