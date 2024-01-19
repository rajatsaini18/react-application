import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
  return (
    <div>
      <nav className={`navbar  navbar-expand-lg navbar-${props.modeType} bg-${props.modeType}`} >
  <div className="container-fluid ">
    <Link className="navbar-brand" to='/'>Navbar</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to='/'>Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to='/about'>About</Link>
        </li>
       
      </ul>
      <form className="d-flex " role="search">
        <input className="form-control " type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success mx-2" type="submit">Search</button>
        
      </form>
      <div className={`form-check form-switch text-${props.modeType==='light'?'dark':'light' }`}>
         <input className="form-check-input " type="checkbox" role="switch" onClick={props.toggle} id="flexSwitchCheckDefault"/>
         <label className="form-check-label " htmlFor="flexSwitchCheckDefault" >Enable mode</label>
        </div>
    </div>
    <div className="dropdown">
  <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown
  </button>
  <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
    <li><button className="dropdown-item" type="button">Action</button></li>
    <li><button className="dropdown-item" type="button">Another action</button></li>
    <li><button className="dropdown-item" type="button">Something else here</button></li>
  </ul>
</div>
  </div> ̰
</nav>
    </div> 
  )
}
