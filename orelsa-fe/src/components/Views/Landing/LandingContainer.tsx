import React from 'react'

interface ILandingContainer {
  children?: React.ReactNode;
}

const LandingContainer = ({ children }: ILandingContainer) => {
  return <div className=' flex items-center max-w-[1440px] height-screen mx-auto'>{children}</div>;
};

export default LandingContainer