import './App.css';
import ShowDog from './components/ShowDog';
import  { useState, useEffect } from 'react'
import Nav from './components/Nav';

function App() {

  let [dog, setDog] = useState({})

  const getDog = async () => {
    try {
      const response = await fetch(`https://dog.ceo/api/breeds/image/random`)
      const data = await response.json()
      setDog(data)
    } catch(e) {
      console.log(e)
   }
  }

  useEffect(() => {
    getDog()
  }, [])

  return (
    <div className="App">
      <Nav />
      <ShowDog dog={dog} />
    </div>
  );
}

export default App;
