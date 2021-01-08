import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { movies } from '../../services/movies'

import imageUrl from '../../helpers/image-url';

import Slider from '../slider';

import styles from './shelf.styl';

const Shelf = ({ title: shelfTitle, displayInfo, request, slidesToShow, showExtra, tileOrientation }) => {
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

  const renderMoviePopularity = ({ popularity }) => (
    <div>{Math.ceil(popularity)}</div>
  )

  const renderMovieRating = ({ vote_average }) => (
    <div>{vote_average}</div>
  )

  const renderMovieDetails = ({ title, release_date }) => (
    <div>{title} - {release_date}</div>
  )

  function renderTile(movie) {
    const movieImage = tileOrientation === 'portrait' ? movie.poster_path : movie.backdrop_path

    return <div className={styles.tile}>
      <img className={styles.tileImage} src={imageUrl(movieImage)} alt={`Poster do filme ${movie.title}`}/>
      <div className={styles.tileInfo}>
        {displayInfo === 'details' && renderMovieDetails(movie)}
        {displayInfo === 'popularity' && renderMoviePopularity(movie)}
        {displayInfo === 'rating' && renderMovieRating(movie)}
      </div>
    </div>
  }

  return (
    <div>
      {shelfTitle && <h2>{shelfTitle}</h2>}
      {loading ? 'loading...' : <Slider slideClassName={cx(styles.slide, { [styles.isShowOne]: slidesToShow === 1 })} slidesToShow={slidesToShow} showExtra={showExtra}>
        {movieList.map(movie => renderTile(movie))}
      </Slider>}
    </div>
  )
}

Shelf.propTypes = {
  title: PropTypes.string,
  request: PropTypes.oneOf(['getTopRated', 'getDiscover', 'getUpcoming', 'getSimilar', ]).isRequired,
  displayInfo: PropTypes.oneOf(['popularity', 'rating', 'details', 'clean']),
  slidesToShow: PropTypes.number,
  showExtra: PropTypes.bool,
  tileOrientation: PropTypes.oneOf(['portrait', 'landscape'])
}

Shelf.defaultProps = {
  displayInfo: 'clean',
  slidesToShow: 2,
  showExtra: true,
  tileOrientation: 'portrait',
}

export default Shelf;
