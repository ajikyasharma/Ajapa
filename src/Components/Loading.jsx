

import React from 'react';
import '/src/styles/Loading.css'; 

const Loading = () => {
  return (
    <div className="loading-container">
      <div className="loader"></div>
      <h2>Loading...</h2>
    </div>
  );
};

export default Loading;