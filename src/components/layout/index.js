import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PropTypes from 'prop-types'

import { updateDimensions } from './layout-store'

import cx from 'classnames'

import getScreenSize from '../../helpers/get-screen-size'

import Header from './header'

import styles from './layout.styl'

const Layout = ({ children }) => {
  const dispatch = useDispatch()
  const screenSize = useSelector(({ layout }) => layout.screenSize)

  const updateDimentions = () => {
    const updatedScreenSize = getScreenSize()
    dispatch(updateDimensions({ screenSize: updatedScreenSize }))
  }

  useEffect(() => {
    updateDimentions()

    window.addEventListener('resize', updateDimentions)
    return () => {
      window.removeEventListener('resize', updateDimentions)
    }
  }, [])

  return (
    <div className={styles.wrapper}>
      <Header screenSize={screenSize} />
      <main>{children}</main>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node,
}

Layout.defaultProps = {}

export default Layout
