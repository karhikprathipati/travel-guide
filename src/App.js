import logo from './logo.svg';
import './App.css';
import Card from './components/card'
import Header from './components/head';
import data from './data';

function App() {
  const places = data.map((place) =>{
    return <Card 
      {...place}
    />
  });
  return (
    <div className="App">
      {places}
    </div>
  );
}

export default App;
