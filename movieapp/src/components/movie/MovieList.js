import React from 'react'

const MovieList = (props) => {
    const FavouritesComponent = props.favoriteComp;
    const RemoveFav = props.RemoveComp;
    return (
        <div className='moiveList' style={{ display: "flex" }}>
            {
                props.movies.map((movie, index) => (
                    <div className='image-container d-flex align-items-center justify-content-start m3'>
                        <img src={movie.Poster} alt='' />
                        <div className='overlay d-flex justify-content-start m-3'
                            onClick={() => props.handleFavoriteMovie(movie)} >
                            <FavouritesComponent />
                        </div>
                        {/* <div className='overlay d-flex justify-content-start m-3'
                            onClick={() => props.handleRomoveFavourite(movie)} >
                            < RemoveFav />
                        </div> */}
                    </div>
                ))
            }
        </div>
    )
}

export default MovieList