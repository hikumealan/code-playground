import React, { useState } from 'react';

import { NexusIcon, NexusInput, NexusSearch, NexusSearchList, NexusSearchListItem } from '@nexus/react';
import { DefaultSearch } from '../../constants';

const SearchComponent: React.FC = () => {
  const items = [{ name: 'Item 1' }, { name: 'Item 2' }, { name: 'Item 3' }];

  const [filtereditem, setFiltereditem] = useState(items);
  const Performfilter = (e: any) => {
    const keyword = e.target.value;

    if (keyword !== '') {
      const results = items.filter((item) => item.name.toLowerCase().indexOf(keyword.toLowerCase()) !== -1);
      setFiltereditem(results);
    } else {
      setFiltereditem([...items]);
    }
  };
  return (
    <NexusSearch>
      <NexusInput data-testid="search-bar" onKeyUp={Performfilter} autocomplete="off" placeholder={DefaultSearch.placeholder}>
        <NexusIcon data-testid="search-icon" src={DefaultSearch.searchIconSrc}></NexusIcon>
      </NexusInput>
      <NexusSearchList>
        <div>
          {filtereditem.length > 0 && (
            <div>
              {filtereditem.map((item) => (
                <NexusSearchListItem data-testid="search-list" key={item.name}>
                  <button>{item.name}</button>
                </NexusSearchListItem>
              ))}
            </div>
          )}
        </div>
      </NexusSearchList>
    </NexusSearch>
  );
};

export default SearchComponent;
