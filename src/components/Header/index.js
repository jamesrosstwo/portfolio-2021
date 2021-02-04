import React, { Component } from 'react';

/* component styles */
import { styles } from './header.scss';

export class Header extends Component {
  render() {
    return (
        <section className={styles}>
          <header className="top-header">
            <div className="container">
              <div className="row">
                <div className="col-xs-6">
                  <div className="site-title">
                    <a href="/">@james</a>
                  </div>
                  {/*<h3 className="status">Current status: <span className="shrugs">¯\_(ツ)_/¯</span> </h3> */}
                </div>
                <div className="col-xs-6 social text-right">
                  <a href="https://www.github.com/jamesrosstwo" target="_blank">
                    <i className="fa fa-github" aria-hidden="true"></i>
                  </a>
                  <a href="https://www.linkedin.com/in/jamesrosstwo" target="_blank">
                    <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                  </a>

                  <a href="https://open.spotify.com/user/guvo21ts23jdfc7wk3z2zznls" target="_blank">
                    <i className="fa fa-spotify" aria-hidden="true"></i>
                  </a>

                  <a href="https://www.instagram.com/jamesross0/" target="_blank">
                    <i className="fa fa-instagram" aria-hidden="true"></i>
                  </a>

                  <a href="https://www.twitter.com/james_r02" target="_blank">
                      <i className="fa fa-twitter" aria-hidden="true"></i>
                    </a>
                </div>
              </div>
            </div>
          </header>
          <header className="top-header navbar">
            <div className="container">
              <div className="row navbar-row">
                <div className="navbar-links col-xs-12">
                  <div className="navbar-link-container"><a className="navbar-link" href="/">Home</a></div>
                  <div className="navbar-link-container"><a className="navbar-link" href="#work-experience">Experience</a></div>
                  <div className="navbar-link-container"><a className="navbar-link" href="#projects">Projects</a></div>
                </div>
              </div>
            </div>
          </header>
        </section>
    );
  }
}

Header.propTypes = {

};
