import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

import Shelf from '../../components/shelf'

import styles from './home-style.styl'

const Home = ({ topRated, ...actions }) => {
  useEffect(() => {
    actions.getTopRated();
  }, []);

  return (
    <div className={styles.container}>
      <Shelf type="info" request="getNowPlaying" slidesToShow={1} />
      <Shelf title="Top Rated" request="getTopRated" />
      <Shelf title="Loved" request="getTopLoved" />
    </div>
  )
}

Home.propTypes = {
  topRated: PropTypes.array,
}

export default Home
