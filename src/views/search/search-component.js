import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import cx from 'classnames'

import imageUrl from '../../helpers/image-url'
import navigateTo from '../../helpers/navigate-to'

import Input from '../../components/input'

import { movies } from '../../services/movies'

import styles from './search-style.styl'

const Search = ({ match: { params } }) => {
  const screenSize = useSelector(({ layout }) => layout.screenSize)
  const { query } = params
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState([])

  async function getResults() {
    setLoading(true)
    try {
      const data = await movies.getSearchMovie(query)
      setLoading(false)

      if (data.data.results) {
        setResult(data.data.results)
      }
    } catch (err) {
      setLoading(false)
    }
  }

  useEffect(() => {
    getResults()
  }, [query])

  const submitSearch = (evt) => {
    evt.preventDefault()
    navigateTo(`/busca/${search}`)
  }

  const renderSearchInput = () =>
    ['small', 'medium'].includes(screenSize) && (
      <section className={styles.mobileSearch}>
        <form onSubmit={submitSearch}>
          <Input
            className={styles.input}
            onChange={setSearch}
            onCancel={() => setSearch('')}
            iconLeft="search"
            iconRight={search && 'close'}
            type="text"
            value={search}
          />
        </form>
      </section>
    )

  return (
    <div>
      {renderSearchInput()}
    </div>
  )
}

Search.propTypes = {
  match: PropTypes.object,
}

export default Search
