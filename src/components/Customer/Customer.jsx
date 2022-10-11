import React from 'react'
import {ImQuotesRight} from 'react-icons/im'
import { urlFor } from '../../service/lib/service'

const Customer = ({customer : {image,name,description}}) => {
  return (
    <div className='customer section m-5'>
        <div className='row col-12 customer-container'>
            <div className='customer-card p-5'>
                <h1>{name}</h1>
                <p className='mt-3'>{description}</p>
                <ImQuotesRight className='customer-icon'/>
            </div>
        </div>
    </div>
  )
}

export default Customer