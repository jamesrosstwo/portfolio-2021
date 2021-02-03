import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import DocumentMeta from 'react-document-meta';

// UI components
import { Header } from 'components/Header';
import { BrowserHeader } from 'components/BrowserHeader';
import { Footer } from 'components/Footer';

/* global styles for app */
import './projects.scss';

const metaData = {
  title: 'James Ross',
  description: 'Data scientist and undergraduate student. Roboticist. ',
  meta: {
    charset: 'utf-8',
  },
};

export class Projects extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const descriptionString = "Here are some of the more recent projects I have worked on, ranging from small NLP experiments to large, multi-disciplinary, team-built products.";

    return (
      <section>
        <DocumentMeta {...metaData} />

        <Header />

        <div className="container">

          <div className="col-xs-12">
            <BrowserHeader
             title="Projects"
             titleClass="projects"
             headingClassString="text-center"
             showPageDescription
             pageDescription={descriptionString}
            />
          </div>

            <div className="row micro-container">
              <div className="col-xs-12 col-sm-6 col-sm-push-6 micro-item ">
                <div className="section-title micro-item"><a href="http://bearubc.com/" target="_blank">BEAR UBC</a></div>
                <br></br>
                <p>BEAR UBC is a team for the purpose of developing smart, reliable and affordable bionic technology. We plan to compete in CYBATHLON 2021's powered arm prosthesis race.
                <br></br> <br></br>

                On BEAR, I lead the Analytics team: a small group of six students using information from on-board sensors to improve usability and functionality of the arm. We are developing solutions such as determining the optimal grip pattern to pick up held objects, haptic feedback using vibrational motors, and shape classification of held objects.</p>
              </div>

              <div className="col-xs-12 col-sm-6 col-sm-pull-6 micro-item">
                <img src="https://i.imgur.com/F5irJEV.jpeg" alt="How it works" />
              </div>
            </div>

            <div className="row micro-container">
              <div className="col-xs-12 col-sm-6 ">
                <div className="section-title micro-item"><a href="https://www.ubcrobomaster.com/" target="_blank">UBC Robomaster</a></div><br></br>
                <p>UBC Robomaster is a student team building a fleet of robots and developing a reinforcement-learning solution to DJI's Robomaster AI Challenge.</p>
                <br></br>
                <p>I am currently the technical lead of UBC Robomaster, leading the design of the approach we take to solve this problem.</p>
              </div>

              <div className="col-xs-12 col-sm-6 micro-item">
                <img src="https://i.imgur.com/E3oUq2t.jpeg" alt="Float labels" />
              </div>
            </div>
            
            <div className="row micro-container hidden-xs last">
              <div className="col-xs-12 col-sm-6 col-sm-push-6">
                <div className="section-title micro-item"><a href="https://devpost.com/software/polygraph-njl81d" target="_blank">Polygraph</a></div><br></br>
                <p>Polygraph is a hackathon project designed to counter videographic misinformation online: it timestamps and captions dubious claims in real time, overturning them with links to reliable statistics or articles to refute them.</p>
                <br></br>
                <p>As a chrome extension, it removes the need for users to manually input video links or download the video themselves; it detects the presence of a YouTube webpage, and will scan for false claims at the click of a button.</p>
              </div>

              <div className="col-xs-12 col-sm-6 col-sm-pull-6 micro-item">
                <img src="https://i.imgur.com/rO3nSJi.jpeg" alt="Float labels" />
              </div>
            </div>

        </div>

        <Footer />

      </section>
    );
  }
}
