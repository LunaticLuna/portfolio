import React from 'react'
import Project from './Project'
const projects = [{
 name: 'Match Game',
 pic: 'http://placekitten.com/200/300',
 info: 'matching game info',
 demo: 'https://lunaticluna.github.io/MatchingGame/',
 code: 'https://github.com/LunaticLuna/MatchingGame'
},{
 name: 'Match Game2',
 pic: 'http://placekitten.com/200/300',
 info: 'matching game info',
 demo: 'https://lunaticluna.github.io/MatchingGame/',
 code: 'https://github.com/LunaticLuna/MatchingGame'
},{
 name: 'Match Game3',
 pic: 'http://placekitten.com/200/300',
 info: 'matching game info',
 demo: 'https://lunaticluna.github.io/MatchingGame/',
 code: 'https://github.com/LunaticLuna/MatchingGame'
}
]

class Projects extends React.Component{
  render(){
    return (
      <ul className = 'projects'>
        {projects.map((project) => 
          <li className = 'project' key = {project.name}>
            <Project project = {project} />
          </li>
          )}
      </ul>

    )
  }
}

export default Projects