import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class BaseLayout extends Component {
  render(){
    return(
      <div>
        <header>
          <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
            <Link to="/">
              <div className="nav-bar brand">
                Home
              </div>
            </Link>
            <Link to="/portfolio">
              <div className="nav-link">
                Portfolio
              </div>
            </Link>
            <Link to="/about">
              <div className="nav-link">
                About
              </div>
            </Link>
          </nav>
        </header>
        BaseLayout
        {this.props.children}
        <footer>
          This is a footer.
        </footer>
      </div>
    )
  }
}
 export default BaseLayout
