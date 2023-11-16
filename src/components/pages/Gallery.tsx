// Gallery.tsx
import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

import Gallery1 from '../../images/gallery/gallery1.jpeg';
import Gallery2 from '../../images/gallery/gallery2.jpeg';
import Gallery3 from '../../images/gallery/gallery3.jpeg';
import Gallery4 from '../../images/gallery/gallery4.jpeg';

const GalleryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* Two columns */
  gap: 20px; /* Gap between images */
  margin-top: 20px;
`;

const GalleryImage = styled.div`
  width: 400px; /* Adjust as needed to cover as much screen as possible */
  margin-bottom: 20px; /* Add some padding between rows */
  box-sizing: border-box;
`;

const images = [Gallery1, Gallery2, Gallery3, Gallery4];

const Gallery: React.FC = () => {
  return (
    <GalleryContainer>
      {images.map((image, index) => (
        <GalleryImage key={index}>
          <Image
            src={image}
            alt={`Image ${index + 1}`}
            width={400} // Set the desired width
            height={300} // Set the desired height
          />
        </GalleryImage>
      ))}
    </GalleryContainer>
  );
};

export default Gallery;
