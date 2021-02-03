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
  description: 'Data scientist and undergraduate student. Roboticist. ',
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

                {/* Download resume */}
                <div className="row">
                  <div className="button-container" style={{ textAlign: 'left'}}>
                      <a href="https://github.com/jamesrosstwo/react-portfolio/raw/master/src/assets/resume.pdf" target="_blank">
                        <i className="fa fa-file-pdf-o" aria-hidden="true"></i> &nbsp; Download resume
                      </a>
                  </div>
                </div>

                </Gig>

                



            </div>

            <div className="col-md-3">

              <div className="sidebar-title">Skills</div>
              <ul style={{ background: '#fff', padding: '15px 20px'}}>
                <li><strong>Python:</strong> Three years of development experience</li>
                <li><strong>Spark:</strong> </li>
                <li><a href="https://www.smashingmagazine.com/2014/05/team-collaboration-closing-efficiency-gaps-responsive-design/" target="_blank">Smashing Magazine</a> - Team Collaboration And Closing Efficiency Gaps In Responsive Design</li>
                <li><a href="https://the-pastry-box-project.net/brian-krall/2014-february-19" target="_blank">The Pastry Box</a> - Go with your gut</li>
                <li>PyTorch</li>
              </ul>

              <Tools />
            </div>


          </div>

        </section>

        {/* Footer */}
        <Footer />

      </section>

    );
  }
}
