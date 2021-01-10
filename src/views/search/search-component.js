import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import cx from 'classnames'

import imageUrl from '../../helpers/image-url'
import navigateTo from '../../helpers/navigate-to'
import truncate from '../../helpers/truncate'

import Input from '../../components/input'
import Icon from '../../components/icon'
import Loader from '../../components/loader'

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
    if (query) {
      getResults()
      setSearch(query)
    }
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

  const addDefaultSrc = (evt) => {
    evt.target.src = 'http://placehold.it/500x740?text=sem%20imagem%20:('
  }

  const goToMovie = (id) => () => navigateTo(`/filme/${id}`)

  const getOverview = (overview) =>
    overview || 'Ops, parece que esse filme não tem resumo!'

  const renderFilms = ({ id, title, poster_path, popularity, overview }) => (
    <div onClick={goToMovie(id)} className={styles.films}>
      <div className={styles.filmLeft}>
        <img
          className={styles.filmImg}
          onError={addDefaultSrc}
          src={imageUrl(poster_path)}
          alt={title}
        />
      </div>

      <div className={cx(styles.filmRight, 'flow')}>
        <h4 className={styles.filmTitle}>{title}</h4>
        <div className={cx(styles.countItem, 'flow-col')}>
          <Icon className={styles.popular} name="favorite" />
          {Math.ceil(popularity)}
        </div>
        <div>
          {['small', 'medium'].includes(screenSize)
            ? truncate(getOverview(overview), 100)
            : getOverview(overview)}
        </div>
      </div>
    </div>
  )

  const renderResults = () =>
    loading ? <Loader /> : result.map((res) => renderFilms(res))

  return (
    <div className={styles.search}>
      {renderSearchInput()}
      <section className={cx(styles.results, 'flow-lg')}>
        {renderResults()}
        {!result.length && !loading && (
          <div className={cx(styles.noResults, 'flow')}>
            <p>Em que filme você está pensando? 🤔</p>
            <p>🕵️‍♀️ Tente usar a barra de busca!</p>
          </div>
        )}
      </section>
    </div>
  )
}

Search.propTypes = {
  match: PropTypes.object,
}

export default Search
