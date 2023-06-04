import React from 'react'
import Products from "./Products.json";
import { createSearchParams, Link, useNavigate } from "react-router-dom";
// import ProductsCard from './ProductsCard';

export default function ProductsList() {
    //  const [setSelectProduct] = useState({});
    //  const [setShow] = useState(false);
    // const handleClose = () => setShow(false);

    // const handleShow = (product) =>{
    //     // setSelectProduct({...product})
    //     setShow(true);
    // };
    const navigate = useNavigate();
    const clickHandler = () =>{
        navigate({
            pathname: "/productdetails",
            // search:`?${createSearchParams({title,price})}`
        })
    }
    return (
        <>
            <h2 className="text-center"> Product List </h2>

            <div className='container'>
                <div className='row'>
                    {Products.map((product) => {
                        return (
                            <div className="col-sm-3" key={product.id}>
                                <div className="card">
                                    <img src={product.image} className="card-img-top" alt="aa" width="200" height="150" />
                                    <div className="card-body text-center">
                                        <h5 className="card-title">{product.category}</h5>
                                        <p className="card-text">{product.title}</p>
                                        <p className="card-text">{product.price}</p>
                                        <p className="card-text">{product.rating.rate}</p>
                                        {/* <a href="#" className="btn btn-primary" onClick={()=>{handleShow(product)}}>
                                    View Details
                                  </a>  */}
                                        <button>
                                            <Link to={`/productdetails/${product.id}`}>Details</Link>
                                        </button>
                                        <button onClick={()=>clickHandler(product.title,product.price)}>Details-2</button>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    )
}
