import React from 'react'
import { shallow } from 'enzyme'

import Discover from './discover-component'

const props = {}

describe('Discover component', () => {
  describe('#render', () => {
    it('render correctly', () => {
      const wrapper = shallow(<Discover {...props} />)
      expect(wrapper.debug()).toMatchSnapshot()
    })
  })
})
