import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import styles from './button.styl'

const Button = ({ children, className, type, modifier, ...rest }) => {
  return (
    <button
      type={type}
      className={cx(className, styles.button, { [styles[modifier]]: modifier })}
      {...rest}
    >
      {children}
    </button>
  )
}

Button.propTypes = {
  type: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  modifier: PropTypes.string,
}

Button.defaultProps = {
  type: 'button',
}

export default Button
