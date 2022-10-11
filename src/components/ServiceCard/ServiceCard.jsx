import React from 'react'

const ServiceCard = (props) => {
  return (
    <div className='service section '>
        <div className='service-container'>
            <div className='service-card m-3  p-3'>
                <img
                    src="/assets/pictures/deliver.svg"
                    className='w-100'
                />
                <h3 className='mt-3 p-2'>{props.ServiceOneTitle}</h3>
            </div>

            <div className='service-card m-3  p-3'>
                <img
                    src="/assets/pictures/price.svg"
                    className='w-50'
                />
                <h3>{props.ServiceTwoTitle}</h3>
            </div>

            <div className='service-card m-3  p-3'>
                <img
                    src="/assets/pictures/quality.svg"
                    className='w-50'
                />
                <h3>{props.ServiceThreeTitle}</h3>
            </div>
        </div>
    </div>
  )
}

export default ServiceCard