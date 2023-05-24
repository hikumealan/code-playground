import React from 'react';
import { columnDefs, rowData } from '../../constants';

const BasicTableComponent: React.FC = () => {
    const tHeadSection = columnDefs.map((item, idx) => <th key={idx}>{item.label}</th>);
    const tBodySection = rowData.map((row, idx) => <tr key={idx}>{Object.values(row).map((value, idy) => <td key={idy}>{value}</td>)}</tr>);

    return (
        <table className='nexus-table'>
            <thead>
                <tr>
                    {tHeadSection}
                </tr>
            </thead>
            <tbody>
                {tBodySection}
            </tbody>
        </table>
    )
}

export default BasicTableComponent;