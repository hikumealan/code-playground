import React from 'react';
import { NexusFormField, NexusSelect } from '@nexus/react';
import { withButton } from '../../constants';

const DropdownWithButtonComponent: React.FC = (props) => {
  const { type = 'native' } = { ...props };
  return (
    <>
      <div className="nexus-container">
        <NexusFormField className="nexus-flex-row">
          <button className="nexus-btn-primary nexus-col-xs-2">
            <NexusSelect type={type} value="">
              <option value="" disabled selected>
                {withButton.primaryOptions}
              </option>
              <option value="Option1">{withButton.add}</option>
              <option value="Option2" disabled selected>
                {withButton.delete}
              </option>
              <option value="Option3">{withButton.block}</option>
            </NexusSelect>
          </button>
          <button className="nexus-btn-warn nexus-col-xs-2">
            <NexusSelect type={type} value="">
              <option value="" disabled selected>
                {withButton.primaryOptions}
              </option>
              <option value="Option1">{withButton.save}</option>
              <option value="Option2" disabled selected>
                {withButton.load}
              </option>
              <option value="Option3">{withButton.edit}</option>
            </NexusSelect>
          </button>
        </NexusFormField>
      </div>
    </>
  );
};

export default DropdownWithButtonComponent;
