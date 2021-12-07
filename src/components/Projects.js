import React from "react";
import { AnimationOnScroll } from 'react-animation-on-scroll';






const Projects = (props) => {
  return (
    <AnimationOnScroll animateIn="animate__slower animate__fadeIn">
    <div className="container mx-auto pt-24 max-w-screen-2xl">
      {/* <div className="backGround"></div> */}
      <div className="section-Projects items-center">
        <div className="flex flex-wrap">
          <div className="pb-8">
            <div className="sectionTitles">
              <h1 className="pb-2">PROJECTS</h1>
              <div class="specialBlurb"><p>"A couple projects I have made"</p></div>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="py-4 px-4 textBlurbs jobBlob">
              <div className="flex items-center justify-between">
              <a className="jobCompany hover-underline-animation" href="https://gh-profiler.herokuapp.com/">
                <h2 className="jobTitle hover-underline-animation">Github Profile Finder</h2>
                </a> 
                <div className="flex items-center justify-between">
              <svg className="m-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            </div>
              </div>
              <p>
                E-Commerce website built using wordpress with a custom theme.
              </p>
              <div className="flex">
                <div className="flex items-center">
                  <svg class="media__stack-icon" viewBox="0 0 24 24" role="img">
                    <path d="M14.6,16.6L19.2,12L14.6,7.4L16,6L22,12L16,18L14.6,16.6M9.4,16.6L4.8,12L9.4,7.4L8,6L2,12L8,18L9.4,16.6Z"></path>
                  </svg>
                  <span class="media__stack-details laguageText">React</span>
                </div>
              </div>
            </div>
            <div className="py-4 px-4 textBlurbs jobBlob">
            <div className="flex items-center justify-between">
            <a className="jobCompany hover-underline-animation" href="https://github.com/DwightX/React-Task-Tracker">
              <h2 className="jobTitle hover-underline-animation">Note Tracker</h2>
              </a>
              <svg className="m-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                </div>
              <p>
                Offers individualized treatment in an executive level women's
                only setting for mental and behavioral challenges.
              </p>
              <div className="flex">
                <div className="flex items-center">
                <svg class="media__stack-icon" viewBox="0 0 24 24" role="img">
                    <path d="M14.6,16.6L19.2,12L14.6,7.4L16,6L22,12L16,18L14.6,16.6M9.4,16.6L4.8,12L9.4,7.4L8,6L2,12L8,18L9.4,16.6Z"></path>
                  </svg>
                  <span class="media__stack-details laguageText">
                    React Heroku
                  </span>
                </div>
              </div>
            </div>
            <div className="py-4 px-4 textBlurbs jobBlob">
            <div className="flex items-center justify-between">
            <a className="jobCompany hover-underline-animation" href="https://www.maskmarketusa.com/">
              <h2 className="jobTitle hover-underline-animation">Mask Market USA</h2>
              </a>
              <svg className="m-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              </div>
              <p>
                An orlando-based company providing user-friendly, engaging
                educational and training solutions for the public.
              </p>
              <div className="flex">
                <div className="flex items-center">
                <svg class="media__stack-icon" viewBox="0 0 24 24" role="img">
                    <path d="M14.6,16.6L19.2,12L14.6,7.4L16,6L22,12L16,18L14.6,16.6M9.4,16.6L4.8,12L9.4,7.4L8,6L2,12L8,18L9.4,16.6Z"></path>
                  </svg>
                  <span class="media__stack-details laguageText">
                    PHP WordPress
                  </span>
                </div>
              </div>
            </div>
            <div className="py-4 px-4 textBlurbs jobBlob">
            <div className="flex items-center justify-between">
            <a className="jobCompany hover-underline-animation" href="https://github.com/DwightX/json-server">
              <h2 className="jobTitle hover-underline-animation">Mock JSON API</h2>
              </a>
              <svg className="m-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              </div>
              <p>
                A mock Rest API JSON server I used for fake date for a project.s 
              </p>
              <div className="flex">
                <div className="flex items-center">
                <svg class="media__stack-icon" viewBox="0 0 24 24" role="img">
                    <path d="M14.6,16.6L19.2,12L14.6,7.4L16,6L22,12L16,18L14.6,16.6M9.4,16.6L4.8,12L9.4,7.4L8,6L2,12L8,18L9.4,16.6Z"></path>
                  </svg>
                  <span class="media__stack-details laguageText">
                    JavaScript
                  </span>
                </div>
              </div>
            </div>
            <div className="py-4 px-4 textBlurbs jobBlob">
            <div className="flex items-center justify-between">
              <a className="jobCompany hover-underline-animation" href="https://github.com/DwightX/node-server">
              <h2 className="jobTitle hover-underline-animation">Random Facts</h2>
              </a>
              <svg className="m-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              </div>
              <p>
              A node server that will display random facts Using Vanella JS and Express and Node.js.
              </p>
              <div className="flex">
                <div className="flex items-center">
                <svg class="media__stack-icon" viewBox="0 0 24 24" role="img">
                    <path d="M14.6,16.6L19.2,12L14.6,7.4L16,6L22,12L16,18L14.6,16.6M9.4,16.6L4.8,12L9.4,7.4L8,6L2,12L8,18L9.4,16.6Z"></path>
                  </svg>
                  <span class="media__stack-details laguageText">
                    Javascript Node.Js Express
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </AnimationOnScroll>
  );
};

export default Projects;
