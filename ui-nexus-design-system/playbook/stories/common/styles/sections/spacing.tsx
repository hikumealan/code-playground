import React from 'react';

const SpacingComponent = () => {
    const measurement = [
        {
            value: '1',
            measurement: '8px'
        },
        {
            value: '2',
            measurement: '16px'
        },
        {
            value: '3',
            measurement: '24px'
        },
        {
            value: '4',
            measurement: '32px'
        },
        {
            value: '5',
            measurement: '64px'
        },
        {
            value: '6',
            measurement: '80px'
        },
        {
            value: '7',
            measurement: '104px'
        },
        {
            value: '8',
            measurement: '120px'
        }
    ]

    return(
        <section className='nexus-col-xs-4 nexus-col-md-3 nexus-col-lg-5 nexus-mt-4 nexus-mb-4'>
            <span className='nexus-h4'>Spacing</span>
            <hr className='underline nexus-mb-4' />
            <table className='nexus-table'>
                <thead>
                    <tr>
                        <th>Value</th>
                        <th>Measurement</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        measurement.map(data => <tr>
                            <td>{data.value}</td>
                            <td>{data.measurement}</td>
                        </tr>)
                    }
                </tbody>
            </table>
        </section>
    );
}

export default SpacingComponent;