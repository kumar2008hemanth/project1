import React from 'react'
import Products from './Products.json'

export default function ProductsTable() {
  return ( 
  <>
  <h2 className='text-center'>Products Table</h2>
  <table className='table table-bordered table-striped'>
    <tbody>
        {Products.map((product)=>{
            return (
                <tr Key={product.id}>
                    <td>{product.id}</td>
                    <td>{product.title}</td>
                    <td>{product.price}</td>
                    <td>{product.description}</td>
                    <td>{product.category}</td>
                    <td>{product.rating.rate}</td>
                    <td>
                        <img src={product.image} width='100' height='100' />
                    </td>
                </tr>
            )
        })}
    </tbody>
  </table>
  </>
  )
}
