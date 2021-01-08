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
      <Shelf displayInfo="info" request="getUpcoming" slidesToShow={1} />
      <Shelf displayInfo="rating" title="Top Rated" request="getTopRated" />
      <Shelf displayInfo="popularity" title="Loved" request="getDiscover" />
    </div>
  )
}

Home.propTypes = {
  topRated: PropTypes.array,
}

export default Home
