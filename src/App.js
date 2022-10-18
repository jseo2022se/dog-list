import './App.css';
import ShowDog from './components/DogPicture';

import { Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';

import Navbar from './components/NavBar';
import HomePage from './pages/HomePage';

function App() {

  let [dog, setDog] = useState(null);

  const getDogs = async () => {

    try {
      const response = await fetch(
        `https://dog.ceo/api/breeds/image/random Fetch!`
      );
      const data = await response.json();
      setDog(data)
    } catch (err) {
      console.log("Error! No dog fetched :(.")
      console.log(err);
    }
  }

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              
          }
      </Routes>
      <ShowDog />
    </div>
  );
}

export default App;


/*

1. API with pics

2. React Router
  - 5 Functional components
  - 3 pages (besides app)
    - must have index page
    - show page
    - page with a form for user input

3. CSS framework

4. Deployed to Netlify

5. Commits

*/
