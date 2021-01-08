import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { movies } from '../../services/movies'

import imageUrl from '../../helpers/image-url';

import Slider from '../slider';

import styles from './shelf.styl';

const Shelf = ({ title, type, request, slidesToShow, showExtra, tileOrientation }) => {
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
    const movieImage = tileOrientation === 'portrait' ? movie.poster_path : movie.backdrop_path

    return <div className={styles.tile}>
      <img src={imageUrl(movieImage)} alt=""/>
      {movie.title}
    </div>
  }

  return (
    <div>
      {title && <h2>{title}</h2>}
      <Slider slideClassName={cx(styles.slide, { [styles.isShowOne]: slidesToShow === 1 })} slidesToShow={slidesToShow} showExtra={showExtra}>
        {movieList.map(movie => renderTile(movie))}
      </Slider>
    </div>
  )
}

Shelf.propTypes = {
  title: PropTypes.string,
  request: PropTypes.oneOf(['getTopRated', 'getTopLoved', 'getNowPlaying', 'getSimilar', ]).isRequired,
  type: PropTypes.oneOf(['popularity', 'rating', 'info', 'clean']),
  slidesToShow: PropTypes.number,
  showExtra: PropTypes.bool,
  tileOrientation: PropTypes.oneOf(['portrait', 'landscape'])
}

Shelf.defaultProps = {
  type: 'clean',
  slidesToShow: 2,
  showExtra: true,
  tileOrientation: 'portrait',
}

export default Shelf;
