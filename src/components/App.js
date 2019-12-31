import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'
import Home from './Home'
import Blog from './Blog'
import Nav from './Nav'


class App extends React.Component {
  handleScroll = (e) => {
    e.preventDefault()
    
    
  }
  render(){
    return (
      <Router>
        <div className = 'container'>
          <Nav onScroll = {this.handleScroll} />
          <Switch>
            <Route path = '/' exact component = {Home} />
            <Route path = '/blog' exact component = {Blog} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
