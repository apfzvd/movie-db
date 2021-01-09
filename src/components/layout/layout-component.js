
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import getScreenSize from '../../helpers/get-screen-size'

import styles from './layout.styl'

import cx from 'classnames';

const Layout = ({ children, ...actions }) => {
  const updateDimentions = () => {
    const screenSize = getScreenSize();
    console.log('screenSize', screenSize)
    actions.updateDimensions({ screenSize });
  }

  useEffect(() => {
    updateDimentions();

    window.addEventListener('resize', updateDimentions);
    return () => {
      window.removeEventListener('resize', updateDimentions);
    }
  }, [])

  const renderHeader = () => (
    <header className={styles.header}>
      header
    </header>
  )

  return (
    <div className={styles.wrapper}>
      {renderHeader()}
      <main>{children}</main>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node,
};

Layout.defaultProps = {};

export default Layout
