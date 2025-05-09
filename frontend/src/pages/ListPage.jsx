import React from 'react';

// import Filter from '../components/Filter';
import ProductList from '../components/products/ProducList';

const ListPage = () => {
  return (
    <div className="px-4 relative">
      {/* CAMPAIGN */}
    
      <div className="py-8">
        
        {/* Example Product List */}
       <ProductList/>
      </div>
    </div>
  );
};

export default ListPage;