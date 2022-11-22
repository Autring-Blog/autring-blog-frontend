import './Navbar.css';
import NavbarImage from './autring-image.png';

function NavbarHome() {
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
        <span className='material-symbols-outlined'>search</span>
      </div>
    </div>
  );
}

export default NavbarHome;
