import React from 'react'
import { NavLink } from 'react-router-dom'

const navbarHeight = 50
let stickyStyle = {position: 'fixed',
  top: '0',
  width: '100%'}

class Nav extends React.Component{
  state = {
    sticky : false,
  }
  handleScroll = () => {
    this.setState({
      sticky: window.pageYOffset > window.innerHeight - navbarHeight
    })
  }
  componentDidMount(){
    window.addEventListener('scroll',this.handleScroll)
  }
  render(){
    const { sticky } = this.state
    return(
      <nav style = {sticky ? stickyStyle : {} }>
        <ul className = ' row nav'>
          <li>
            <NavLink 
              to = '/' exact
              activeClassName = 'active'
              className = 'nav-button'
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink 
              to = '/blog' 
              activeClassName = 'active'
              className = 'nav-button'
            >
              Blog
            </NavLink>
          </li>
        </ul>
      </nav>
    )
  }
}

export default Nav