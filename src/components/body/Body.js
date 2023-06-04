import React from 'react'
// import ProductsTable from '../listItems/ProductsTable'
import Demo1 from '../demo/Demo1'
import Demo2 from '../demo/Demo2'
import Demo3 from '../demo/Demo3'
import Demo4 from '../demo/Demo4'
import ListItemsDemo1 from '../listItems/ListItemsDemo1'
import ListItemsDemo2 from '../listItems/ListItemsDemo2'
import AboutUs from "../routing/AboutUs";
import Careers from "../routing/Careers";
import ContactUs from "../routing/ContactUs";
import Home from "../routing/Home";
import NotFound from "../routing/NotFound";
import ProductsTable from '../listItems/ProductsTable'
import { Route, Routes } from 'react-router-dom'
import Greet from '../props/Greet'
import Statedemo1 from '../state/Statedemo1'
import Statedemo2 from '../state/Statedemo2'
import Statedemo3 from '../state/Statedemo3'
import ProductDetails from '../listItems/ProductDetails'
import ProductsList from '../listItems/ProductsList'
import ProductDetails2 from '../listItems/ProductDetails2'

export default function () {
  return (
    <div className='body'>
      
    {/* <ProductsTable /> */}
    {/* <ProductsList /> */}
    {/* <Demo1 /> */}
    {/* <Demo2 /> */}
    {/* <Demo3 /> */}
    {/* <Demo4 /> */}
    {/* <ListItemsDemo1 /> */}
    {/* <ListItemsDemo2 /> */}
    {/* <Greet name='Hemanth' msg='morning' age={21}>
      <>
      <h3>This is content from children</h3>
      <h2>this is another content</h2>
      </>
      </Greet>
    <Greet  name='kumar' msg='morning' age={20} /> */}
  {/* <Statedemo1 /> */}
  {/* <Statedemo2 /> */}
  {/* <Statedemo3 /> */}
    <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/aboutus" element={<AboutUs />} />
        <Route exact path="/careers" element={<Careers />} />
        <Route exact path="/contactus" element={<ContactUs />} />
        <Route exact path="/productsList" element={<ProductsList />} />
        <Route exact path="/productdetails/:id" element={<ProductDetails />} />
        {/* <Route exact path="/productdetails" element={<ProductDetails2 />} /> */}
        <Route path="*" element={<NotFound />} /> 
      </Routes>

    </div>
  )
}




























































































































