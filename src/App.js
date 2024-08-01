import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import FakestoreApi from './components/fakestoreapi';
import Footer from './components/Footer'
class App extends Component {

  render() {

    return (
      <>
        <Header />
        <FakestoreApi />
        <Footer />
      </>
    );
  }
}

export default App;