import React from 'react'
import PropTypes from 'prop-types'
import { Route } from 'react-router-dom'

import Layout from '../components/layout'

const AppRoute = ({
  component: Component,
  wrapper: Wrapper = Layout,
  withHeader = true,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      exact
      render={(matchProps) => (
        <Wrapper withHeader={withHeader}>
          <Component {...matchProps} />
        </Wrapper>
      )}
    />
  )
}

AppRoute.propTypes = {
  component: PropTypes.node,
  wrapper: PropTypes.node,
  withHeader: PropTypes.bool,
}

export default AppRoute
