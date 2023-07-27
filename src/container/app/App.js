import React, { useEffect } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';

import * as Path from 'config/routes'
import { Home } from 'container/pages'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path={Path.Home} Component={Home} />
      </Routes>
    </Router>
  )
}

export default App