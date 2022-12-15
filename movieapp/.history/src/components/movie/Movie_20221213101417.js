import axios from 'axios';
import React, { useState, useEffect } from 'react'
import MovieList from '../movie/MovieList';

const Home = () => {
    const [movies, setMovies] = useState([]);
    const [searchValue, setSearchValue] = useState("");
    useEffect(() => {
        const data = axios.get(`https://www.omdbapi.com/?s=star&apikey=d8df698c`);
        console.log(data);
    }, [])
    return (
        <div className='home'>
            <div className='moviesList'>
                <MovieList movies={movies} />
            </div>
        </div>
    )
}

export default Home