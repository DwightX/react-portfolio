import React from 'react'

const Projects = (props) => {
    return (
        <div className="container mx-auto">
            {/* <div className="backGround"></div> */}
            <div className="section-Projects items-center px-4">
                <div className='flex flex-wrap'>
                    <div className=''>
                        <div className="sectionTitles">
                            <h1 className="pb-2">
                               PROJECTS
                            </h1>
                        </div>
                    </div>
                    <div className='flex flex-wrap'>
                        <div className='py-4 textBlurbs jobBlob'>
                            <h2 className='jobTitle'>Github Profile Finder</h2>
                            <p>E-Commerce website built using wordpress with a custom theme</p>
                            <div className="flex">
                            <div className="flex items-center"><svg class="media__stack-icon" viewBox="0 0 24 24" role="img"><path d="M14.6,16.6L19.2,12L14.6,7.4L16,6L22,12L16,18L14.6,16.6M9.4,16.6L4.8,12L9.4,7.4L8,6L2,12L8,18L9.4,16.6Z"></path></svg>
                            <span class="media__stack-details laguageText">React</span>
                            </div>
                            </div>
                        </div>
                        <div className='py-4 textBlurbs jobBlob'>
                            <h2 className='jobTitle'>Note Tracker</h2>
                            <p>Offers individualized treatment in an executive level women's only setting for mental and behavioral challenges.</p>
                            <div className="flex">
                            <div className="flex items-center"><svg class="media__stack-icon" viewBox="0 0 24 24" role="img"><path d="M14.6,16.6L19.2,12L14.6,7.4L16,6L22,12L16,18L14.6,16.6M9.4,16.6L4.8,12L9.4,7.4L8,6L2,12L8,18L9.4,16.6Z"></path></svg>
                            <span class="media__stack-details laguageText">React Heroku</span>
                            </div>
                            </div>
                        </div>
                        <div className='py-4 textBlurbs jobBlob' >
                            <h2 className='jobTitle'>Mask Market USA</h2>
                            <p>An orlando-based company providing user-friendly, engaging educational and training solutions for the public.</p>
                            <div className="flex">
                            <div className="flex items-center"><svg class="media__stack-icon" viewBox="0 0 24 24" role="img"><path d="M14.6,16.6L19.2,12L14.6,7.4L16,6L22,12L16,18L14.6,16.6M9.4,16.6L4.8,12L9.4,7.4L8,6L2,12L8,18L9.4,16.6Z"></path></svg>
                            <span class="media__stack-details laguageText">PHP WordPress</span>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;