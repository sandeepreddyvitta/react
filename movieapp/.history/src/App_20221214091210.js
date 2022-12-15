
import axios from 'axios';
import './App.css'
import React, { useState, useEffect } from 'react'
import MovieList from './components/movie/MovieList';
import SearchBar from './components/movie/SearchBar';
import 'bootstrap/dist/css/bootstrap.min.css'
import MovieListHead from './components/movie/MovieListHead';
import Addfavourtie from './components/movie/Addfavourtie';

function App() {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const getMovieRequest = async (searchValue) => {
    const url = `https://www.omdbapi.com/?s=${searchValue}&apikey=d8df698c`;
    const data = await fetch(url);
    const response = await data.json();
    console.log(response);
    if (response.Search)
      setMovies(response.Search)
  };
  useEffect(() => {
    getMovieRequest(searchValue)
  }, [searchValue])

  const AddFavourtieMovie = (movie) => {

  }

  return (
    <div className='app'>
      <div className='container-fluid movie-app'>
        <div className='row d-flex align-items-center mt-3 mb-5'>
          <MovieListHead heading="Favorites" />
          <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />
        </div>
        <div className='row'>
          <MovieList
            movies={movies}
            handleFavoriteMovie={AddFavourtieMovie}
            favoriteComp={Addfavourtie}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
