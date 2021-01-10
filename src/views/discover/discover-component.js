import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import cx from 'classnames'

import imageUrl from '../../helpers/image-url'
import navigateTo from '../../helpers/navigate-to'
import truncate from '../../helpers/truncate'

import Input from '../../components/input'
import Shelf from '../../components/shelf'

import { movies } from '../../services/movies'

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
