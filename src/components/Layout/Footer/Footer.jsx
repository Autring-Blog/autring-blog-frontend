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
              The Autring is a 24-hour online news channel. It is a subsidiary
              of the SIMMI Foundation, a pan-India NGO based in Gurgaon,
              Haryana. The Autring gives its audience access to timely,
              objective reporting and analysis in both written and visual forms.
              The Autring works with a phenomenal team, aiming to provide
              authentic and honest news updates. Through rigorous fact-checking
              and unbiased reporting, we strive to provide readers with relevant
              news, in-depth analysis, and thought-provoking pieces. However,
              this website delivers unbiased and unique insight on various news
              topics.   The channel goes by the motto “नए भारत की आवाज” meaning
              the Voice of New India. Thus, The Autring promotes the undying
              optimism of the new India by being a creative voice. The Autring
              strives to showcase the progress of our nation as well as
              highlight pertinent issues. The channel broadcasts the news in
              English and Hindi to appeal to a wide variety of viewers.
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
              <li>
                <a href='#terms-of-services'>Lorem</a>
              </li>
              <li>
                <a href='#terms-of-services'>Lorem</a>
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
