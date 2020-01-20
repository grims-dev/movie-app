import React from 'react';
import { Link } from '@reach/router';

import { StyledMovieThumb } from '../styles/StyledMovieThumb';

const MovieThumb = ({ movieId, movieTitle, movieImage, clickable }) => (
  <StyledMovieThumb>
    {clickable ? (
      <Link to={`/${movieId}`}>
        <img 
          src={movieImage}
          alt={movieTitle}
          className='clickable'
          />
      </Link>
    ) : (
      <img 
        src={movieImage}
        alt={movieTitle}
        />
    )}
  </StyledMovieThumb>
)

export default MovieThumb;