import React from 'react';
import {CgArrowLongDown} from 'react-icons/cg'

const Intro = (props) => {
  return (
    <div className='section section-height intro'>
        <div className='row col-12 container'>
            <div className='intro-container col-6'>
                <h1>
                   {props.IntroTitle} 
                </h1>
                <h2 className='mb-5'>
                    {props.IntroLogo}
                </h2>
                <div className=''>
                  <CgArrowLongDown className='intro-icon'/>
                </div>
            </div>

            <div className='intro-image col-6'>
              <img
                src='/assets/pictures/intro.svg'
                className='w-100'
              />
            </div>
        </div>
    </div>
  )
}

export default Intro
