import React from 'react';

import { NexusLoader } from '@nexus/react';

interface LoaderComponentProps {
  show: boolean;
  fullscreen: boolean;
}

const LoaderComponent: React.FC<LoaderComponentProps> = (props) => {
  const { show, fullscreen } = { ...props };
  return <NexusLoader show={show} fullscreen={fullscreen}></NexusLoader>;
};

LoaderComponent.defaultProps = {
  show: true,
  fullscreen: false
};

export default LoaderComponent;
