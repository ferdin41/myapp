import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {Identitas} from './components/Identitas.js'


function App() {
  const [counter, setCounter] = useState(0)
  const [gambar, setGambar] = useState('./components/square.png')

  const incrementerAndGambar = () => {
    setCounter((prev) => prev + 1);
    if((counter-1) % 3 == 0) {setGambar((prev)=>'./components/triangle.jpg')}
    else {setGambar((prev)=>'./components/square.png')}
    console.log(gambar)
  }

  return (
    <><><div className="container Identitas">
      <Identitas />
    </div><div className="container Counter">
        <h2>Counter: {counter}</h2>
        <button onClick={incrementerAndGambar}>Click</button>
      </div></>
      <div className="container Gambar">
        <img src={gambar} alt="Gambar" /></div></>
  );
}

export default App;
