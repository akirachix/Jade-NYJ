import React from 'react';
import './index.css';
import casestudy from '../images/casestudy.png';
import farmer from '../images/farmer.png';

const PageOne = ({ onNext, onBack }) => {
  return (
    <div className="blog-post">
      <div className="farmer-image">
        <img src={farmer} alt="Farmer" />
      </div>
      <div className="post-image">
        <img src={casestudy} alt="Case Study" />
      </div>
      <div className="navigation">
        {onBack && <button onClick={onBack}>Back</button>}
        {onNext && <button onClick={onNext}>Next</button>}
      </div>
    </div>
  );
};

export default PageOne;
