import './Footer.css';

const Footer = () => {
  return (
    <>
      <footer className='footer'>
        <div className='footer-heading'>
          <h2>THE AUTRING</h2>
        </div>
        <div className='footer-content-list'>
          <div className='footer-content'>
            <h3 className='footer-subheading'>About Us</h3>
            <p className='about'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className='footer-content'>
            <h3 className='footer-subheading'>Quick Links</h3>
            <ul>
              <li>
                <a href='#faq'>Lorem ipsum</a>
              </li>
              <li>
                <a href='#cookies-policy'>Lorem ipsum</a>
              </li>
              <li>
                <a href='#terms-of-services'>Lorem ipsum</a>
              </li>
            </ul>
          </div>
          <div className='footer-content'>
            <h3 className='footer-subheading'>Contact Us</h3>
            <p className='contactUs'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className='footer-icons'>
              <i className='large whatsapp icon'></i>
              <i className='large instagram icon'></i>
              <i className='large facebook icon'></i>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
