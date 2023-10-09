import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
// import StarRating from './StarRating';
import './index.css';
import App from './App';

// function Test() {
//   const [movieRating, setMovieRating] = useState(0)
//   return (
//     <div>
//       <StarRating 
//       maxRating={10} 
//       color="blue" 
//       onSetRating={setMovieRating}/>
//       <p>The movies has {movieRating} stars</p>
//     </div>
//   )
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    
    {/* <StarRating messages={["Terrible", "Bad", "Good", "V.Good", "Amazing"]}/>
    <StarRating maxRating={7} color="red" size={24} defaultRating={2} className="test"/>
    <Test/> */}
  </React.StrictMode>
);


