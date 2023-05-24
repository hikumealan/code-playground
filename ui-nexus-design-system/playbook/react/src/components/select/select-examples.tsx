import React, { useState } from 'react';

import { NexusFormField, NexusLabel, NexusSelect, NexusOption, NexusCheckbox } from '@nexus/react';

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

const multiSelectOptions = [
  {
    value: 'Option 1',
    isSelected: false
  },
  {
    label: 'Option 2',
    value: 'Option2',
    isSelected: false
  },
  {
    label: 'Option 3',
    value: 'Option3',
    isSelected: false
  }
];

const SelectExampleComponent: React.FC = () => {
  const delimit = '::';
  const [value, setValue] = useState('Please Select');

  const [selectData, setSelectData] = useState(selectOptions);
  const [multiSelectData, setMultiSelectData] = useState(multiSelectOptions);

  const setOptionStatus = (eventData: { detail: { key: string } }) => {
    const updateSelectState = [...selectData];
    updateSelectState.forEach((obj) => (obj.isSelected = false));
    const objIndex = updateSelectState.findIndex((obj) => obj.value === eventData.detail.key);
    updateSelectState[objIndex].isSelected = true;
    setSelectData([...updateSelectState]);
  };

  const setOptionStatusForMultiSelect = (eventData: { detail: { key: string; status: boolean } }) => {
    if (eventData.detail.key) {
      const updateSelectState = [...multiSelectData];
      const objIndex = updateSelectState.findIndex((obj) => obj.value === eventData.detail.key);
      updateSelectState[objIndex].isSelected = eventData.detail.status;
      setMultiSelectData([...updateSelectState]);
    }
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

  const selectAndDeSelectAllElements = (event: { target: { checked: boolean } }) => {
    const updateSelectState = [...multiSelectOptions];
    updateSelectState.forEach((obj) => (obj.isSelected = event.target.checked));
    setMultiSelectData([...updateSelectState]);
  };

  const setCloseEvent = (_eventData: any) => {
    //do something
  };

  return (
    <>
      <p className="nexus-h5">Custom Content</p>
      <p className="nexus-h6">Select</p>
      <div className="nexus-row">
        <div className="nexus-col-xs-8 nexus-col-sm-4 nexus-col-md-2">
          <NexusFormField>
            <NexusLabel>Select an option Native</NexusLabel>
            <NexusSelect
              data-testid="native-select"
              value={value}
              onInput={(event: any) => setValue(event.target.value)}
              attr-id="select-1"
            >
              <option hidden disabled></option>
              <option value="Please Select">Please Select</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </NexusSelect>
          </NexusFormField>
        </div>
        <div className="nexus-col-xs-8 nexus-col-sm-4 nexus-col-md-2">
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
                <NexusOption key={idx} value={element.value} selected={element.isSelected} disabled={element.disabled}>
                  <span>{element.value}</span>
                </NexusOption>
              ))}
            </NexusSelect>
          </NexusFormField>
        </div>
        <div className="nexus-col-xs-8 nexus-col-sm-4 nexus-col-md-2">
          <NexusFormField>
            <NexusLabel>Select an option MultiSelect</NexusLabel>
            <NexusSelect
              data-testid="custom-multi-select"
              attr-id="custom-multi-select-1"
              type="custom"
              delimiter={delimit}
              value={setSelectedValue(multiSelectData) ? setSelectedValue(multiSelectData) : 'Please Select'}
              onTriggerSelection={(eventData: any) => {
                setOptionStatusForMultiSelect(eventData);
              }}
              multiple
              onCloseEvent={(eventData: any) => setCloseEvent(eventData)}
            >
              {' '}
              <NexusOption onInput={(event: any) => selectAndDeSelectAllElements(event)}>
                <NexusCheckbox data-testid="select-all" >Select All</NexusCheckbox>
              </NexusOption>
              {multiSelectData.map((element, idx) => (
                <NexusOption key={idx} value={element.value} label={element.label} selected={element.isSelected}>
                  <NexusCheckbox checked={element.isSelected}>
                    {element.label ? element.label : element.value}
                  </NexusCheckbox>
                </NexusOption>
              ))}
            </NexusSelect>
          </NexusFormField>
        </div>
      </div>
    </>
  );
};

export default SelectExampleComponent;
