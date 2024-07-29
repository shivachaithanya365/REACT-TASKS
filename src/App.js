import './App.css';
import ItemList from './components/Ternary-operator';
import Ifelse from './components/If-else-condition';
import ShortCircuit from './components/Short-circuit';

const App = () => (
  <div>
    <h1 className='App'>USING CLASS BASED COMPONENTS </h1>
    <Ifelse />
    <ItemList />
    <ShortCircuit />
  </div>
);

export default App;