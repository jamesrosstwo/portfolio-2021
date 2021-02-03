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
            <img src="https://i.imgur.com/AREoYXf.png" data-tip data-for="python" alt="python"/>
            <ReactTooltip effect="solid" id="python">
              <span>Python</span>
            </ReactTooltip>
          </span>

          <span className="tool-wrapper">
            <img src="https://i.imgur.com/4fUS1Bp.png" data-tip data-for="pytorch" alt="PyTorch"/>
            <ReactTooltip effect="solid" id="pytorch">
              <span>PyTorch</span>
            </ReactTooltip>
          </span>

          <span className="tool-wrapper">
            <img src="https://i.imgur.com/TPlByt8.png" data-tip data-for="react" alt="React"/>
            <ReactTooltip effect="solid" id="react">
              <span>React</span>
            </ReactTooltip>
          </span>
          <span className="tool-wrapper">
            <img className="node" src="https://i.imgur.com/rQFR6kY.png" data-tip data-for="node" alt="Node" />
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
