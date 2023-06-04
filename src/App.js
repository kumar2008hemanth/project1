import React from 'react';
import Body from './components/body/Body';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
// import Carousel  from './components/carousel/carousel';
import Categories from './components/categories/Categories';
 
export default function App() {
  return (
    <div>

      <Navbar />
      {/* <Categories /> */}
      {/* <Carousel /> */}
      <Body />
      <Footer />
    </div>
  );
}