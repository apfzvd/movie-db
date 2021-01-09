import React from 'react'
import PropTypes from 'prop-types'

import cx from 'classnames'

import Icon from '../icon'

import styles from './input.styl'

const Input = ({ type, className, iconLeft, ...props }) => {
  return (
    <div className={styles.inputWrap}>
      {iconLeft && <Icon className={styles.iconLeft} name={iconLeft} />}
      <input
        className={cx(
          styles.input,
          { [styles[type]]: type, [styles.withIconLeft]: iconLeft },
          className
        )}
        type={type}
        {...props}
      />
    </div>
  )
}

Input.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
  iconLeft: PropTypes.string,
}

Input.defaultProps = {}

export default Input
