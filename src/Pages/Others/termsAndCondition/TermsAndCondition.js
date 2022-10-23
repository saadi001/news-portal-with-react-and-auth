import React from 'react';
import { Link } from 'react-router-dom';

const TermsAndCondition = () => {
     return (
          <div>
               <p>Read our terms and condition.</p>
               <Link to='/register'>Back to registration</Link>
          </div>
     );
};

export default TermsAndCondition;