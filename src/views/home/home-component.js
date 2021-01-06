import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

import styles from './home-style.styl'

const Home = ({ topRated, ...actions }) => {
  useEffect(() => {
    actions.getTopRated();
  }, []);

  return (
    <div className={styles.container}>
      {topRated.map(movie => <div>{movie.title}</div>)}
    </div>
  )
}

Home.propTypes = {
  topRated: PropTypes.array,
}

export default Home
