import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';
import Bottas from '../images/drivers/valtteri.jpg';
import Zhou from '../images/drivers/zhou.jpg';

const DriversContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  padding: 20px;
`;

const DriverCard = styled.div`
  background-color: rgba(0, 0, 0, 0.7); /* Dark transparent background */
  border-radius: 15px; /* Rounded corners */
  padding: 20px;
  width: 50%;
  box-sizing: border-box;
`;

const DriverImageContainer = styled.div`
  overflow: hidden;
  border-radius: 10px; /* Rounded corners for the image container */
  height: 500px; /* Adjust the height as needed to show only the first 50% of the image */
`;

const DriverImage = styled(Image)`
  width: 100%;
  border-radius: 10px; /* Rounded corners for the image */
`;

const DriverInfo = styled.div`
  margin-top: 15px;
  text-align: center;
`;

const DriverNumber = styled.div`
  font-size: 24px;
  color: white;
  font-family: Arial, sans-serif;
`;

const CountryFlag = styled.span`
  margin-left: 10px;
  /* Add styling for your country flag component */
`;

const DriverName = styled.div`
  margin-top: 10px;
  font-size: 18px;
  color: white;
  font-family: Arial, sans-serif;
`;

const Drivers: React.FC = () => {
  return (
    <DriversContainer>
      {/* Driver 1 */}
      <DriverCard>
        <DriverImageContainer>
            <DriverImage
            src={Bottas}
            alt="Valtteri"
            width={700}
            height={400}
            layout="responsive" 
            />
        </DriverImageContainer>
        <DriverInfo>
          <DriverNumber>77 <CountryFlag>🇫🇮</CountryFlag></DriverNumber>
          <DriverName>Valterri Bottas</DriverName>
        </DriverInfo>
      </DriverCard>

      {/* Driver 2 */}
      <DriverCard>
      <DriverImageContainer>
            <DriverImage
            src={Zhou}
            alt="Zhou"
            width={700}
            height={400}
            layout="responsive" 
            />
        </DriverImageContainer>
        <DriverInfo>
          <DriverNumber>24 <CountryFlag>🇨🇳</CountryFlag></DriverNumber>
          <DriverName>Zhou Guanyu</DriverName>
        </DriverInfo>
      </DriverCard>
    </DriversContainer>
  );
};

export default Drivers;
