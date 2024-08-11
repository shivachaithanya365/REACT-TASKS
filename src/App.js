import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer'
import Countries from './components/Countries';
import Recipies from './components/Recipies';

class App extends Component {

  render() {

    return (
      <>
        <Header />
        <Footer />
        <Countries />
        <Recipies />
      </>
    );
  }
}

export default App;