import React from 'react';
import { useState } from 'react';
import Card from '../../components/card/card.component';

import './favourite.styles.css';

const Favourite = () => {
  const [input, setInput] = useState('');

  // const data = [1, 2, 3, 4, 5, 6];
  const data = [
    {
      id: 1,
      img: 'a3dacf52205c26dbf0690c8f55aa407e1.png',
      name: 'National',
    },
    {
      id: 2,
      img: 'a3dacf52205c26dbf0690c8f55aa407e1.png',
      name: 'National',
    },
    {
      id: 3,
      img: 'a3dacf52205c26dbf0690c8f55aa407e1.png',
      name: 'National',
    },
    {
      id: 4,
      img: 'a3dacf52205c26dbf0690c8f55aa407e1.png',
      name: 'National',
    },
    {
      id: 5,
      img: 'a3dacf52205c26dbf0690c8f55aa407e1.png',
      name: 'National',
    },
    {
      id: 6,
      img: 'a3dacf52205c26dbf0690c8f55aa407e1.png',
      name: 'National',
    },
  ];

  return (
    <div className='favourite'>
      <div className='favourite--heading'>Choose Your Favourite Topics</div>
      <div className='search-input'>
        <span className='material-symbols-outlined'>search</span>
        <input
          type='search'
          placeholder='Browse More Topics'
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
      <div className='card-list'>
        {data.map((item, idx) => (
          <Card data={item} key={idx} />
        ))}
      </div>
      <div className='btn btn-yellow'>Done</div>

      <a href='/#' className='skip-btn'>
        Skip For Now
      </a>
    </div>
  );
};

export default Favourite;
/* a3dacf52205c26dbf0690c8f55aa407e 1 */
