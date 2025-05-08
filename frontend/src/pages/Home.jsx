import React from 'react';

import CardItem from '../components/products/CardItem';
import CategoryList from '../components/products/CategoryList';

const Home = () => {
 
 

  return (
    <div className='py-4'>  
      <CardItem/>
     <CategoryList/>
     <CardItem/>
     </div>
  )
}

export default Home;