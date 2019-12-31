import React from 'react'

class Project extends React.Component{
  render(){
    const { project } = this.props
    const { name, pic, info, demo, code } = project
    return (
      <div className = 'project-card'>
        <div className = 'project-pic' >
           <img src = {pic} alt = 'project-pic'/>
        </div>
        <div className = 'project-content'>
          <h3>{name}</h3>
          <p>{info}</p>
          <div className = 'project-links'>
            <a className = 'icon' href = {demo}>
              <img style={{width:'30px',height:'30px'}} src = 'img/external-link.png' alt = 'external-link icon'/>
              <span >DEMO</span>
            </a>
            <a className = 'icon'href = {code}>
              <img  style={{width:'30px',height:'30px'}} src = 'img/github.png' alt = 'github icon'/>
              <span style = {{marginLeft:'5px'}}> CODE</span>
            </a>

          </div>
        </div>
      </div>
    )
  }
}

export default  Project