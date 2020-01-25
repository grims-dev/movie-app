import React from 'react';
import PropTypes from 'prop-types';
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

MovieThumb.propTypes = {
  movieId: PropTypes.number,
  movieTitle: PropTypes.string,
  movieImage: PropTypes.string,
  clickable: PropTypes.bool,
}

export default MovieThumb;