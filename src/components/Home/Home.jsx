import React from 'react';
import './Home.css';
import Background from './djjosehernandez.png';

var sectionStyle = {
  top: '0',
  bottom: '0',
  position: 'absolute',
  width: '100%',
  height: '100%',
  backgroundImage: `url('${Background}')`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
};

function Home() {
  return (
    <>
      <div className="mixcloud-home">
        <iframe
          title="mixcloud-home-player"
          width="100%"
          height="60"
          src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&mini=1&autoplay=1&feed=%2FDjJoseHernandez%2F"
          frameBorder="0"
          allow="autoplay"
        ></iframe>
      </div>
      <div className="container-book-now">
      <a className="cta" href="mailto:djjosehernandez@hotmail.com?subject=Booking inquiry">
        <button className='book-now'>BOOK NOW</button>
      </a>
      </div>
      <div className='bio'>Halloween 2010 was the beginning of Jose's journey as a club DJ, a few weeks later he would go on to make his debut
at BLVD22 for a lengthier opening set showcasing his talents to many for the first time. 2023 marks Jose's 11th year as a
VTF DJ, 11 years ago he won the then annual Vancouver Trance Family DJ competition for new and up and coming talent 
which offered him this start into the local Trance scene. In the years since his VTF debut, Jose's been fortunate enough
 to share the decks with many international talents such as Ummet Ozcan, ilan Bluestone, 
Markus Schulz, Maor Levi, Ben Nicky, Jordan Suckley, Giuseppe Ottaviani, Nadia Ali, Emma Hewitt, and most recently 
Andrew Bayer. His love of various sub-genres of dance include - deep house, tech house, house, melodic
 techno, afro house & progressive house via his podcast #makingprogress which he started in 2013. His biggest inspiration and 
reason for continuing to pursue his passion as a DJ, stems from his deep-rooted love for trance music bringing a unique
 style of building up the energy in his sets with trance, a dash of techno, and tech-trance. He's been gifted with 
opportunities to play various club gigs across Vancouver and landing a spot at the world-renowned Underground in Seattle, WA. 
</div>
      <section rel="preload" style={sectionStyle}>
        {' '}
      </section>
    </>
  );
}

export default Home;
