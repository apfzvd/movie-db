import React from 'react'
import Loader from 'react-loader-spinner'

const LoaderApp = () => {
  return (
    <Loader
      type="TailSpin"
      color="#DD3E3E"
      height={60}
      width={60}
      timeout={3000}
    />
  )
}

export default LoaderApp
