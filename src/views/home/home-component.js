import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

import Slider from '../../components/slider'

import styles from './home-style.styl'

const Home = ({ topRated, ...actions }) => {
  useEffect(() => {
    actions.getTopRated();
  }, []);

  return (
    <div className={styles.container}>
      {topRated.map(movie => <div>{movie.title}</div>)}

      <Slider autoplay arrows dots>
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </Slider>
    </div>
  )
}

Home.propTypes = {
  topRated: PropTypes.array,
}

export default Home
