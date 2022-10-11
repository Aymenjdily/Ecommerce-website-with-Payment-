import React from 'react'
import Collection from '../src/components/Collection/Collection'
import Intro from '../src/container/Intro/Intro'
import {service} from '../src/service/lib/service'
import Product from '../src/components/Product/Product'
import Services from '../src/container/Services/Services'
import Customer from '../src/components/Customer/Customer'

const Home = ({products,customers}) => {
  return(
    <div className=''>
      <Intro
        IntroTitle = 'Welcome to'
        IntroLogo = 'bags'
      />

      <Collection
        CollectionTitle = 'our collection'
        CollectionSubtitle = 'Lorem ipsum dolor sit amet'
      />

      <div className='section my-5'>
        <div className='section row col-12'>
          <div className='product-container section'>
            {products?.map((product)=><Product key={product._id} product={product}/>)}
          </div>
        </div>
      </div>

      {/* <Services/> */}

      {/* <div className='section section-height testimonials'>
        <div className='row col-12 testimonials-container section container'>
            <div>
                <Collection
                    CollectionTitle = 'What Clients say about us'
                    CollectionSubtitle = 'Lorem ipsum dolor sit amet'
                />
            </div>
            <div className='testimonials-customers d-flex my-5'>
                {customers?.map((customer)=><Customer key={customer._id} customer={customer}/>)}
            </div>
        </div>
      </div> */}

    </div>
  )
}

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await service.fetch(query);

  const Customerquery = '*[_type == "customer"]';
  const customers = await service.fetch(Customerquery);

  return{
    props: {products,customers}
  }
}

export default Home