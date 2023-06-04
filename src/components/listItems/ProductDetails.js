import axios from "axios"
import React from "react";
import  { useEffect } from 'react'
import { useState } from "react";
import { Await, useParams } from 'react-router-dom'

export default function ProductDetails() {
  const [product, setProduct] = useState({});
  const params = useParams();

  const getDetails = async function () {
    let response = await axios.get('https://fakestoreapi.com/products/${params.id}');
    setProduct(response.data);
  };
  useEffect(() => {
    getDetails();
  }, [params.id]);
  return (
    <>
      <h2 className='text-center'>This Product Details page</h2>
      <div className='row'>
        <div className="col-sm-4 offset-4" key={product.id}>
          <div className="card">
            <img src={product.image} className="card-img-top" alt="aa" width="50" height="50" />
            <div className="card-body text-center">
              <h5 className="card-title">{product.category}</h5>
              <p className="card-text">{product.title}</p>
              <p className="card-text">{product.price}</p>
              <p className="card-text">{product.rating?.rate}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
} 
