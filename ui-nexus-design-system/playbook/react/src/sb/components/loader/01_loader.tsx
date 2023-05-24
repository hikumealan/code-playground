import React from 'react';
import PropTypes from 'prop-types';
import { loader } from '../../constants';

import { NexusLoader } from '@nexus/react';

const LoaderComponent: React.FC = (props) => {
  const { show = loader.show, fullscreen = loader.fullScreen } = { ...props };
  return <NexusLoader show={show} fullscreen={fullscreen}></NexusLoader>;
};

LoaderComponent.propTypes = {
  show: PropTypes.bool,
  fullscreen: PropTypes.bool
};

export default LoaderComponent;
