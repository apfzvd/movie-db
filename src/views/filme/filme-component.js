import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'

import cx from 'classnames'

import Shelf from '../../components/shelf'

import imageUrl from '../../helpers/image-url'

import styles from './filme-style.styl'

const Filme = ({ match: { params } }) => {
  const screenSize = useSelector(({ layout }) => layout.screenSize)

  const shelfConfig = {
    tileOrientation: ['large', 'xlarge'].includes(screenSize)
      ? 'landscape'
      : 'portrait',
    slidesToShow: screenSize !== 'small' ? 4 : 3,
    showExtra: ['small', 'medium'].includes(screenSize),
    arrows: ['large', 'xlarge'].includes(screenSize),
  }

  const { movieId } = params

  return (
    <div>
      <section className={styles.header}>
        vid
      </section>

      <section className={styles.infoHead}>
        <h1 className={styles.title}>Name</h1>
        <div className={styles.count}>
          <div>Loved</div>
          <div>Starts</div>
        </div>
        <ul className={styles.nav}>
          <li>Info</li>
          <li>Reviews</li>
          <li>Trailers</li>
        </ul>
        <div className={styles.navContent}>Content!</div>
      </section>

      <section className={styles.crew}></section>

      <section className={styles.details}></section>

      <section className={styles.related}>
        <Shelf
          {...shelfConfig}
          displayInfo="clean"
          title="Filmes Relacionados"
          request="getSimilar"
          movieId={movieId}
        />
      </section>
    </div>
  )
}

Filme.propTypes = {}

export default Filme
