import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import Home from './Home'

const App = () => {
    return (
        <Router>
            <Route exact path='/home' component={Home} />
        </Router>
    )
}

export default App