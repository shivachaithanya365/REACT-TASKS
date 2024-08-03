import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import FakestoreApi from './components/Fakestoreapi';
import Footer from './components/Footer'
import SquareAdder from './components/Square-adder';
import DemoCarousel from './components/Carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

class App extends Component {

  render() {

    return (
      <>
        <Header />
        <FakestoreApi />
        <SquareAdder />
        <DemoCarousel style={{ height: '300px' }} />
        <Footer />
      </>
    );
  }
}

export default App;