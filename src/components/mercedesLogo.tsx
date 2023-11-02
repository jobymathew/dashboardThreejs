"use client";
import BenzLogo from "../images/mercedes-logo.png"

import Image from 'next/image';
import React from 'react';

const MercedesLogo: React.FC = () => {
  return (
    <Image src={BenzLogo} alt="logo" width={200} height={200}/>
  );
};

export default MercedesLogo;
