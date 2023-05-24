import React, { useState } from 'react';
import { tabBarCustomContent } from '../../../../../stories/data/tab-bar';
import { NexusTabBar } from '@nexus/react';

const WithCustomContentComponent: React.FC = () => {
  const [newtabOption, setnewtabOption] = useState(tabBarCustomContent);

  const ChangeActive = (index: number) => {
    const selectedTab = [...tabBarCustomContent];

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
                dangerouslySetInnerHTML={{ __html: option.value }}
                key={index} style={{ margin: '20px' }} />
            )
        )}
      </div>
    </div>
  );
};

export default WithCustomContentComponent;
