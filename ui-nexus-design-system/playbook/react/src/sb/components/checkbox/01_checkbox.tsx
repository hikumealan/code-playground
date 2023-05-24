import React from 'react';
import PropTypes from 'prop-types';

import { NexusCheckbox } from '@nexus/react';


const CheckboxComponent: React.FC = (props) => <NexusCheckbox {...props}>Check me!</NexusCheckbox>

CheckboxComponent.propTypes = {
  attrId: PropTypes.string,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  indeterminate: PropTypes.bool,
  required: PropTypes.bool
};

export default CheckboxComponent;
