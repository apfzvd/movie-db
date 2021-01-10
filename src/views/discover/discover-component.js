import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import cx from 'classnames'

import imageUrl from '../../helpers/image-url'
import navigateTo from '../../helpers/navigate-to'
import truncate from '../../helpers/truncate'

import Input from '../../components/input'
import Icon from '../../components/icon'

import { movies } from '../../services/movies'

import styles from './discover-style.styl'

const Discover = () => {
  return <div>Discover</div>
}

Discover.propTypes = {}

export default Discover
