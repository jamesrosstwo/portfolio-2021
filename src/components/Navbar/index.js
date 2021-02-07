import React, { Component } from 'react';

import './navbar.scss';

export class Navbar extends Component {
    constructor(props) {
      super(props);
      this.state = { isScrolled: false };
      console.log(this.state);
    }

    componentDidMount() {
      window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 78) {
        this.setState(() => {
          return { isScrolled: true };
        });
        console.log('scrolled');
      }
      else {
        this.setState(() => {
          return { isScrolled: false };
        });
        console.log('unscrolled');
      }
    }


    render() {
      return (
            <header className= {this.state.isScrolled ? 'navbar navbar-scrolled' : 'navbar'}>
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
        );
    }
}

export default Navbar;
