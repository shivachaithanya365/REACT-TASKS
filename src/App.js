import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer'
import Recipes from './components/RecipesData';

class App extends Component {

  render() {

    return (
      <>
        <Header />
        <Recipes />
        <Footer />
      </>
    );
  }
}

export default App;