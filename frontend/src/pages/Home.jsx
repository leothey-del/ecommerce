import React from 'react';


import CategoryList from '../components/products/CategoryList';
import ProductList from '../components/products/ProducList';

const Home = () => {
 
 

  return (
    <div className='py-4'>  
   
   
      
     <ProductList/>
     <CategoryList/>
     </div>
  )
}

export default Home;