import React from 'react'

const t = "Hello there, \nMy name is Jay Li,\nI'm a Front-End developer ;)"

// const t = "中文测试\n那时的复合肥 v"
class TypeWriter extends React.Component{
  state = {
    text: '',
    i: 0,
    blink: false,
  }

  componentDidMount(){
    this.interval = setInterval(()=>{
      this.setState(({ text, i, blink }) => {
        if (i >= t.length){
          clearInterval(this.interval)
          this.handleBlink()
          return {
          }
        }
        return {
          text: text + t[i],
          i: i + 1
          }
      })
    },150)
  }
  handleBlink = () =>{
    this.interval = setInterval(()=>{
      this.setState(({ text, blink }) => ({
        text: blink ? text.slice(0,-1) : text + '|',
        blink: !blink
      }))
    },500)
  }
  componentWillUnmount(){
    window.clearInterval(this.interval)
  }

  render(){
    const { text } = this.state
    const sentences = text.split('\n')
    return (
      <div className = 'typewriter'>
        {sentences.map((s,i) => (
          <p key = {i}>
            {'>' + s }
          </p>
          ))}
      </div>
    )
  }
}
export default TypeWriter