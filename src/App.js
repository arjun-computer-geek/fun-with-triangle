import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'
import AreaOfTriangle from './component/AreaOfTriangle'
import Footer from './component/Footer'
import Header from './component/Header'
import Hypotenuse from './component/Hypotenuse'
import IsTriangle from './component/IsTriangle'
import Quiz from './component/Quiz'


const App = () => {
  return (
    <Router>
      <Header/>
      <Route path = "/is-triangle" component={IsTriangle} exact />
      <Route path = "/quiz" component={Quiz} exact />
      <Route path = "/hypotenuse" component={Hypotenuse} exact />
      <Route path = "/area-of-triangle" component={AreaOfTriangle} exact />
      <Footer/>
    </Router>
  )
}

export default App;
