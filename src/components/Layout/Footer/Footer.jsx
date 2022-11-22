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
            <h3 className='footer-subheading'>About</h3>
            <p className='about'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
              voluptatem corporis error non,
            </p>
          </div>
          <div className='footer-content'>
            <h3 className='footer-subheading'>Quick Links</h3>
            <ul>
              <li>
                <a href='#faq'>Lorem</a>
              </li>
              <li>
                <a href='#cookies-policy'>Lorem</a>
              </li>
              <li>
                <a href='#terms-of-services'>Lorem</a>
              </li>
            </ul>
          </div>
          <div className='footer-content'>
            <h3 className='footer-subheading'>Contact Us</h3>
            <p className='contactUs'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum natus
              explicabo sapiente tempore consequatur quis totam ad, vero, alias
              perferendis, illo aliquid assumenda nobis. Eum laboriosam qui
              natus tempora a? Saepe fugit quaerat sit quod iure perferendis
              nostrum rem aut iusto dignissimos harum, sint tenetur totam cum
              blanditiis?
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
