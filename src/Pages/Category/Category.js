import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummaryCard from '../NewsSummaryCard/NewsSummaryCard';

const Category = () => {
     const CategoryNews = useLoaderData();
     return (
          <div>
               <p className='text-center'>This category has {CategoryNews.length} news</p>
               {
                    CategoryNews.map(news => <NewsSummaryCard
                         key={news._id}
                         news={news}
                    ></NewsSummaryCard>)
               }
          </div>
     );
};

export default Category;