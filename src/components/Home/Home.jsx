import React from 'react';
import './Home.css';
import Background from './djjosehernandez.jpg';

var sectionStyle = {
  top: '0',
  bottom: '0',
  position: 'absolute',
  width: '100%',
  height: '100%',
  backgroundImage: `url(${Background})`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
};

function Home() {
  return <section style={sectionStyle}></section>;
}

export default Home;
