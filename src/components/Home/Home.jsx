import React from 'react';
// import './Home.css';
import Background from './djjosehernandez.jpg';

var sectionStyle = {
  width: '100%',
  height: '70vh',
  backgroundImage: `url(${Background})`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
};

function Home() {
  return <section style={sectionStyle}></section>;
}

export default Home;
