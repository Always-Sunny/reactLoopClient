import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Typed from 'typed.js';
import '../assets/styles/Home.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      onComplete: false,
    };
  }
  componentDidMount() {
    const options = {
      strings: ['OOOOOOHHHRYAN'],
      // strings: ["Ryan Andrew Chacon"],
      typeSpeed: 40,
      backSpeed: 50,
      smartBackspace: true,
      showCursor: false,
      onComplete: () => { console.log(this.state), this.setState({ onComplete: true }), console.log(this.state); },
    };

    // this.el refers to the <span> in the render() method
    this.typed = new Typed(this.el, options);
  }

  componentWillUnmount() {
    // Make sure to destroy Typed instance on unmounting
    // to prevent memory leaks
    this.typed.destroy();
  }
  render() {
    const isCompleted = this.state.onComplete;
    let fadeIn = null;
    if (isCompleted) {
      fadeIn = <div className="subheader">Built With NodeJS and React</div>;
      }
    return (
      <div className="container-fluid">
        <div className="row no-gutters">

          <div className="col-12 mobile-intro align-items-center justify-content-center">
            <span
              className="mobile-intro-text"
              ref={(el) => { this.el = el; }}
              />
          </div>

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
