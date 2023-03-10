import React from 'react'
import { HashLink } from 'react-router-hash-link'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'

const Header = () => {
  return (
    <div className='container  '>
      <nav className="navbar navbar-expand-lg bg-light navbar-light">
        <div className="container-fluid">
          {/* <a className="navbar-brand" href="#"> <h3 className='brand-txt unbounded'>Cicero</h3></a> */}
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="Logo" width="180" className="d-inline-block align-text-top" />
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon "></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" smooth className='nav-link'> Home </Link>
              </li>
              <li className="nav-item">
                {/* <a className="nav-link" href="#">About</a> */}
                <HashLink to="#About" smooth className='nav-link'> About </HashLink>
              </li>
              <li className="nav-item">
                <HashLink to="#Services" smooth className='nav-link'> Services </HashLink>
              </li>
              <li className="nav-item">
                <Link to="/Tracking" smooth className='nav-link'> Tracking </Link>
              </li>
            </ul>
            {/* <button className="btn btn-primary brand-bg text-dark" type="submit" >Search</button> */}
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header