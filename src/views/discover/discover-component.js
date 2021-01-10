import React from 'react'
import Shelf from '../../components/shelf'

import styles from './discover-style.styl'

const Discover = () => {
  return (
    <div className={styles.discover}>
      <h1 className={styles.title}>Descobrir</h1>
      <section className={styles.shelfRow}>
        <Shelf
          displayInfo="clean"
          title="Nos cinemas agora"
          request="getNowPlaying"
        />
      </section>
      <section className={styles.shelfRow}>
        <Shelf
          displayInfo="clean"
          title="Em breve nos cinemas"
          request="getUpcoming"
        />
      </section>
    </div>
  )
}

Discover.propTypes = {}

export default Discover
