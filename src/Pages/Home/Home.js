import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummaryCard from '../NewsSummaryCard/NewsSummaryCard';

const Home = () => {
     const allNews = useLoaderData();
     return (
          <div className='text-center'>
               <p>News portal : {allNews.length}</p>
               {
                    allNews.map(news => <NewsSummaryCard
                    key={news._id}
                    news={news}
                    ></NewsSummaryCard>)
               }
          </div>
     );
};

export default Home;