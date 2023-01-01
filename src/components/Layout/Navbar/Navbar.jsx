import './Navbar.css';
import NavbarImage from '../../../assets/images/autring-image.png';

function Navbar() {
  return (
    <div className='navbar'>
      <div className='brand-logo'>
        {<img src={NavbarImage} alt='brand-logo' />}
      </div>
      <div className='item-list'>
        <a className='item active'>Home</a>
        <a className='item'>International</a>
        <a className='item'>National</a>
        <a className='item'>Politics</a>
        <a className='item'>Defence</a>
        <a className='item'>Science and Technology</a>
        <a className='item'>Sports</a>
        <a className='item'>Education</a>
        <a className='item'>Others</a>
      </div>
      <div className='navbar-search'>
        {/* <i className='big search link icon'></i>{' '} */}
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
    </div>
  );
}

export default Navbar;
