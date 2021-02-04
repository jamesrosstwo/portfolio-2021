import React, { Component } from 'react';

/* component styles */
import { styles } from './browserHeader.scss';

export class BrowserHeader extends Component {
  render() {
    const { title, showBioPic, showPageDescription, pageDescription, headingClassString, titleClass } = this.props;
    return (
      <section className={styles}>
        <div className="browser">
          <div className="browser-top">
            <div className="browser-dots"></div>
          </div>

          <div className={`heading-title ${titleClass}`}>
            {showBioPic &&
              <img src="https://i.imgur.com/qAs6rJY.jpg" className="bio-pic" width="" alt="BK" />
            }
            <h1 className={headingClassString}>
              {title}
            </h1>
            {showPageDescription &&
              <p className="description text-center">
                {pageDescription}
              </p>
            }

            <div className="button-container">
                <a className="button-container-link" href="mailto:james@jamesross.xyz" target="_blank">
                <i className="fa fa-envelope-o" aria-hidden="true"></i> &nbsp; Get in touch
                </a>
                <a className="button-container-link" href="https://raw.githubusercontent.com/jamesrosstwo/portfolio-2021/main/src/assets/resume.pdf" target="_blank">
                  <i className="fa fa-file-pdf-o" aria-hidden="true"></i> &nbsp; Download resume
                </a>
              &nbsp; &nbsp;
            </div>


          </div>

        </div>
    </section>

    );
  }
}

BrowserHeader.propTypes = {
   title: React.PropTypes.string,
   titleClass: React.PropTypes.string,
   showBioPic: React.PropTypes.bool,
   showPageDescription: React.PropTypes.bool,
   headingClassString: React.PropTypes.string,
   pageDescription: React.PropTypes.string,
};
