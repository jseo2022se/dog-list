import './App.css';
import Navbar from './components/NavBar';
import HomePage from './pages/HomePage';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Favorites from './pages/Favorites';

function App() {

  let [dog, setDog] = useState(null);
  let [favorites, setFavorite] = useState([]);

  let navigate = useNavigate()

  const getDogs = async () => {

    try {
      const response = await fetch(
        `https://dog.ceo/api/breed/hound/images/random`
      );
      const data = await response.json();
      setDog(data)
    } catch (err) {
      console.log("Error! No dog fetched :(.")
      console.log(err);
    }
  }

  const addToFavorites = (dog) => {
    setFavorite([...favorites, dog]);
    navigate("/favorites")
  }

  useEffect(() => {
    getDogs()
  }, [])

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <HomePage 
              dog={dog}
              getDogs={getDogs}
            />    
          }
          />
          <Route
            path='/favorites'
            element={<Favorites />}
          />
      </Routes>
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
