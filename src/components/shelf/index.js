import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { movies } from '../../services/movies'

import imageUrl from '../../helpers/image-url';
import navigateTo from '../../helpers/navigate-to'

import Slider from '../slider';
import Icon from '../icon'

import styles from './shelf.styl';

const Shelf = ({ title: shelfTitle, displayInfo, request, slidesToShow, showExtra, tileOrientation, onChange, className, arrows }) => {
  const [loading, setLoading] = useState(false);
  const [movieList, setMovieList] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(1);

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

  useEffect(() => {
    if (movieList.length && onChange) {
      const index = currentSlide * slidesToShow;
      onChange(movieList[index], currentSlide);
    }
  }, [currentSlide, movieList])

  function renderTitle(){
    const urlList = {
      getTopRated: 'movie/top-rated',
      getUpcoming: 'movie/upcoming',
    }

    const url = urlList[request] || 'movie';

    return (
      <div className={styles.titleWrap}>
        <h2 className={styles.title}>{shelfTitle}</h2>
        <a className={styles.link} target="_blank" href={`https://www.themoviedb.org/${url}`}>Ver Todos</a>
      </div>
    )
  }

  const renderMoviePopularity = ({ popularity }) => (
    <div className={styles.count}>
      <Icon className={cx(styles.icon, styles.popular)} name="favorite" />
      {Math.ceil(popularity)}
    </div>
  )

  const renderMovieRating = ({ vote_average }) => (
    <div className={styles.count}>
      <Icon className={cx(styles.icon, styles.rating)} name="grade" />
      {vote_average}
    </div>
  )

  const renderMovieDetails = ({ title, release_date }) => (
    <div className={cx(styles.details, 'flow')}>
      <h4 className={styles.detailsTitle}>{title}</h4>
      <p className={styles.detailsSubtitle}>{release_date}</p>
    </div>
  )

  function renderSlide(movie) {
    const movieImage = tileOrientation === 'portrait' ? movie.poster_path : movie.backdrop_path

    return <div onClick={() => {navigateTo('teste')}} className={cx(styles.tile, { [styles.withHoverScale]: slidesToShow > 1 })}>
      <img className={styles.tileImage} src={imageUrl(movieImage)} alt={`Poster do filme ${movie.title}`}/>

      <div className={cx(styles.tileInfo, { [styles.isDetails]: displayInfo === 'details' })}>
        {displayInfo === 'details' && renderMovieDetails(movie)}
        {displayInfo !== 'details' && <>
          <div className={styles.tileCountWrap}>
            {displayInfo === 'popularity' && renderMoviePopularity(movie)}
            {displayInfo === 'rating' && renderMovieRating(movie)}
          </div>
          <div className={styles.tileName}>{movie.title}</div>
        </>}
      </div>
    </div>
  }

  return (
    <div className={className}>
      {shelfTitle && renderTitle()}
      {loading
        ? 'loading...'
        : <Slider
            slideClassName={cx(styles.slide, { [styles.isShowExtra]: showExtra })}
            onChange={setCurrentSlide}
            slidesToShow={slidesToShow}
            showExtra={showExtra}
            arrows={arrows}
          >
        {movieList.map(movie => renderSlide(movie))}
      </Slider>}
    </div>
  )
}

Shelf.propTypes = {
  title: PropTypes.string,
  request: PropTypes.oneOf(['getTopRated', 'getDiscover', 'getUpcoming', 'getSimilar']).isRequired,
  displayInfo: PropTypes.oneOf(['popularity', 'rating', 'details', 'clean']),
  slidesToShow: PropTypes.number,
  showExtra: PropTypes.bool,
  tileOrientation: PropTypes.oneOf(['portrait', 'landscape']),
  onChange: PropTypes.func,
}

Shelf.defaultProps = {
  displayInfo: 'clean',
  slidesToShow: 2,
  showExtra: true,
  tileOrientation: 'portrait',
}

export default Shelf;
