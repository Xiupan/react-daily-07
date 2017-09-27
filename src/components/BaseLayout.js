import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class BaseLayout extends Component {
  render(){
    return(
      <div>
        <header>
          <nav className="nav justify-content-center">
            <Link to="/">
              <li className="nav-link">
                Home
              </li>
            </Link>
            <Link to="/portfolio">
              <li className="nav-link">
                Portfolio
              </li>
            </Link>
            <Link to="/about">
              <li className="nav-link">
                About
              </li>
            </Link>
          </nav>
        </header>
        {this.props.children}
      </div>
    )
  }
}
 export default BaseLayout
