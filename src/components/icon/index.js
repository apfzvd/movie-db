import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

const Icon = ({ name, className, ...elementProps }) => {
  return (
    <i className={cx('material-icons', className)} {...elementProps}>
      {name}
    </i>
  )
}

Icon.propTypes = {
  name: PropTypes.string,
  className: PropTypes.string,
}

Icon.defaultProps = {
  name: 'person', // https://material.io/tools/icons/?style=baseline
}

export default Icon
