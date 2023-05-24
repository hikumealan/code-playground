import React from 'react';

const LayoutComponent = () => {
    const layout = [
        {
            name: '.nexus-container',
            description: 'Wrapper for containing layouts. Sets default padding and max-width.'
        },
        {
            name: '.nexus-theme-dark',
            description: 'Applies a dark background with light text and components'
        },
        {
            name: '.nexus-visually-hidden',
            description: 'Hides content from the screen but leaves at available for screen readers.'
        },
        {
            name: '.nexus-hidden',
            description: 'Hides content by setting display: none'
        },
        {
            name: '.nexus-hidden-<BREAKPOINT_NAME>',
            description: 'Hides content based on the Breakpoint\'s min-width to max-width range by setting display:none'
        }
    ]

    return(
        <section className='nexus-col-xs-4 nexus-col-md-4 nexus-col-lg-6 nexus-mt-4 nexus-mb-4'>
            <span className='nexus-h4'>Layout</span>
            <hr className='underline nexus-mb-4' />
            <p>The Nexus helper classes provide control over layout, spacing and visibility.</p>
            <table className='nexus-table'>
                <thead>
                    <tr>
                        <th>Class</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        layout.map(data => <tr>
                            <td>{data.name}</td>
                            <td>{data.description}</td>
                        </tr>)
                    }
                </tbody>
            </table>
        </section>
    );
}

export default LayoutComponent;