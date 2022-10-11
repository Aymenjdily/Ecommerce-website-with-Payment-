import React from 'react'

const Collection = (props) => {
  return (
    <div className='my-5 collection'>
        <div className='row col-12 collection-container'>
            <h1>
                {props.CollectionTitle}
            </h1>
            <p>
                {props.CollectionSubtitle}
            </p>
        </div>
    </div>
  )
}

export default Collection