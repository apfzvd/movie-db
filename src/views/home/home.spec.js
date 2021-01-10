import React from 'react'
import { shallow } from 'enzyme'

import Home from './home-component'

const props = {}

describe('Home component', () => {
  describe('#render', () => {
    it('render correctly', () => {
      const wrapper = shallow(<Home {...props} />)
      expect(wrapper.debug()).toMatchSnapshot()
    })
  })
})
