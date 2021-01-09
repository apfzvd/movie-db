import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { useLocation } from 'react-router-dom'

import cx from 'classnames'

import navigateTo from '../../../helpers/navigate-to'

import styles from '../layout.styl'

import Icon from '../../icon'
import Input from '../../input'

const Header = ({ screenSize }) => {
  const location = useLocation()

  function getItems() {
    const headerLargeItems = [
      {
        name: 'Home',
        path: '/',
        icon: 'home',
      },
      {
        name: 'Descubir',
        path: '/filme/aaa',
        icon: 'movie',
      },
      {
        name: 'Favoritos',
        path: '/favoritos',
        icon: 'favorite_border',
      },
    ]

    const headerItems = [...headerLargeItems]

    headerItems.splice(1, 0, {
      name: 'Busca',
      path: '/busca',
      icon: 'search',
    })

    return { headerLargeItems, headerItems }
  }

  const isCurrentSelected = (path) => {
    if (path === '/') {
      return location.pathname === path
    }

    return location.pathname.includes(path)
  }

  const renderLargeHeader = () => {
    const { headerLargeItems } = getItems()
    return (
      <div className={styles.headerLargeWrap}>
        <nav>
          <ul className={styles.headerLargeNav}>
            {headerLargeItems.map(({ name, path }) => (
              <li
                className={cx(styles.headerLargeItem, {
                  [styles.isActive]: isCurrentSelected(path),
                })}
                onClick={() => navigateTo(path)}
              >
                {name}
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.headerLargeSide}>
          <form onSubmit={() => navigateTo('/filme/555')}>
            <Input iconLeft="search" type="text" />
          </form>
          <div className={styles.headerItemPerf}>
            <img src="https://picsum.photos/60" alt="Perfil"/>
          </div>
        </div>
      </div>
    )
  }

  const renderHeader = () => {
    const { headerItems } = getItems()

    return (
      <nav>
        <ul className={styles.headerWrap}>
          {headerItems.map(({ name, icon, path }) => (
            <li
              className={cx(styles.headerItem, {
                [styles.isActive]: isCurrentSelected(path),
              })}
              onClick={() => navigateTo(path)}
            >
              <Icon name={icon} />
              <span className={styles.headerItemName}>{name}</span>
            </li>
          ))}

          <li
            className={cx(styles.headerItem, {
              [styles.isActive]: isCurrentSelected('/perfil'),
            })}
            onClick={() => navigateTo('/perfil')}
          >
            <div className={styles.headerItemPerf}>
              <img src="https://picsum.photos/60" alt="Perfil"/>
            </div>
            <span className={styles.headerItemName}>Perfil</span>
          </li>
        </ul>
      </nav>
    )
  }

  return (
    <header className={styles.header}>
      {['large', 'xlarge'].includes(screenSize)
        ? renderLargeHeader()
        : renderHeader()}
    </header>
  )
}

Header.propTypes = {
  screenSize: PropTypes.oneOf(['xlarge', 'large', 'medium', 'small']),
}

export default Header
