import React from 'react'
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom'

import Layout from '../components/layout'

const AppRoute = ({ component: Component, wrapper: Wrapper = Layout, ...rest }) => {
  return (
    <Route
      {...rest}
      exact
      render={matchProps => (
        <Wrapper>
          <Component {...matchProps} />
        </Wrapper>
      )}
    />
  );
}

AppRoute.propTypes = {
  component: PropTypes.node,
  wrapper: PropTypes.node,
}

export default AppRoute
