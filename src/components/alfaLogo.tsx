"use client";
import Alfa from "../images/alfa-logo.png";

import Image from 'next/image';
import React from 'react';

const AlfaLogo: React.FC = () => {
  return (
    <Image src={Alfa} alt="logo" width={100} height={100}/>
  );
};

export default AlfaLogo;
