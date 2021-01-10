import React from 'react'
import { shallowConnected } from '../../helpers/testing'

import Search from './search-component'
import reducer from '../../components/layout/layout-store'

const props = { match: { params: 'teste' } }

describe('Search component', () => {
  describe('#render', () => {
    it('render correctly', () => {
      const wrapper = shallowConnected(<Search {...props} />, reducer, {
        getState: () => ({ layout: { screenSize: 'small' } }),
      })
      expect(wrapper.debug()).toMatchSnapshot()
    })
  })
})
