import './Navbar.css';
import NavbarImage from '../../../assets/images/autring-image.png';
import { Link } from 'react-router-dom';
import { useState } from 'react';
const navbarItems = [
  {
    value: 'international',
    name: 'International',
  },
  {
    value: 'national',
    name: 'National',
  },
  {
    value: 'politics',
    name: 'Politics',
  },
  {
    value: 'defence',
    name: 'Defence',
  },
  {
    value: 'science',
    name: 'Science and Technology',
  },
  {
    value: 'sports',
    name: 'Sports',
  },
  {
    value: 'education',
    name: 'Education',
  },
  {
    value: 'others',
    name: 'Others',
  },
];
function Navbar() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className='navbar'>
      <div className='brand-logo'>
        {<img src={NavbarImage} alt='brand-logo' />}
      </div>
      <div className='item-list'>
        <Link to={'/'} className='item'>
          Home
        </Link>
        {navbarItems &&
          navbarItems.map((navItem) => (
            <Link
              to={`/blogs/${navItem.value}`}
              className='item'
              key={navItem.value}
            >
              {navItem.name}
            </Link>
          ))}
        <Link to={'/signin'} className='item'>
          Login
        </Link>
      </div>
      <div className='navbar-search'>
        <input
          className='search__input'
          type='text'
          placeholder='Enter your search'
          aria-label='search'
        />
        <button className='search__submit'>
          <i className='material-symbols-outlined' aria-label='submit search'>
            search
          </i>
        </button>
      </div>
      {open && (
        <>
          <div className='hamburger-item-list'>
            <Link to={'/'} className='item'>
              Home
            </Link>
            {navbarItems &&
              navbarItems.map((navItem) => (
                <Link
                  to={`/blogs/${navItem.value}`}
                  className='item'
                  key={navItem.value}
                >
                  {navItem.name}
                </Link>
              ))}
          </div>
          <div className='hamburger-navbar-search'>
            <input
              className='search__input'
              type='text'
              placeholder='Enter your search'
              aria-label='search'
            />
            <button className='search__submit'>
              <i
                className='material-symbols-outlined'
                aria-label='submit search'
              >
                search
              </i>
            </button>
          </div>
        </>
      )}

      <div className={`hamburger-menu ${open && 'open'} `} onClick={handleOpen}>
        <span className='hamburger-top'></span>
        <span className='hamburger-middle'></span>
        <span className='hamburger-bottom'></span>
      </div>
    </div>
  );
}

export default Navbar;
