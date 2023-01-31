
import React, { useState, useEffect } from 'react';
import Showdown from 'showdown';


const LocalList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    let items = [];
    for (let i = 0; i < localStorage.length; i++) {  
      items.push([localStorage.key(i), localStorage.getItem(localStorage.key(i))]);
    }
    setData(items);
  }, []);

  return (
    <div>
      {data.map((item, index) => (
        <div key={index}>
          <p>{item[0]}: {item[1]}</p>
          <hr className='bg-dark'></hr>
        </div>
      ))}
    </div>
  );
};

export default LocalList;

