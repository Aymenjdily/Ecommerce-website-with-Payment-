import React from 'react'
import Link from 'next/link'

import { urlFor } from '../../service/lib/service'

const Product = ({product : {image , name, slug, price} }) => {
  return (
    <div className='product'>
        <div className='row col-12 '>
            <Link href={`/product/${slug.current}`}>
                <div className='product-card'>
                    <div className='section mb-3'>
                        <img
                            src={urlFor(image && image[0])}
                            className='w-100 product-card-image'
                        />
                    </div>
                    <h3>{name}</h3>
                    <p>{price} $</p>
                </div>
            </Link>
        </div>
    </div>
  )
}

export default Product