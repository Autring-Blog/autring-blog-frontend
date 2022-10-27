import React from 'react';
import { useState } from 'react';
import Card from '../../components/card/card.component';

import './favourite.styles.css';

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

const Favourite = () => {
  const [input, setInput] = useState('');
  const [dataList, setDataList] = useState([
    ...data.map((item) => {
      return { ...item, selectedItem: false };
    }),
  ]);

  const toggleSelect = (id) => {
    dataList[id].selectedItem = !dataList[id].selectedItem;
    setDataList(dataList);
  };

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
        {dataList.map((item, idx) => (
          <div key={idx} onClick={() => toggleSelect(idx)}>
            <Card data={item} />
          </div>
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
