import React, { Component } from 'react';

/* component styles */
import { styles } from './footer.scss';

export class Footer extends Component {
  render() {
    return (
      <footer className={styles}>
        <strong>&nbsp; <a href="https://github.com/jamesrosstwo/portfolio-2021" target="_blank">View the source</a>&nbsp;🔓</strong>
        <br/>
      </footer>
    );
  }
}
