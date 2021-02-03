import React, { Component } from 'react';
import ReactTooltip from 'react-tooltip';

/* component styles */
import { styles } from './tools.scss';

export class Tools extends Component {
  render() {

    return (

      <section className={styles}>
        <div className="tools-and-techniques">

        <div className="sidebar-title">Technologies</div>

          <span className="tool-wrapper">
            <img src="http://sideproject.io/content/images/2016/09/reactjs.jpg" data-tip data-for="react" alt="React"/>
            <ReactTooltip effect="solid" id="react">
              <span>React</span>
            </ReactTooltip>
          </span>
          <span className="tool-wrapper">
            <img className="node" src="http://sideproject.io/content/images/2016/09/node.jpg" data-tip data-for="node" alt="Node" />
            <ReactTooltip effect="solid" id="node">
              <span>Node</span>
            </ReactTooltip>
          </span>
        </div>
      </section>
    );
  }
}

Tools.propTypes = {

};
