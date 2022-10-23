import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftNavbar = () => {
     const [categories, setCategories] = useState([]);

     useEffect(() =>{
          fetch('http://localhost:5000/news-categories')
          .then(res => res.json())
          .then(data => setCategories(data))
          
     },[])
     return (
          <div >
               <h4 className='text-primary'>Categories: {categories.length}</h4>
               {
                    categories.map(category => <p  key={category.id}>
                         <Link className='text-decoration-none' to={`category/${category.id}`}>{category.name}</Link>
                    </p>)
               }
          </div>
     );
};

export default LeftNavbar;