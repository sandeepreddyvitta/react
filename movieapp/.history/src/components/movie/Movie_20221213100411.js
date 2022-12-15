import React, { useState, useEffect } from 'react'
import MovieList from '../movie/MovieList';

const Home = () => {
    const [movies, setMovies] = useState([]);
    const [searchValue, setSearchValue] = useState("");
    useEffect(() => { }, [])
    return (
        <div className='home'>
            <div className='moviesList'>
                <MovieList movies={movies} />
            </div>
        </div>
    )
}

export default Home