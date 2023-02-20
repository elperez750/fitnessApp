import React from 'react'
import logo from '../assets/fitness.png'

import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/styles.css';




export default function Navbar() {
    return (
        <div>
        <nav className="navbar bg-primary text-center" data-bs-theme="dark">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-auto">
                <img className="image" src={logo} alt="Fitness Logo" width="50" height="50" />
              </div>
              <div className="col">
                <ul className="nav nav-pills justify-content-center">
                  <li className="nav-item">
                    <a className="nav-link" href="/">Home</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/foods/new">Create New Food</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
