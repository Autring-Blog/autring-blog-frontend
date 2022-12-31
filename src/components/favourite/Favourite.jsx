import React from 'react';
import { useState } from 'react';
import FavouriteCard from './card/FavouriteCard';
import './Favourite.css';

const data = [
  {
    id: 1,
    img: 'a3dacf52205c26dbf0690c8f55aa407e1.png',
    name: 'International',
  },
  {
    id: 2,
    img: 'a3dacf52205c26dbf0690c8f55aa407e1.png',
    name: 'National',
  },
  {
    id: 3,
    img: 'a3dacf52205c26dbf0690c8f55aa407e1.png',
    name: 'Politics',
  },
  {
    id: 4,
    img: 'a3dacf52205c26dbf0690c8f55aa407e1.png',
    name: 'Defence',
  },
  {
    id: 5,
    img: 'a3dacf52205c26dbf0690c8f55aa407e1.png',
    name: 'Science And Technology',
  },
  {
    id: 6,
    img: 'a3dacf52205c26dbf0690c8f55aa407e1.png',
    name: 'Sports',
  },
  {
    id: 7,
    img: 'a3dacf52205c26dbf0690c8f55aa407e1.png',
    name: 'Education',
  },
  {
    id: 8,
    img: 'a3dacf52205c26dbf0690c8f55aa407e1.png',
    name: 'Finance',
  },
  {
    id: 9,
    img: 'a3dacf52205c26dbf0690c8f55aa407e1.png',
    name: 'Entertainment',
  },
];

const Favourite = () => {
  const [input, setInput] = useState('');
  const [dataList, setDataList] = useState([
    ...data.map((item) => {
      return { ...item, selectedItem: false };
    }),
  ]);

  const [modalList, setModalList] = useState([]);

  const toggleSelect = (id) => {
    dataList[id].selectedItem = !dataList[id].selectedItem;
    if (dataList[id].selectedItem === true) {
      setModalList([...modalList, dataList[id].name]);
    }
    const selectedItem = dataList
      .filter((item) => item.selectedItem === true)
      .map((item) => item.name);

    setModalList(selectedItem);
  };

  const handleDone = () => {
    if (!modalList.length) return;
    console.log(modalList);
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
            <FavouriteCard data={item} />
          </div>
        ))}
      </div>
      <div className='btn btn-yellow' onClick={handleDone}>
        Done
      </div>

      <a href='/' className='skip-btn'>
        Skip For Now
      </a>
    </div>
  );
};

export default Favourite;
