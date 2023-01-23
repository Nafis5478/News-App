import React, { Component } from "react";

export class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar  navbar-expand-lg navbar-dark fixed-top bg-dark ">
          <div className="container-fluid">
            <li style={{color:'white'}}>NewsMonkey  </li>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="/">
                    Home
                  </a>
                </li>
                <li className="nav-items">
                  <a href="/business" className="nav-link">
                    Business
                  </a>
                </li>
                <li className="nav-items">
                  <a href="/entertainment" className="nav-link">
                    Entertainment
                  </a>
                </li>
               
                <li className="nav-items">
                  <a href="/health" className="nav-link">
                    Health
                  </a>
                </li>
                <li className="nav-items">
                  <a href="/science" className="nav-link">
                    Science
                  </a>
                </li>
                <li className="nav-items">
                  <a href="/sports" className="nav-link">
                    Sports
                  </a>
                </li>
                <li className="nav-items">
                  <a href="/technology" className="nav-link">
                    Technology
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
