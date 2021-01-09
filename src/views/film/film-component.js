import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import PropTypes from 'prop-types'

import cx from 'classnames'
import { fetchFilmDetails, fetchVideos } from './film-store'

import Shelf from '../../components/shelf'
import Icon from '../../components/icon'

import imageUrl from '../../helpers/image-url'

import styles from './film-style.styl'
import { goBack } from '../../helpers/navigate-to'

const Film = ({ match: { params } }) => {
  const dispatch = useDispatch()
  const { details, videos } = useSelector(({ film }) => film)
  const { movieId } = params

  useEffect(() => {
    if (movieId) {
      dispatch(fetchFilmDetails(movieId))
      dispatch(fetchVideos(movieId))
    }
  }, [params])

  const renderDetails = () =>
    details.loading ? (
      'Loading...'
    ) : (
      <section className={cx(styles.infoHead, 'flow')}>
        <div className={cx(styles.infoBase, 'flow')}>
          <h1 className={styles.title}>{details.data.title}</h1>
          <h4>{details.data.genres.join(', ')}</h4>
        </div>

        <div className={cx(styles.count, 'flow-col')}>
          <div className={cx(styles.countItem, 'flow-col')}>
            <Icon className={styles.popular} name="favorite" />
            {Math.ceil(details.data.popularity)}
          </div>
          <div className={cx(styles.countItem)}>
            <Icon className={styles.rating} name="grade" />
            {details.data.vote_average}/10
          </div>
        </div>

        <ul className={cx(styles.nav, 'flow-col')}>
          <li className={cx(styles.navItem, { [styles.isActive]: true })}>
            Info
          </li>
          <li className={cx(styles.navItem, { [styles.isActive]: false })}>
            Reviews
          </li>
          <li className={cx(styles.navItem, { [styles.isActive]: false })}>
            Trailers
          </li>
        </ul>

        <div className={styles.navContent}>{details.data.overview}</div>
      </section>
    )

  return (
    <div>
      <section className={styles.hero}>
        <div className={styles.header}>
          <Icon onClick={goBack} name="arrow_back" />

          <div className={cx('flow-col')}>
            <Icon name="favorite_border" />
            <Icon name="open_in_new" />
          </div>
        </div>

        <div className={styles.heroImage}>
          <span className={styles.play}>
            <Icon name="play_arrow" />
          </span>
          <img src={imageUrl(details.data.backdrop_path)} alt="" />
        </div>
      </section>

      <div className={styles.infoLeft}>{renderDetails()}</div>

      <div className={styles.infoRight}>
        <section className={styles.crew} />
        <section className={styles.details} />
      </div>

      <section className={styles.related}>
        <Shelf
          displayInfo="clean"
          title="Filmes Relacionados"
          request="getSimilar"
          searchId={movieId}
        />
      </section>
    </div>
  )
}

Film.propTypes = {}

export default Film
