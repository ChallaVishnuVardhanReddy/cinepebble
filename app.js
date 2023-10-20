import './App.css';
import  './Counter.js'
import Counter from './Counter.js';
import Greeting from './Greeting';
function App() {
  return (
    <div className="App">
      <Counter/>
      <Greeting name="challa"/>
    </div>
  );
}

export default App;
