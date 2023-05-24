import React, { useState } from 'react';

import { NexusTabBar } from '@nexus/react';

const TabBarComponent: React.FC = () => {
  const tabOption = [
    {
      title: 'Option 1',
      value: 'Option 1 selected',
      isActive: true
    },
    {
      title: 'Option 2',
      value: 'Option 2 selected',
      isActive: false
    },
    {
      title: 'Option 3',
      value: 'Option 3 selected',
      isActive: false
    }
  ];

  const [newtabOption, setnewtabOption] = useState(tabOption);

  const ChangeActive = (index: number) => {
    const selectedTab = [...tabOption];

    selectedTab.forEach((option) => {
      option.isActive = false;
    });
    selectedTab[index].isActive = true;
    setnewtabOption(selectedTab);
  };
  return (
    <div>
      <NexusTabBar>
        <span>
          {newtabOption.map((option, index) =>
            option.isActive ? (
              <button
                data-testid="tab-bar-active"
                key={index} className="nexus-link nexus-active" onClick={(_event) => ChangeActive(index)}>
                {option.title}
              </button>
            ) : (
              <button
                data-testid="tab-bar"
                key={index} className="nexus-link" onClick={(_event) => ChangeActive(index)}>
                {option.title}
              </button>
            )
          )}
        </span>
      </NexusTabBar>
      <div>
        {newtabOption.map(
          (option, index) =>
            option.isActive && (
              <div
                data-testid="tab-bar-selected-label"
                key={index} style={{ margin: '20px' }}>
                {option.value}
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default TabBarComponent;
