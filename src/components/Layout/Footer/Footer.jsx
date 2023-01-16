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
              The Autring is a 24-hour online news channel. It is a subsidiary of the SIMMI Foundation, a pan-India NGO based in Gurgaon, Haryana. The Autring gives its audience access to timely, objective reporting and analysis in both written and visual forms.
              <br />
              The channel goes by the motto “नए भारत की आवाज” meaning the Voice of New India. Thus, The Autring promotes the undying optimism of the new India by being a creative voice. The Autring strives to showcase the progress of our nation as well as highlight pertinent issues. The channel broadcasts the news in English and Hindi to appeal to a wide variety of viewers.
            </p>
          </div>
          <div className='footer-content'>
            <h3 className='footer-subheading'>Quick Links</h3>
            <ul>
              <li>
                <a href='#navbar'>Go To Top</a>
              </li>
              <li>
                <a href='#trending'>Trending News</a>
              </li>
              <li>
                <a href='#latest'>Latest News</a>
              </li>
              <li>
                <a href='#home-search'>Search</a>
              </li>
            </ul>
          </div>
          <div className='footer-content'>
            <h3 className='footer-subheading'>Contact Us</h3>
            <p className='contactUs'>
            </p>
            <div className='footer-icons'>
              <i className='large youtube icon' onClick={() => window.open('https://youtube.com/@TheAutring', '_blank')}></i>
              <i className='large instagram icon' onClick={() => window.open('https://www.instagram.com/theautring/', '_blank')}></i>
              <i className='large facebook icon' onClick={() => window.open('https://m.facebook.com/100069928479823/', '_blank')}></i>
              <i className='large twitter icon' onClick={() => window.open('https://mobile.twitter.com/theautring', '_blank')}></i>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
