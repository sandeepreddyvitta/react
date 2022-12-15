import React from 'react'

const MovieList = (props) => {
    return (
        <div>
            {
                props.movies.map((movie, index) => (
                    <div >
                        <img src={movie.Poster} alt='' />
                    </div>
                ))
            }
            movie
        </div>
    )
}

export default MovieList