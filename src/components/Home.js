import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/Home.css';

class Home extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row no-gutters">
          <div className="col-12 col-md-4">
            <Link to="/design"><div className="img img-1"><span className="txt">Design</span></div></Link>
          </div>
          <div className="col-md-8">
            <div className="row no-gutters">
              <div className="col-md-6">
                <Link to="/gallery"><div className="img img-2"><span className="txt">Photos</span></div></Link>
              </div>
              <div className="col-md-6">
                <Link to="/education"><div className="img img-3"><span className="txt">Education</span></div></Link>
              </div>
            </div>
            <div className="row no-gutters">
              <div className="col-md-6">
                <Link to="/blog"><div className="img img-4"><span className="txt">Blog</span></div></Link>
              </div>
              <div className="col-md-6">
                <Link to="/about"><div className="img img-5"><span className="txt">About</span></div></Link>
              </div>
            </div>
          </div>
        </div>
        <div className="row no-gutters footer-container">
          <div className="col-12 d-flex justify-content-center">
            <div className="footer-text mx-auto">Feel free to contact me via any of the social media links above =D</div>
          </div>
        </div>
      </div>
    )
  }
}

export default Home;
