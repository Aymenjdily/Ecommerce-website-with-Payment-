import React from 'react'
import {MdLocationOn,MdPhone,MdMail} from 'react-icons/md'

const Footer = (props) => {
  return (
    <div className='section footer'>
        <div className='container row col-12 footer-container'>
            <div className='col-12 section'>
                <h1 className='col-6'>{props.FooterLogo}</h1>
                <p className=''>
                    {props.FooterPara}
                </p>
            </div>
        </div>
    </div>
  )
}

export default Footer