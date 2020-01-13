import React from 'react';

import { StyledMovieThumb } from '../styles/StyledMovieThumb';

const MovieThumb = ({ movieID, movieTitle, movieImage, clickable }) => (
  <StyledMovieThumb>
    <img 
      src={movieImage}
      alt={movieTitle}
      className={clickable ? 'clickable' : ''}
      />
  </StyledMovieThumb>
)

export default MovieThumb;