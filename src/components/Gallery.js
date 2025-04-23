import React from 'react';
import lawn1 from '../images/lawn1.jpg';
import lawn2 from '../images/lawn2.jpg';
import stump1 from '../images/stump1.jpg';
import tree1 from '../images/tree1.jpg';

const Gallery = () => {
  const images = [lawn1, lawn2, stump1, tree1];

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h2>Gallery</h2>
      <p>Some of our recent work:</p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`YardTrim project ${index + 1}`}
            style={{
              width: '300px',
              height: 'auto',
              borderRadius: '8px',
              boxShadow: '0 0 10px rgba(0,0,0,0.15)'
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
