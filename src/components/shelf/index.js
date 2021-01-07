import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { movies } from '../../services/movies'

import imageUrl from '../../helpers/image-url';

import Slider from '../slider';

import styles from './shelf.styl';

const Shelf = ({ title, type, request }) => {
  const [loading, setLoading] = useState(false);
  const [movieList, setMovieList] = useState([]);

  async function getList() {
    setLoading(true);
    const data = await movies[request]();
    setLoading(false);
    if (data.data.results) {
      setMovieList(data.data.results)
    }
    console.log('data', data);
  }

  useEffect(() => {
    getList();
  }, []);

  function renderTile(movie) {
    return <div className={styles.title}>
      <img src={imageUrl(movie.poster_path)} alt=""/>
      {movie.title}
    </div>
  }

  return (
    <div>
      <h2>{title}</h2>
      <Slider slideClassName={styles.slide} slidesToShow={2} showExtra>
        {movieList.map(movie => renderTile(movie))}
      </Slider>
    </div>
  )
}

Shelf.propTypes = {
  title: PropTypes.string,
  request: PropTypes.oneOf(['getTopRated', 'getTopLoved', 'getNowPlaying', 'getSimilar', ]).isRequired,
  type: PropTypes.oneOf(['popularity', 'rating', 'info', 'clean']),
}

Shelf.defaultProps = {
  type: 'clean',
}

export default Shelf;
