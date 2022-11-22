import React from 'react';

import NewsCard from '../Home/Card/NewsCard';
import Footer from '../Layout/Footer/Footer';

import share from '../../assets/icons/shareIcon.svg';
import NavbarHome from '../Layout/Navbar/NavbarHome';

import './NewsDetail.css';
import { useState } from 'react';

const list = [1, 2, 3, 4, 5];

const NewsDetail = () => {
  const [popUp, setPopUp] = useState(false);
  const handleShare = () => {
    navigator.clipboard.writeText(window.navigation.currentEntry.url);
    setPopUp(true);
    setTimeout(() => {
      setPopUp(false);
    }, 1000);
  };

  return (
    <div className='news'>
      <NavbarHome />

      <div className='hero-section'>
        <div className={`pop-up ${popUp ? 'show' : 'hide'}`}> Copied Url </div>
        <div className='icons'>
          <div className='icon share-icon' onClick={handleShare}>
            <img src={share} alt='' />
          </div>
        </div>
        <div className='hero-image'>
          <img src={require('../../assets/images/hero-image.png')} alt='img' />
        </div>
        <div className='hero-content'>
          <h2>
            INS Vikrant: Inside India’s newly-commissioned aircraft carrier
          </h2>
        </div>
      </div>
      {/* News Content */}
      <div className='news-content'>
        <div>
          <p className='lead'>
            India has commissioned its first indigenously-built aircraft
            carrier, Vikrant, at a ceremony in the southern state of Kerala. The
            BBC's Jugal Purohit took a tour of the vessel ahead of its induction
            into the Indian navy. On Friday morning, the 45,000-tonne Vikrant
            got the prefix INS (Indian Naval Ship) at a formal commissioning
            ceremony, attended by Prime Minister Narendra Modi. It is a moment
            that was 13 years in the making.
          </p>
          <p className='lead'>
            The vessel - 262m (860ft) long and almost 60m (197ft) tall - is the
            first aircraft carrier India has designed and built on its own. It
            has the capacity to hold 30 fighter planes and helicopters.
          </p>

          <p className='lead'>
            Mr Modi called the carrier <strong>"a floating city"</strong> and
            the <strong>"symbol of indigenous potential"</strong> .
          </p>
          <p className='lead green-italic'>
            "With INS Vikrant, India has joined the list of countries which
            manufacture huge aircraft carriers with indigenous technology. It
            has filled the country with a new confidence.”
          </p>

          <p className='lead'>He said at the commissioning ceremony.</p>
          <p className='lead'>
            India's other aircraft carrier, INS Vikramaditya, can carry more
            than 30 aircraft. The UK Royal Navy's HMS Queen Elizabeth can carry
            about 40 and the US Navy's Nimitz class carriers can accommodate
            more than 60 aircraft.
          </p>
        </div>
        <div className='section-image'>
          <img src={require('../../assets/images/news-section.png')} alt='' />
          <span>
            Vikrant was launched in 2013 before extensive trials began
          </span>
        </div>
        <div>
          <p className='lead'>
            Vikrant, which cost around 200bn rupees ($2.5bn; £2.1bn), was
            expected to be inducted into the navy by 2017. But the second phase
            of its construction was beset by delays.
          </p>

          <p className='lead'>
            But the ship's commissioning is still a historic moment for India,
            which will now join a select group of countries capable of building
            such a vessel. It's also a shot in the arm for Mr Modi's plans to
            boost domestic defence manufacturing.
          </p>
          <p className='lead'>
            The name Vikrant (which means courageous) is also special - it was
            what India's first aircraft carrier, bought from the UK and
            commissioned in 1961, was called. The first INS Vikrant was a major
            symbol of national pride and played an important role in several
            military operations - including the 1971 war with Pakistan - before
            being decommissioned in 1997.
          </p>
        </div>
        {/* Articles */}
        <div className='articles'>
          <h2>Related Articles</h2>
          <div className='news-card-list'>
            {list.map((_, idx) => (
              <NewsCard key={idx} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NewsDetail;
