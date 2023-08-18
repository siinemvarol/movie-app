import { useEffect, useState } from 'react';
import './App.css';
import { getFilms } from './api.jsx';
import Cards from './Cards';

function App() {

  const categories = ["All", "Action", "Drama", "Comedy"];
  const [movies, setMovies] = useState([]);
  const [category, setCategory] = useState("All");

  const handleCategoryChange = (category) => {
    setCategory(category);
  };

  const filteredMovies = category === "All" ? movies : movies.filter((movie) => movie.category === category);

  useEffect(() => {
    getFilms().then((response) => setMovies(response));

  }, []);

  return (
    <>
      <div className="movie-app"> 
        <h1>Movies</h1>
        <div className='categories'>
        {
          categories.map((category, index) => (
            <button key={index} onClick={() => handleCategoryChange(category)}>{category}</button>
          )
          )
        }
        </div>      
        <div className='movies'>
          {
            filteredMovies.map((movie) => (
            <Cards key={movie.id} movie={movie}/>            
            ))
          }
        </div>
      </div>
    </>
  );
}

export default App;
