import React from 'react'
import PropTypes from 'prop-types'

import cx from 'classnames'

import Icon from '../icon'

import styles from './input.styl'

const Input = ({
  type,
  className,
  iconLeft,
  iconRight,
  onChange,
  onCancel,
  ...props
}) => {
  const handleChange = (evt) => {
    if (onChange) {
      onChange(evt.target.value, evt)
    }
  }

  return (
    <div className={styles.inputWrap}>
      <input
        onChange={handleChange}
        className={cx(
          styles.input,
          { [styles[type]]: type, [styles.withIconLeft]: iconLeft },
          className
        )}
        type={type}
        {...props}
      />
      {iconLeft && <Icon className={styles.iconLeft} name={iconLeft} />}
      {iconRight && (
        <Icon
          className={styles.iconRight}
          name={iconRight}
          onClick={onCancel}
        />
      )}
    </div>
  )
}

Input.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
  iconLeft: PropTypes.string,
  iconRight: PropTypes.string,
  onChange: PropTypes.func,
  onCancel: PropTypes.func,
}

Input.defaultProps = {}

export default Input
