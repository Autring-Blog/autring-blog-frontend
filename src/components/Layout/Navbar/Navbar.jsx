import './Navbar.css';
import NavbarImage from '../../../assets/images/autring-image.png';
import { Link } from 'react-router-dom';
const navbarItems = [
  {
    value: "international",
    name: "International"
  },
  {
    value: "national",
    name: "National"
  },
  {
    value: "politics",
    name: "Politics"
  },
  {
    value: "defence",
    name: "Defence"
  },
  {
    value: "science",
    name: "Science and Technology"
  },
  {
    value: "sports",
    name: "Sports"
  },
  {
    value: "education",
    name: "Education"
  },
  {
    value: "others",
    name: "Others"
  },

]
function Navbar() {
  return (
    <div className='navbar'>
      <div className='brand-logo'>
        {<img src={NavbarImage} alt='brand-logo' />}
      </div>
      <div className='item-list'>
        <Link to={'/'} className='item'>Home</Link>
        {navbarItems && navbarItems.map((navItem) => (
          <Link to={`/blogs/${navItem.value}`} className='item' key={navItem.value}>{navItem.name}</Link>
        ))}
        {/* <a className='item'>Home</a>
        <a className='item'>International</a>
        <a className='item'>National</a>
        <a className='item'>Politics</a>
        <a className='item'>Defence</a>
        <a className='item'>Science and Technology</a>
        <a className='item'>Sports</a>
        <a className='item'>Education</a>
        <a className='item'>Others</a> */}
      </div>
      <div className='navbar-search'>
        {/* <i className='big search link icon'></i>{' '} */}
        <span className='material-symbols-outlined'>search</span>
      </div>
    </div>
  );
}

export default Navbar;
