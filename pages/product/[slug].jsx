import React from 'react'
import { service,urlFor } from '../../src/service/lib/service'
import {AiOutlineMinus,AiOutlinePlus,AiFillStar,AiOutlineStar} from 'react-icons/ai'
import {useStateContext} from '../../context/StateContext'

const ProductDetails = ({product,products}) => {
    const {
        name,
        image,
        details,
        price,
    } = product;

    const { decQty,incQty,qty,onAdd } = useStateContext();
    return (
        <div className='section section-height productDetails'>
          <div className='container row col-12 productDetails-container'>
            <div className='col-6 section'>
              <img
                src={urlFor(image && image[0])}
                className='productDetails-image w-100'
              />
            </div>

            <div className='col-6 '>
              <h1>
                {name}
              </h1>
              <div>
                <AiFillStar className='productDetails-icon'/>
                <AiFillStar className='productDetails-icon'/>
                <AiFillStar className='productDetails-icon'/>
                <AiFillStar className='productDetails-icon'/>
                <AiOutlineStar className='productDetails-icon'/>
                (35)
              </div>
              <div className='mt-5'>
                <h2>
                  Details : 
                </h2>
                <p className=''>
                  {details}
                </p>
              </div>
              <h3>
                {price} $
              </h3>
              <div className='mt-4 productDetails-quantity'>
                  <h4>Quantity :</h4>
                  <p className="productDetails-container p-3 section">
                    <span className="minus p-2" onClick={decQty}><AiOutlineMinus /></span>
                    <span className="num p-2">{qty}</span>
                    <span className="plus p-2" onClick={incQty}><AiOutlinePlus /></span>
                  </p>
              </div>
              <div className='productDetails-btns'>
                <button className='productDetails-btnA p-3' onClick={() => onAdd(product, qty)}>
                  add to card
                </button>

                <button className='productDetails-btnB p-3'>
                  buy now
                </button>
              </div>
            </div>
          </div>
        </div>
    )
}

export const getStaticProps = async ({params:{slug}}) => {
    const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
    const productsQuery = '*[_type == "product"]';
  
    const product = await service.fetch(query)
    const products = await service.fetch(productsQuery);
  
  
    return{
      props: {products,product}
    }
}
  
export const getStaticPaths = async() => {
    const query = `*[_type == "product"] {
      slug {
        current
      }
    }
    `;
  
    const products = await service.fetch(query);
  
    const paths  = products.map((product) =>({
      params : {
        slug : product.slug.current
      }
    }));
  
    return {
      paths,
      fallback : 'blocking'
    }
}

export default ProductDetails