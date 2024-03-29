import React, {Component} from 'react';
import DocumentMeta from 'react-document-meta';
import Typewriter from 'typewriter-effect';

// UI components
import {Header} from 'components/Header';
import {BrowserHeader} from 'components/BrowserHeader';
import {Gig} from 'components/Gig';
import {FeaturedWork} from 'components/FeaturedWork';

import {Tools} from 'components/Tools';
import {Footer} from 'components/Footer';


const metaData = {
    title: 'James Ross', description: 'Data scientist and undergraduate student. Roboticist.', meta: {
        charset: 'utf-8',
    },
};

export class Home extends Component {

    render() {

        return (<section>
            <DocumentMeta {...metaData} />

            <Header/>

            <div className="container">
                <div className="col-xs-12">
                    <BrowserHeader
                        showBioPic
                        title={["Hi, I'm James. ", <span className="explainer">
                        I'm an undergradate student interested in all things:
                        <Typewriter
                            options={{
                                strings: ["Data Science", "Robotics", "Computer Vision", "Software Engineering", "Prosthesis", "Cyber Security", "Bioinformatics"],
                                autoStart: true,
                                loop: true,
                                delay: 33,
                                deleteSpeed: 70,
                            }}
                        />
                      </span>]}
                        headingClassString="text-left"
                        titleClass="home"
                    />
                </div>
            </div>


            <section className="container" id="work-experience">
                <div className="section-header-container" id="work-experience-header-container">
                    <h1 className="section-header" id="work-experience-header">Work Experience</h1>
                </div>
                <div className="row">
                    <div className="col-md-9">
                        {/* The Vector Institute */}
                        <Gig
                            companyLogo="https://i.imgur.com/bJipTiE.png"
                            companyName="The Vector Institute"
                            position="Research Assistant"
                            date="May 2022 - December 2022"
                            location="Vancouver, Canada (Remote)"
                            description={["Designed state-of-the-art continual learning techniques for deployment in an augmented reality setting using PyTorch, leveraging RCNN and transformer-based machine learning architectures.",
                                <br></br>,
                                "Built a high-performance environment for rapid prototyping, training, and benchmarking of incremental object detection algorithms across three datasets, parallelized across the Vector GPU Cluster.",
                                <br></br>,
                                "Preparing an academic paper of findings for submission to leading computer vision conferences."]}
                        >
                            < FeaturedWork
                                featuredWorkTitle="Technologies Used"
                                featuredCase=""
                                featuredCaseLink="/"
                            >
                                <ul>
                                    <li>Implementation: Python</li>
                                    <li>Architecture: SLURM</li>
                                    <li>Deep Learning: PyTorch</li>
                                </ul>
                            </FeaturedWork>
                        </Gig>
                        {/* RBC work term two */}
                        <Gig
                            companyLogo="https://i.imgur.com/LKofYur.jpg"
                            companyName="Royal Bank of Canada"
                            position="Data Scientist, Responsible AI"
                            date="May 2021 - August 2021"
                            location="Toronto, Canada (Remote)"
                            description={["Created an python package using state of the art NLP techniques to mask personally identifying information from banking-related documents. With over 90% accuracy, this package was able to outperform standard solutions such as Microsoft Presidio and AWS Macie.",
                                <br></br>,
                                "Designed state of the art causal ML techniques to estimate the effect of physical risks such as flooding on the estimated value of homes alongside a user-friendly python API.",
                                <br></br>,
                                "Presented the causal ML package to VPs of data analytics, alongside submitting a patent application"]}
                        >
                            < FeaturedWork
                                featuredWorkTitle="Technologies Used"
                                featuredCase=""
                                featuredCaseLink="/"
                            >
                                <ul>
                                    <li>Implementation: Python</li>
                                    <li>Graph Libraries: Networkx, Neo4J</li>
                                    <li>Data Processing: PySpark, Pandas</li>
                                </ul>
                            </FeaturedWork>
                        </Gig>

                        {/* RBC work term one */}
                        <Gig
                            companyLogo="https://i.imgur.com/LKofYur.jpg"
                            companyName="Royal Bank of Canada"
                            position="Data Scientist, Summer Student"
                            date="May 2020 - August 2020"
                            location="Toronto, Canada (Remote)"
                            description={["Developed a graph-based solution using networkx and pyspark to detect clusters of synthetic accounts used for fraud within RBC. The approach was able to detect known synthetic accounts and discover new, previously unseen synthetic accounts.",
                                <br></br>,
                                <br></br>, "The new graph-based solution is able to discover clusters of synthetic accounts automatically and proactively, where previously synthetic accounts were found manually and after the fraud was committed. Using this solution in the future, synthetic accounts will be detected and closed before the fraud is committed."]}
                        >
                            <FeaturedWork
                                featuredWorkTitle="Technologies Used"
                                featuredCase=""
                                featuredCaseLink="/"
                            >
                                <ul>
                                    <li>Implementation: Python</li>
                                    <li>Graph Libraries: Networkx, Neo4J</li>
                                    <li>Data Processing: PySpark, Pandas</li>
                                </ul>
                            </FeaturedWork>
                        </Gig>

                        {/* IBM work term two */}
                        <Gig
                            companyLogo="https://i.imgur.com/jMGGLtl.jpg"
                            companyName="IBM"
                            position="Software Development Intern"
                            date="July 2019 - August 2019"
                            location="Markham, Ontario"
                            description={["Created challenge functionality for the portals on the IBM Developer Skills Network allowing users to test their learning and compete with their team.",
                                <br></br>,
                                <br></br>, "Upgraded portals' version of OpenEdX and helped develop a structure to maintain an up-to-date fork of OpenEdX.",
                                <br></br>,
                                <br></br>, "Upgraded the functionality of the portals' chatbots to give portal admins more options for customization."]}
                        >


                            <FeaturedWork
                                featuredWorkTitle="Technologies Used"
                                featuredCase=""
                                featuredCaseLink="/"
                            >
                                <ul>
                                    <li>Implementation: Ruby on Rails</li>
                                    <li>Chatbot: IBM Watson</li>
                                    <li>Database: MongoDB</li>
                                    <li>UI: HTML, Sass</li>
                                </ul>
                            </FeaturedWork>
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

                            <FeaturedWork
                                featuredWorkTitle="Technologies Used"
                                featuredCase=""
                                featuredCaseLink="/"
                            >
                                <ul>
                                    <li>Implementation: Ruby on Rails</li>
                                    <li>Database: MongoDB</li>
                                    <li>UI: HTML, Sass</li>
                                </ul>
                            </FeaturedWork>
                        </Gig>
                    </div>

                    <div className="col-md-3">
                        <Tools/>
                    </div>
                </div>

            </section>

            <div className="container">

                <div className="col-xs-12">

                    <div className="section-header-container" id="projects">
                        <h1 className="section-header">Personal Projects & Teams</h1>
                    </div>
                </div>
                <div className="row micro-container">
                    <div className="col-xs-12 col-sm-6 ">
                        <div className="section-title micro-item"><a href="https://www.ubcdsci.club/"
                                                                     target="_blank">UBC Data Science Club</a></div>
                        <br></br>
                        <p>
                            The Data Science Club aims provide students an opportunity to learn about the field of
                            data
                            science and subjects related to data science. Members are able to attend events such as
                            workshops, learn from mentors, and join a team to build a project or enter data science
                            competitions.</p>
                        <br></br><br></br>
                        <p>
                            Launched the data science club, hosting large scale collaborative projects, in-depth
                            technical workshops, and a student conference.
                            Brought in over 600 members to our community, with 270 conference registrations as
                            president in 2023.

                        </p>
                        <br></br>
                        <p>
                            Leading 30 UBC students in developing four projects ranging from endangered species
                            detection on fishing boats to public space usage estimation.
                        </p>
                    </div>

                    <div className="col-xs-12 col-sm-6 micro-item">
                        <img src="https://i.imgur.com/YjzLrch.png" alt="Float labels"/>
                    </div>
                </div>

                <div className="row micro-container">
                    <div className="col-xs-12 col-sm-6 col-sm-push-6 micro-item ">
                        <div className="section-title micro-item"><a href="http://ubcbionics.com/" target="_blank">UBC
                            Bionics</a></div>
                        <br></br>
                        <p>UBC Bionics is an undergraduate engineering design team at the University of British
                            Columbia in Vancouver, focused on the advancement of bionics.
                        </p>
                        <br></br>

                        <p>
                            Led a team of seven to improve the usability of powered-arm prosthesis through designing
                            novel computer vision techniques, as well as an AI-powered brain computer interface.
                        </p>
                        <br></br>
                        <p>
                            Designed and implemented solutions to challenging bionics problems, including grip
                            pattern optimization, force-based haptic feedback, automated battery management, an
                            electroencephalography-based control system, and more. Competing internationally in ETH
                            Zurich’s CYBATHLON 2024.
                        </p>
                </div>

                <div className="col-xs-12 col-sm-6 col-sm-pull-6 micro-item">
                    <img src="https://i.imgur.com/PPNILgQ.png" alt="How it works"/>
                </div>
            </div>

            <div className="row micro-container">
                <div className="col-xs-12 col-sm-6 ">
                    <div className="section-title micro-item"><a href="https://www.ubcrobomaster.com/"
                                                                 target="_blank">UBC
                        Robomaster</a></div>
                    <br></br>
                    <p>UBC Robomaster is a student team building a fleet of robots and developing a
                        reinforcement-learning solution to DJI's Robomaster AI Challenge.</p>
                    <br></br>
                    <p>I am currently the technical lead of UBC Robomaster, leading the design of the approach
                        we take
                        to solve this problem. The current solution involves a simulation, brain, autoaim, and
                        strategist.
                        <br></br>
                        The simulation is used to generate data and train models. The brain is a computer that
                        is not
                        on-board the robot. It takes camera information from around the field to determine
                        things like
                        field layout and robot position. Autoaim is used by the on-board camera to aim at enemy
                        robots
                        in its field of view and shoot pellets at them. The strategist is the
                        reinforcement-learning
                        model that the robots use to determine where to move, and the general area in which to
                        look.
                    </p>
                </div>

                <div className="col-xs-12 col-sm-6 micro-item">
                    <img src="https://i.imgur.com/E3oUq2t.jpeg" alt="Float labels"/>
                </div>
            </div>

            <div className="row micro-container">
                <div className="col-xs-12 col-sm-6 col-sm-push-6">
                    <div className="section-title micro-item"><a href="https://www.uroubc.com/rex/"
                                                                 target="_blank">URO REX</a></div>
                    <br></br>

                    <p>Nuclear energy has been one of the major energy sources in many countries for nearly half
                        a century. While the method of energy generation does not produce greenhouse gases, it
                        produces radioactive nuclear waste through nuclear fission of fissile nuclei such as
                        U-235. Many of the fission products released by nuclear reactors are long-lived and
                        highly radioactive, and are considered high level waste (HLW). An estimated 12,000
                        tonnes of HLW are added to storage worldwide annually. </p>
                    <br></br>
                    <p>The current disposal solution of HLW is to place them in deep geological repositories,
                        whose risk is significant. An alternative solution would be to transmute these fission
                        products into stable isotopes or isotopes with shorter half-lives, through various
                        nuclear reactions. However, nuclear transmutation through neutron absorption is
                        challenging due to low neutron absorption cross sections. Recently, transmutation using
                        photons (particles of light) has been a topic of investigation as a viable reaction
                        channel.</p>
                    <br></br>
                    <p>I am working as a mentee of the <a href="https://www.uroubc.com/rex/" target="_blank">URO
                        Research Experience Program</a> to explore the potential for photo-induced nuclear
                        transmutation of HLW with photon beams that are currently under development at the <a
                            href="https://www.triumf.ca/ariel" target="_blank"> TRIUMF-ARIEL </a> facility on
                        the UBC Vancouver campus, and am presenting in the Multidisciplinary Undergraduate
                        Research Conference in March.</p>
                </div>

                <div className="col-xs-12 col-sm-6 col-sm-pull-6 micro-item">
                    <img src="https://i.imgur.com/OTZk4bY.png" alt="Float labels"/>
                </div>
            </div>

            <div className="row micro-container">
                <div className="col-xs-12 col-sm-6">
                    <div className="section-title micro-item"><a
                        href="https://devpost.com/software/polygraph-njl81d" target="_blank">Polygraph</a></div>
                    <br></br>
                    <p>Polygraph is a project developed at Hack The North designed to counter videographic
                        misinformation online: it timestamps and captions dubious claims in real time,
                        overturning them with links to reliable statistics or articles to refute them.</p>
                    <br></br>
                    <p>As a chrome extension, it removes the need for users to manually input video links or
                        download the video themselves; it detects the presence of a YouTube webpage, and will
                        scan for false claims at the click of a button.</p>
                </div>

                <div className="col-xs-12 col-sm-6 micro-item">
                    <img src="https://i.imgur.com/rO3nSJi.jpeg" alt="Float labels"/>
                </div>
            </div>

            <div className="row micro-container hidden-xs last">
                <div className="col-xs-12 col-sm-6 col-sm-push-6">
                    <div className="section-title micro-item"><a href="https://devpost.com/software/avoid-19"
                                                                 target="_blank">AVOID-19</a></div>
                    <br></br>

                    <p>AVOID-19 is a project developed at NWHacks 2021. By providing your location and a desired
                        destination, AVOID-19 determines the risk of your entire trip, from the moment you step
                        out of your house to the moment you return. </p>

                    <p>This risk is represented by a risk score, which will be calculated based on the number of
                        people you are expected to encounter on your trip, and the risk of exposure from each
                        encounter. These metrics are determined using both population density and transit
                        information, alongside how many people are anticipated to be at your destination. The
                        risk of exposure from each encounter will be calculated using the number of active
                        infections in your area and your proximity to known public exposure sites.</p>
                    <br></br>
                    <p>Taking this risk score into account, AVOID-19 provides alternative destinations if the
                        risk is high, and tips for your travel like times at which your location is least busy.
                        By following this advice, you are able to minimize the risk of your essential
                        travel.</p>
                </div>

                <div className="col-xs-12 col-sm-6 col-sm-pull-6 micro-item">
                    <img src="https://i.imgur.com/fWtedzQ.jpeg" alt="Float labels"/>
                </div>
            </div>


        </div>

        {/* Footer */
        }
        <Footer/>

    </section>

    )
        ;
    }
}
