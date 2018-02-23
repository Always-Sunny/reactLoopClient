import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import "../assets/styles/Header.css";

class Header extends Component {
  render() {
    return (

      <nav className="navbar navbar-expand-md navbar-fixed-top navbar-light bg-white main-nav">
        <div className="container-fluid">
          <ul className="nav navbar-nav">
            <li className="nav-item nav-home nav-img">
              <a href="/" className="nav-link link-home"> </a>
            </li>
          </ul>
          <ul className="nav navbar-nav mx-auto nav-ul">
            <li className="nav-item nav-sml"><a href="https://www.etsy.com/shop/AlwaysSunnySD/" target="_blank" rel="noopener noreferrer" className="nav-link etsy-link img-link"> </a></li>
            <li className="nav-item nav-sml"><a href="https://soundcloud.com/alwayssunnysd" rel="noopener noreferrer" className="nav-link sc-link img-link"> </a></li>
            <li className="nav-item nav-sml"><a href="https://medium.com/@always_sunny" target="_blank" rel="noopener noreferrer" className="nav-link medium-link img-link"> </a></li>
            <li className="nav-item nav-sml"><a href="https://open.spotify.com/user/1244883989?si=z-k7wiw4QJ6aZ6QtZM8rzA" target="_blank" rel="noopener noreferrer" className="nav-link spotify-link img-link"> </a></li>
            <li className="nav-item nav-sml"><a href="https://twitter.com/OhRyanC" target="_blank" rel="noopener noreferrer" className="nav-link twitter-link img-link"> </a></li>
            <li className="nav-item nav-sml"><a href="skype:ryan.chacon103?chat" rel="noopener noreferrer" className="nav-link skype-link img-link"> </a></li>
            <li className="nav-item nav-sml"><a href="https://www.linkedin.com/in/ryan-chacon/" target="_blank" rel="noopener noreferrer" className="nav-link ln-link img-link"> </a></li>
            <li className="nav-item nav-sml"><a href="https://www.facebook.com/chacon.ryan" target="_blank" rel="noopener noreferrer" className="nav-link fb-link img-link"> </a></li>
            <li className="nav-item nav-sml"><a href="https://github.com/always-sunny" target="_blank" rel="noopener noreferrer" className="nav-link github-link img-link"> </a></li>
            <li className="nav-item nav-sml"><a href="mailto:ryanandrewchacon@gmail.com" className="nav-link gmail-link img-link"> </a></li>
          </ul>
          <ul className="nav navbar-nav nav-prof nav-img">
            <li className="nav-item">
              <a href="/" className="nav-link"> </a>
            </li>
          </ul>
        </div>
      </nav>

    )
  }
}

export default Header;
