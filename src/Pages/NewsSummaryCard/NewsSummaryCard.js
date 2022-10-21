import React from 'react';
import Card from 'react-bootstrap/Card';
import { FaBookmark, FaShareAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';

const NewsSummaryCard = ({ news }) => {
     const { _id, title, author, details, image_url, total_view, rating } = news;
     return (
          <div>
               <Card className="mb-4">
                    <Card.Header className='d-flex justify-content-between align-items-center'>
                         <div className='d-flex'>
                              <div style={{ height: '40px', width: '40px', marginRight:'10px' }}><img className='w-100 rounded-circle' src={author.img} alt="" /></div>
                              <div className='lh-1'>
                                   <p className='text-start my-1'>{author?.name}</p>
                                   <p className='text-start my-1'><small>{author?.published_date}</small></p>
                              </div>
                         </div>
                         <div>
                              <FaBookmark className='me-2'></FaBookmark>
                               <FaShareAlt></FaShareAlt>
                         </div>
                    </Card.Header>
                    <Card.Body>
                         <Card.Title className='text-start'>{title}</Card.Title>
                         <Card.Text>
                              <img className='w-100' src={image_url} alt="" />
                              {details.length > 250 ?
                                   <p className='text-start'>{details.slice(0, 250) + '...'} <Link to={`/news/${_id}`}>Read more</Link></p>
                                   : <p>{details}</p>     
                         }
                         </Card.Text>
                    </Card.Body>
                    <Card.Footer className="text-muted">
                         <div className='d-flex justify-content-between'>
                              <div>Rating: {rating?.number}</div>
                              <div className='text-end'>Total view: {total_view}</div>
                         </div>
                    </Card.Footer>
               </Card>
          </div>
     );
};

export default NewsSummaryCard;