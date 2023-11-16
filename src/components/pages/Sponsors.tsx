import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

import Kick from '../../images/sponsors/kick.png';
import Stake from '../../images/sponsors/stake.png';
import Singha from '../../images/sponsors/singha.png';
import Puma from '../../images/sponsors/puma.png';
import Mitsubishi from '../../images/sponsors/mitsubishi.png';
import Pirelli from '../../images/sponsors/pirelli.png';

const SponsorsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* Two columns */
  gap: 20px; /* Gap between images */
  margin-top: 20px;
`;

const SponsorBox = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 10px; 
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255);
  padding: 10px;
`;

const Sponsors: React.FC = () => {
  const sponsors = [Kick, Stake, Singha, Puma, Mitsubishi, Pirelli];

  return (
    <SponsorsContainer>
      {sponsors.map((sponsor, index) => (
        <SponsorBox key={index}>
          <Image src={sponsor} alt={`Sponsor ${index + 1}`} height={200} width={200}/>
        </SponsorBox>
      ))}
    </SponsorsContainer>
  );
};

export default Sponsors;