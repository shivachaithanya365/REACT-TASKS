import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer'
import Recipes from './components/RecipesData'

function App() {
  return (
    <>
      <Header />
      <h1 style={{ textAlign: 'center', marginTop: '100px', color: 'red' }}>---------------   RECIPES   ---------------</h1>
      <div>
        <Recipes />
      </div>
      <Footer />
    </>
  );
}

export default App;