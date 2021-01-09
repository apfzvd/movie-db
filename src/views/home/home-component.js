import React, { useState } from 'react'
import cx from 'classnames'

import Shelf from '../../components/shelf'

import imageUrl from '../../helpers/image-url'

import styles from './home-style.styl'

const Home = () => {
  const [currentHeroMovie, setCurrentHeroMovie] = useState(null)

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
          displayInfo="popularity"
          title="Os mais amados"
          request="getDiscover"
        />
      </section>
      <section className={styles.shelfRow}>
        <Shelf
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
