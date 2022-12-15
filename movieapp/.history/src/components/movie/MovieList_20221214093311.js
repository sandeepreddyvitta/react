import React from 'react'

const MovieList = (props) => {
    return (
        <div className='moiveList' style={{ display: "flex" }}>
            {
                props.movies.map((movie, index) => (
                    <div className='image-container d-flex justify-content-start m3'>
                        <img src={movie.Poster} alt='' />
                        <div className='overlay d-flex justify-content-start m-3'
                            onClick={() => props.handleFavoriteMovie(movie)} >
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default MovieList