import React, { useState } from 'react';

import { NexusFormField, NexusLabel, NexusSelect, NexusOption, NexusCheckbox } from '@nexus/react';

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

    const [multiSelectData, setMultiSelectData] = useState(multiSelectOptions);

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
        </>
    );
};

export default SelectExampleComponent;
