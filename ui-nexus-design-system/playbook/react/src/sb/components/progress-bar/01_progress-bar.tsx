import React from 'react';
import PropTypes from 'prop-types';
import { progressBar } from '../../constants';
import { NexusProgressBar } from '@nexus/react';


const ProgressBarComponent: React.FC = (props) => {
  const { circle = progressBar.circle, error = progressBar.indeterminate, indeterminate = progressBar.indeterminate, value = progressBar.value } = { ...props };

  return (
    <NexusProgressBar circle={circle} error={error} indeterminate={indeterminate} value={value}></NexusProgressBar>
  );
};

ProgressBarComponent.propTypes = {
  circle: PropTypes.bool,
  error: PropTypes.bool,
  indeterminate: PropTypes.bool,
  value: PropTypes.number
};

export default ProgressBarComponent;
