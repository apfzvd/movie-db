import React from 'react'
import { shallowConnected } from '../../helpers/testing'

import Film from './film-component'
import reducer from './film-store'

const props = { match: { params: 'teste' } }

describe('Film component', () => {
  describe('#render', () => {
    it('render correctly', () => {
      const wrapper = shallowConnected(<Film {...props} />, reducer, {
        layout: { screenSize: 'small' },
        film: { details: {} },
      })
      expect(wrapper.debug()).toMatchSnapshot()
    })
  })
})
