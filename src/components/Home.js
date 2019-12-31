import React from 'react'
import TypeWriter from './TypeWriter'
import Projects from './Projects'
import Nav from './Nav'

class Home extends React.Component{
  render(){
    return (
      <div className = 'home'>
        <Nav />
        <TypeWriter />
        <Projects />
      </div>
    )
  }
}

export default Home