import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <header className="header_section">
            <div className="container">
               <nav className="navbar navbar-expand-lg custom_nav-container ">
                  <Link className="navbar-brand" to="/"><img width="100" src="/images/logo.png" alt="#" /></Link>
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className=""> </span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                     <ul className="navbar-nav">
                        <li className="nav-item active">
                           <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                           <Link className="nav-link" to="/about">About Us</Link>
                        </li>
                        <li className="nav-item">
                           <Link className="nav-link" to="/product">Products</Link>
                        </li>
                        <li className="nav-item">
                           <Link className="nav-link" to="/contact">Contact</Link>
                        </li>
                        <li className="nav-item">
                           <Link className="nav-link" to="cart">
                             cart
                           </Link>
                        </li>
                     </ul>
                  </div>
               </nav>
            </div>
         </header>
    </div>
  )
}

export default Navbar
