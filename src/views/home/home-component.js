import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'

import cx from 'classnames'

import Shelf from '../../components/shelf'

import imageUrl from '../../helpers/image-url'

import styles from './home-style.styl'

const Home = () => {
  const [currentHeroMovie, setCurrentHeroMovie] = useState(null)
  const screenSize = useSelector(({ layout }) => layout.screenSize)

  const shelfConfig = {
    tileOrientation: ['large', 'xlarge'].includes(screenSize)
      ? 'landscape'
      : 'portrait',
    slidesToShow: screenSize !== 'small' ? 4 : 3,
    showExtra: ['small', 'medium'].includes(screenSize),
    arrows: ['large', 'xlarge'].includes(screenSize),
  }

  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        {currentHeroMovie && (
          <img
            className={styles.heroBack}
            src={imageUrl(currentHeroMovie.backdrop_path)}
            alt=""
          />
        )}
        <div className={styles.heroWrapper}>
          <div className={cx(styles.heroText, 'flow')}>
            <h1 className={styles.heroTitle}>O cinema nas suas mãos</h1>
            <h3 className={styles.heroSubTitle}>
              Filmes adicionados e selecionados exclusivamente para você
            </h3>
          </div>
          <Shelf
            {...shelfConfig}
            className={styles.heroSlider}
            displayInfo="details"
            request="getUpcoming"
            slidesToShow={1}
            onChange={setCurrentHeroMovie}
          />
        </div>
      </section>
      <section className={styles.shelfRow}>
        <Shelf
          {...shelfConfig}
          displayInfo="popularity"
          title="Os mais amados"
          request="getDiscover"
        />
      </section>
      <section className={styles.shelfRow}>
        <Shelf
          {...shelfConfig}
          displayInfo="rating"
          title="Os melhores avaliados"
          request="getTopRated"
        />
      </section>
    </div>
  )
}

Home.propTypes = {}

export default Home
