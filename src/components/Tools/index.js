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
            <img className="networkx" src="https://i.imgur.com/ouu0tvV.png" data-tip data-for="networkx" alt="NetworkX" />
            <ReactTooltip effect="solid" id="networkx">
              <span>NetworkX</span>
            </ReactTooltip>
          </span>

          <span className="tool-wrapper">
            <img className="pyspark" src="https://i.imgur.com/KSwemBn.png" data-tip data-for="pyspark" alt="PySpark" />
            <ReactTooltip effect="solid" id="pyspark">
              <span>PySpark</span>
            </ReactTooltip>
          </span>

          <span className="tool-wrapper">
            <img className="linux" src="https://i.imgur.com/dZWVBUc.png" data-tip data-for="linux" alt="Linux" />
            <ReactTooltip effect="solid" id="linux">
              <span>Linux</span>
            </ReactTooltip>
          </span>

          <span className="tool-wrapper">
            <img src="https://i.imgur.com/TPlByt8.png" data-tip data-for="react" alt="React"/>
            <ReactTooltip effect="solid" id="react">
              <span>React</span>
            </ReactTooltip>
          </span>

          <span className="tool-wrapper">
            <img src="https://i.imgur.com/ZdEUojO.png" data-tip data-for="sass" alt="Sass"/>
            <ReactTooltip effect="solid" id="Sass">
              <span>Sass</span>
            </ReactTooltip>
          </span>

          <span className="tool-wrapper">
            <img className="node" src="https://i.imgur.com/nTxlWVn.jpg" data-tip data-for="node" alt="Node" />
            <ReactTooltip effect="solid" id="node">
              <span>Node</span>
            </ReactTooltip>
          </span>
          
          <span className="tool-wrapper">
            <img className="java" src="https://i.imgur.com/YLH8KJJ.png" data-tip data-for="java" alt="java"/>
            <ReactTooltip effect="solid" id="java">
              <span>Java</span>
            </ReactTooltip>
          </span>

          <span className="tool-wrapper">
            <img className="cpp" src="https://i.imgur.com/TIRbrXY.png" data-tip data-for="cpp" alt="C++" />
            <ReactTooltip effect="solid" id="cpp">
              <span>C++</span>
            </ReactTooltip>
          </span>

          <span className="tool-wrapper">
            <img className="arduino" src="https://i.imgur.com/xfwpe2t.jpeg" data-tip data-for="arduino" alt="Arduino" />
            <ReactTooltip effect="solid" id="arduino">
              <span>Arduino</span>
            </ReactTooltip>
          </span>

          <span className="tool-wrapper">
            <img className="git" src="https://i.imgur.com/lfyZlDJ.png" data-tip data-for="git" alt="Git" />
            <ReactTooltip effect="solid" id="git">
              <span>Git</span>
            </ReactTooltip>
          </span>
          
        </div>
      </section>
    );
  }
}

Tools.propTypes = {
};
