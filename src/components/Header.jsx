import React from 'react'

const Header = () => {
  return (
    <div>

<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
  
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Gestion de Personas</a>
        </li>

      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>


    </div>
  )
}

export default Header