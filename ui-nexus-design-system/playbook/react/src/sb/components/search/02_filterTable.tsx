import { NexusIcon, NexusInput, NexusSearch, NexusSearchList, NexusSearchListItem } from "@nexus/react";
import React, { useEffect, useState } from "react";
import { filterTableConstants } from "../../constants";

const FilterTable: React.FC = () => {
    const [tableData, setTableData] = useState(filterTableConstants.rowData);
    const items = Array.from(new Set(filterTableConstants.rowData.map(records => records.make)));
    const [filtereditem, setFiltereditem] = useState(items);


    const filterTable = (event: any) => {
        const filterItemList = items.filter((item) => item.toLowerCase().includes(event.target.value));
        setFiltereditem(filterItemList);
    }

    const Performfilter = (e: any) => {
        const keyword = e.target.value;

        if (keyword !== '') {
          const results = items.filter((item) => item.toLowerCase().includes(keyword.toLowerCase()));
          setFiltereditem(results);
        } else {
          setFiltereditem([...items]);
        }
      };

    useEffect(() => {
        if(filtereditem.length === 1) {
            const data = filterTableConstants.rowData.filter((makes) => makes.make.toLowerCase() === filtereditem[0].toLowerCase())
            if(data.length === 0) {
                setTableData(filterTableConstants.rowData)
            }
            else {
                setTableData(data);
            }

        }
    }, [filtereditem]);

    return (
        <div>
            <NexusSearch>
                <NexusInput data-testid="search-bar" onKeyUp={Performfilter} onInput={(event) => filterTable(event)} autocomplete="off" placeholder={filterTableConstants.placeholder}>
                    <NexusIcon data-testid="search-icon" src={filterTableConstants.searchIconSrc}></NexusIcon>
                </NexusInput>
                <NexusSearchList>
                    <div>
                        {filtereditem.length > 0 && (
                            <div>
                                {filtereditem.map((item) => (
                                    <NexusSearchListItem data-testid="search-list" key={item} onClick={() => setFiltereditem([item])}>
                                        <button>{item}</button>
                                    </NexusSearchListItem>
                                ))}
                            </div>
                        )}
                    </div>
                </NexusSearchList>
            </NexusSearch>

            <table className="nexus-table">
                <thead>
                    <tr>
                        {filterTableConstants.colDefs.map((labels) => <th key={labels.field}>{labels.field}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {
                        tableData.map((records, idx) => <tr key={idx}>
                            <td>{records.make}</td>
                            <td>{records.model}</td>
                            <td>{records.year}</td>
                            <td>{records.owner}</td>
                            <td>{records.location}</td>
                            <td>{records.price}</td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    )
}

export default FilterTable;