import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer'
import FakestoreApi from './components/fakestoreapi';

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