import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Global Optimization Strategist</title>
        <meta property="og:title" content="Global Optimization Strategist" />
      </Helmet>
    </div>
  )
}

export default Home
