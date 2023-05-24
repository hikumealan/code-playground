import React, { useState } from 'react';

import { NexusFormField, NexusLabel, NexusSelect, NexusOption } from '@nexus/react';

const selectOptions = [
  {
    value: 'Please Select',
    isSelected: true,
    disabled: true
  },
  {
    value: 'Option 1',
    isSelected: false
  },
  {
    value: 'Option 2',
    isSelected: false
  },
  {
    value: 'Option 3',
    isSelected: false
  }
];

const SelectExampleComponent: React.FC = () => {
  const delimit = '::';

  const [selectData, setSelectData] = useState(selectOptions);

  const setOptionStatus = (eventData: { detail: { key: string } }) => {
    const updateSelectState = [...selectData];
    updateSelectState.forEach((obj) => (obj.isSelected = false));
    const objIndex = updateSelectState.findIndex((obj) => obj.value === eventData.detail.key);
    updateSelectState[objIndex].isSelected = true;
    setSelectData([...updateSelectState]);
  };

  const setSelectedValue = (data: any[]) => {
    const selecteddataObj: any[] = [];
    data.forEach((element: { isSelected: any }) => {
      if (element.isSelected) {
        selecteddataObj.push(element);
      }
    });
    return selecteddataObj
      .map(function (elem) {
        return elem.label ? elem.label : elem.value;
      })
      .join(delimit);
  };

  const setCloseEvent = (_eventData: any) => {
    //do something
  };

  return (
    <>
    
            <NexusFormField>
              <NexusLabel>Select an option Custom</NexusLabel>
              <NexusSelect
                data-testid="custom-select"
                attr-id="custom-select-1"
                type="custom"
                value={setSelectedValue(selectData)}
                onTriggerSelection={(eventData: any) => setOptionStatus(eventData)}
                onCloseEvent={(eventData: any) => setCloseEvent(eventData)}
              >
                {selectData.map((element, idx) => (
                  <NexusOption
                    key={idx}
                    value={element.value}
                    selected={element.isSelected}
                    disabled={element.disabled}
                  >
                    <span>{element.value}</span>
                  </NexusOption>
                ))}
              </NexusSelect>
            </NexusFormField>
    
    </>
  );
};

export default SelectExampleComponent;
