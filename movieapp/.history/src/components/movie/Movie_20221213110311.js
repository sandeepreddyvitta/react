import axios from 'axios';
import React, { useState, useEffect } from 'react'
import MovieList from '../movie/MovieList';
import MovieListHead from './MovieListHead';
import SearchBar from './SearchBar';

const Home = () => {
    const [movies, setMovies] = useState([]);
    const [searchValue, setSearchValue] = useState("");
    useEffect(() => {
        const data = axios.get(`https://www.omdbapi.com/?s=star&apikey=d8df698c`);
        console.log(data);
    }, [])
    return (
        <div className='movie'>
            <div className='container'>
                <MovieListHead heading="Movies" />
                <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />
            </div>
            <div className='moviesList'>
                <MovieList movies={movies} />
            </div>
        </div>
    )
}

export default Home