import React from 'react';

function About({ logo, aboutText }) {
  return (
    <aside>
      <img src={logo} alt="blog logo" />
      <p>{aboutText}</p>
    </aside>
  );
}

export default About;
