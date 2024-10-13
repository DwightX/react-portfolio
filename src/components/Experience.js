import React from 'react'
import avi from '../images/memoji.png'
import { AnimationOnScroll } from 'react-animation-on-scroll';

const Experience = props => {

    return (
        <AnimationOnScroll animateIn="animate__slower animate__fadeIn">
        <div id="exp__block" className="blockColor"> 
        <div className="container mx-auto max-w-screen-2xl">
            <div className="section-Experience items-center">
                <div className='flex flex-wrap'>
                    <div className='flex flex-wrap items-center pb-8 w-full'>
                        <div className="sectionTitles w-2/4">
                            <h1 className="pb-2">
                               EXPERIENCE
                            </h1>
                            <div className="specialBlurb">
                                <p>" From working overnight in a call center to being a self taught developer "</p>
                            </div>
                        </div>
                        <div className="w-2/4">
                        <img className="mx-auto"src={avi} alt='This is me'></img>
                        </div>
                    </div>
                    <div className="flex flex-wrap gap-4">
                    <div className='py-4 px-4 textBlurbs md:flex md:flex-wrap w-full'>
                            <div className="w-full md:w-2/4">
                                <h2 className='jobTitle'>APPLICATION DEVELOPER</h2>
                                <p className="jobYear">June 2022 - Oct 2024</p>
                            </div>
                            <div className="w-full md:w-2/4 mt-4">
                            <h3><a className="jobCompany hover-underline-animation" href="https://zanibonilighting.com/">ZANIBONI LIGHTING</a></h3>
                            <div className="jobBlurb px-2">
                            <ul>
                                <li>Effectively collaborate with Product, UX, and Marketing teams.</li>
                                <li>Some Full Stack development within Magento 2 to implement new site features, customizations.</li>
                                <li>Develop and maintain website content across all business group websites including all web page types on both Ecommerce and non-Ecommerce websites.</li>
                            </ul>
                            </div>
                             </div>
                        </div>
                        <div className='py-4 px-4 textBlurbs md:flex md:flex-wrap w-full'>
                            <div className="w-full md:w-2/4">
                                <h2 className='jobTitle'>FRONT END WEB DEVELOPER</h2>
                                <p className="jobYear">June 2019 - Present</p>
                            </div>
                            <div className="w-full md:w-2/4 mt-4">
                            <h3><a className="jobCompany hover-underline-animation" href="https://zanibonilighting.com/">ZANIBONI LIGHTING</a></h3>
                            <div className="jobBlurb px-2">
                            <ul>
                                <li>Effectively collaborate with Product, UX, and Marketing teams.</li>
                                <li>Some Full Stack development within Magento 2 to implement new site features, customizations.</li>
                                <li>Develop and maintain website content across all business group websites including all web page types on both Ecommerce and non-Ecommerce websites.</li>
                            </ul>
                            </div>
                             </div>
                        </div>
                        <div className='py-4 px-4 textBlurbs md:flex md:flex-wrap w-full'>
                        <div className="w-full md:w-2/4">
                                <h2 className='jobTitle'>FRONT END WEB DEVELOPER</h2>
                                <p className="jobYear">October 2018 - June 2019</p>
                            </div>
                            <div className="w-full md:w-2/4 mt-4">
                            <h3><a className="jobCompany hover-underline-animation" href="https://thewaveclearwater.com/">THE WAVE</a></h3>
                            <div className="jobBlurb px-2">
                                <ul>
                                    <li>Manage & support website built within WordPress, including content/image updates, plugin maintenance and updates, etc.</li>
                                    <li>Implement front-end components with Vue.js framework.</li>
                                    <li>Build landing pages to support targeted advertising, email and SMS/MMS campaigns.</li>
                                </ul>
                            </div>
                             </div>
                        </div>                     
                        <div className='py-4 px-4 textBlurbs md:flex md:flex-wrap w-full'>
                        <div className="w-full md:w-2/4">
                                <h2 className='jobTitle'>CONTENT DEVELOPER</h2>
                                <p className="jobYear">July - October 2018</p>
                            </div>
                            <div className="w-full md:w-2/4 mt-4">
                            <h3> <a className="hover-underline-animation jobCompany" href="https://www.h2itsolutions.com/">H2 IT SOLUTIONS</a></h3> 
                            <div className="jobBlurb px-2">
                                <ul>
                                    <li>Develop, update, and maintain the monthly safety training eLearning modules.</li>
                                    <li>Create web user experiences using HTML, CSS, and JavaScript.</li>
                                    <li>Convert existing documentation and training materials into engaging and effective online courses.</li>
                                </ul>
                            </div>
                             </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        </div>
        </AnimationOnScroll>
    )
}



export default Experience
