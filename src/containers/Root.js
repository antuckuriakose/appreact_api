import React ,{Component}      from 'react'
import Navbar                  from './Navbar'

export default class Root extends Component {

  render() {
    return (
      <div>
        <Navbar/>
        <div className="container">
          {this.props.children} 
        </div>
      </div>
    )
  }
}
