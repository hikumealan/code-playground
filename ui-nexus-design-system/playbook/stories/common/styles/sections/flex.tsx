import React from 'react';

const Flex = () => {
    const flexDetails = [
        {
            name: '.nexus-flex',
            description: `Positions items horizontally in the same direction
                    <code>flex-direction: row;</code>`
        },
        {
            name: '.nexus-flex-reverse',
            description: `Positions items horizontally in the opposite direction
                    <code>flex-direction: row-reverse;</code>`
        },
        {
            name: '.nexus-flex-col',
            description: `Positions items vertically in the same direction
                    <code>flex-direction: column;</code>`,
        },
        {
            name: '.nexus-flex-col-reverse',
            description: `Positions items vertically in the opposite direction
                    <code>flex-direction: column-reverse;</code>`
        },
        {
            name: '.nexus-flex-1',
            description: `Allows an item to grow and shrink as needed, ignoring its
                    initial size <code>flex: 1 1 0;</code>`
        },
        {
            name: '.nexus-flex-auto',
            description: `Allows an item to grow and shrink, taking into account its
                    initial size <code>flex: 1 1 auto;</code>`,
        },
        {
            name: '.nexus-flex-initial',
            description: `Allows an item to shrink but not grow, taking into account its
                    initial size <code>flex: 0 1 auto;</code>`
        },
        {
            name: '.nexus-flex-none',
            description: `Prevents an item from growing or shrinking
                    <code>flex: none;</code>`
        },
        {
            name: '.nexus-flex-grow',
            description: `Allows an item to grow to fill any available space
                    <code>flex-grow: 1;</code>`
        },
        {
            name: '.nexus-flex-grow-0',
            description: `Prevents an item from growing <code>flex-grow: 0;</code>`
        },
        {
            name: '.nexus-flex-shrink',
            description: `Allows an item to shrink if needed <code>flex-shrink: 1;</code>`,
        },
        {
            name: '.nexus-flex-shrink-0',
            description: `Prevents an item from shrinking <code>flex-shrink: 0;</code>`
        }
    ]

    return (
        <section className='nexus-col-xs-4 nexus-mt-4 nexus-mb-4'>
            <span className='nexus-h4'>Flex</span>
            <hr className='underline nexus-mb-4' />
            <table className='nexus-table'>
                <thead>
                    <tr>
                        <th>Class</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        flexDetails.map(data => <tr>
                            <td dangerouslySetInnerHTML={{ __html: data.name }}></td>
                            <td dangerouslySetInnerHTML={{ __html: data.description }}></td>
                        </tr>)
                    }
                </tbody>
            </table>
        </section>
    );
}

export default Flex;