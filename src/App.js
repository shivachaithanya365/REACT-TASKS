import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Card from './components/Card';

class App extends Component {
  state = {
    FakestoreApi: [],
    loading: true
  };

  componentDidMount() {
    this.fetchProducts();
  }

  fetchProducts = () => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => {
        this.setState({ FakestoreApi: data, loading: false });
      })
      .catch(error => {
        this.setState({ loading: false, error: "Failed to fetch products." });
      });
  }

  render() {
    const { FakestoreApi, loading, error } = this.state;

    return (
      <>
        <Header />
        <h1 style={{ textAlign: 'center', marginTop: '100px' }}>FAKESTORE API PRODUCTS</h1>
        <div className="App">
          {loading ? (
            <h2 style={{ textAlign: 'center', margin: 'auto' }}>Loading...</h2>
          ) : error ? (
            <h2 style={{ textAlign: 'center', margin: 'auto' }}>{error}</h2>
          ) : FakestoreApi.length > 0 ? (
            FakestoreApi.map(product => (
              <Card
                key={product.id}
                title={product.title}
                image={product.image}
                price={product.price}
                category={product.category}
                description={product.description}
                rating={product.rating.rate}
                ratingCount={product.rating.count}
              />
            ))
          ) : (
            <h2 style={{ textAlign: 'center', margin: 'auto' }}>No products available.</h2>
          )}
        </div>
      </>
    );
  }
}

export default App;