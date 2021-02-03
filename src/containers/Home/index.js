import React, { Component } from 'react';
import DocumentMeta from 'react-document-meta';

// UI components
import { Header } from 'components/Header';
import { BrowserHeader } from 'components/BrowserHeader';
import { Gig } from 'components/Gig';
import { FeaturedWork } from 'components/FeaturedWork';

import { Tools } from 'components/Tools';
import { Footer } from 'components/Footer';



const metaData = {
  title: 'James Ross',
  description: 'Data scientist and undergraduate student. Roboticist.',
  meta: {
    charset: 'utf-8',
  },
};

export class Home extends Component {

  render() {

    return (
      <section>
        <DocumentMeta {...metaData} />

        <Header />

        <div className="container">
          <div className="col-xs-12">
            <BrowserHeader
              showBioPic
              title={["Hi, I'm James.",
                      <span className="explainer"> My work includes data science, machine learning applied to robotics, and computer vision.</span>
                    ]}
              headingClassString="text-left"
              titleClass="home"
            />
          </div>
        </div>

        <section className="container">
            <div className="row">
              <div className="col-md-9">

            {/* RBC work term two */}
            <Gig
              companyLogo="https://i.imgur.com/LKofYur.jpg"
              companyName="Royal Bank of Canada"
              position="Data Scientist, Winter Student"
              date="January 2021 - Present"
              location="Toronto, Canada (Remote)"
              description="Improving upon the graph based approach to detect synthetic accounts, and developing a pipeline to put this model into production.

              Working to enrich a graph database to make better inferences and developing a model to identify important areas of the graph."
            ></Gig>

            {/* RBC work term one */}
            <Gig
              companyLogo="https://i.imgur.com/LKofYur.jpg"
              companyName="Royal Bank of Canada"
              position="Data Scientist, Summer Student"
              date="May 2020 - August 2020"
              location="Toronto, Canada (Remote)"
              description={["Developed a graph-based solution to detect clusters of synthetic accounts used for fraud within RBC. The approach was able to detect known synthetic accounts and discover new, previously unseen synthetic accounts.", <br></br>, <br></br>, "The new graph-based solution is able to discover clusters of synthetic accounts automatically and proactively, where previously synthetic accounts were found manually and after the fraud was committed. Using this solution in the future, synthetic accounts will be detected and closed before the fraud is committed."]}
            ></Gig>

            {/* IBM work term two */}
            <Gig
              companyLogo="https://i.imgur.com/jMGGLtl.jpg"
              companyName="IBM"
              position="Software Development Intern"
              date="July 2019 - August 2019"
              location="Markham, Ontario"
              description={["Created challenge functionality for the portals on the IBM Developer Skills Network allowing users to test their learning and compete with their team.", <br></br>, <br></br>, "Upgraded portals' version of OpenEdX and helped develop a structure to maintain an up-to-date fork of OpenEdX.", <br></br>, <br></br>, "Upgraded the functionality of the portals' chatbots to give portal admins more options for customization."]}
              >

                <FeaturedWork
                  featuredWorkTitle="Featured Portal"
                  featuredCase="APD Learning"
                  featuredCaseLink="https://apdlearning.skillsnetwork.site/"
                >
                </FeaturedWork>
              </Gig>

               {/* IBM work term one */}
               <Gig
                 companyLogo="https://i.imgur.com/jMGGLtl.jpg"
                 companyName="IBM"
                 firstGig
                 position="Software Development Intern"
                 date="July 2018 - August 2018"
                 location="Markham, Ontario"
                 description="Used Ruby on Rails and MongoDB to develop various administrative tools for the portals on the IBM Developer Skills Network"
                >

                

                </Gig>

                



            </div>

            <div className="col-md-3">
              <Tools />
            </div>


          </div>

        </section>

        <div className="container">

          <div className="col-xs-12">
           
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

        {/* Footer */}
        <Footer />

      </section>

    );
  }
}
