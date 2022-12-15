import Home from "./components/home/Home";
import Movie from './components/movie/Movie'
import 'bootstarp/dist/css/bootstrap.min.css';
import axios from 'axios';
import './movie.scss';
import React, { useState, useEffect } from 'react'
import MovieList from '../movie/MovieList';
import MovieListHead from './MovieListHead';
import SearchBar from './SearchBar';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  useEffect(() => {
    const data = axios.get(`https://www.omdbapi.com/?s=star&apikey=d8df698c`);
    console.log(data);
  }, [])
  return (
    <div className="App">
      {/* <Home /> */}
      <Movie />
    </div>
  );
}

export default App;
