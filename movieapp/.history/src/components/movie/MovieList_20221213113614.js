import React from 'react'

const MovieList = (props) => {
    return (
        <div>
            {
                props.movies.map((movie, index) => (
                    <div className='image-container d-flex justify-content-start m3'>
                        <img src={movie.Poster} alt='' />
                    </div>
                ))
            }
            movie
        </div>
    )
}

export default MovieList