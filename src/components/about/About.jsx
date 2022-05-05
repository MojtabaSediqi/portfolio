import React from 'react'
import './about.css'
import MeImageSrc from '../../img/me-2.jpg'
import AzadUniLogo from '../../img/azad-uni.png'
import ChargoonLogo from '../../img/chargoon.png'

function About() {
    return (
        <div className='a'>
            <div className='a-left'>
                <div className='a-card bg'></div>
                <div className='a-card'>
                    <img src={MeImageSrc} alt='Mohtaba Sedighi`s avatar' className='a-left-img' />
                </div>
            </div>
            <div className='a-right'>
                <h1 className='a-title'>About Me</h1>
                <p className='a-sub'>
                    I am 21 years old web developer, who loves limitless learning.
                    Creating a value and being effective are what I can be proude of.
                </p>
                <p className='a-desc'>
                    I am developing front end of web application using React JS and back end with Node JS - express JS.
                    I love music , art and book. Nature is what I can relax with.
                    Learning new techs is always so exciting to me.
                    My purpose is creating a value and affecting in a positive way :)
                </p>
                <div className='a-detail'>
                    <h3 className='a-expriences-title'>Expriences</h3>
                    <div className='a-detail-desc'>
                        <img src={ChargoonLogo} alt='charoon logo' className='a-right-img exprience' />
                        <div className='a-detail-texts upper'>
                            <h4 className='a-detail-text-title'>Chargoon Inc.</h4>
                            <p className='a-detail-text-desc'>
                                <i>Front-end developer</i>
                                <br />
                                1 year ago - Present
                            </p>
                        </div>
                    </div>
                </div>
                <div className='a-detail'>
                    <h3 className='a-studies-title'>Academic degrees</h3>
                    <div className='a-detail-desc'>
                        <img src={AzadUniLogo} alt='Islamic Azad University logo' className='a-right-img studies' />
                        <div className='a-detail-texts'>
                            <h4 className='a-detail-text-title'>Islamic Azad university,<br /> Shahr-e-Qods branch</h4>
                            <p className='a-detail-text-desc'>
                                <i> Bachelor of<br /> software engineering</i>
                                <br />
                                2020, Sep - Present
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About