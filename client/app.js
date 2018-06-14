import React from 'react'

import {Navbar, Scene} from './components'
import Routes from './routes'

const App = () => {
  return (
    <div>
      <Navbar />
      <Scene/>
      <Routes />
    </div>
  )
}

export default App
