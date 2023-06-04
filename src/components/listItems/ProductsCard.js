import React from 'react'

export default function ProductsCard({ productObj }) {
    return (
        <div className='col-sm-3' key={product.id}>
            <div className="card">
                <img src={productObj.image} className='card-img-top' alt="no image"  height="200px"/>
                <div className="card-body">
                    <h5>{productObj.title}</h5>
                    {/* <a href="#" className="btn btn-primary">Buy Now</a> */}
                {/* <button>
                    <link to={`/productdetails/${product.id}`}> Details </link>
                </button> */}
                </div>
            </div>
        </div>
    )
}
