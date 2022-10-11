import React from 'react'
import Collection from '../../components/Collection/Collection'
import ServiceCard from '../../components/ServiceCard/ServiceCard'

const Services = () => {
  return (
    <div className='section '>
        <div className='row col-12 my-5'>
            <div className='section container'>
                <ServiceCard
                    ServiceOneTitle = '24h / 7j'
                    ServiceOnePara = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'

                    ServiceTwoTitle = 'Low Price'
                    ServiceTwoPara = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'

                    ServiceThreeTitle = 'High Quality'
                    ServiceThreePara = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                />
            </div>
        </div>
    </div>
  )
}

export default Services