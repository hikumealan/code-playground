import React from 'react';
import '../../styles.scss';

const CSSHelpers = () => {
    const helpers =
        [
            {
                class: 'nexus-row',
                description: 'Required: The wrapper for all other grid classes',
            },
            {
                class: 'nexus-no-gutter',
                description: 'Removes the gutters from all nested columns. (.nexus-row modifier)',
            },
            {
                class: 'nexus-col-<BREAKPOINT_NAME>',
                description: 'Automatically sets the width of the columns based on number of items',
            },
            {
                class: 'nexus-col-<BREAKPOINT_NAME>-<NUMBER_OF_COLUMNS>',
                description: 'Creates a column inside a row based on the BREAKPOINT_NAME and NUMBER_OF_COLUMNS defined',
            },
            {
                class: 'nexus-col-<BREAKPOINT_NAME>-offset-<NUMBER_OF_COLUMNS>',
                description: 'Offests a column',
            },
            {
                class: 'nexus-start-<BREAKPOINT_NAME>',
                description: 'Horizontally align items to the start',
            },
            {
                class: 'nexus-center-<BREAKPOINT_NAME>',
                description: 'Horizontally align items to the center',
            },
            {
                class: 'nexus-end-<BREAKPOINT_NAME>',
                description: 'Horizontally align items to the end',
            },
            {
                class: 'nexus-top-<BREAKPOINT_NAME>',
                description: 'Vertically align items to the top (.nexus-row modifier)',
            },
            {
                class: 'nexus-middle-<BREAKPOINT_NAME>',
                description: 'Vertically align items to the middle (.nexus-row modifier)',
            },
            {
                class: 'nexus-bottom-<BREAKPOINT_NAME>',
                description: 'Vertically align items to the bottom (.nexus-row modifier)',
            },
            {
                class: 'nexus-around-<BREAKPOINT_NAME>',
                description: 'Distribute space around nested columns (.nexus-row modifier)',
            },
            {
                class: 'nexus-between-<BREAKPOINT_NAME>',
                description: 'Distribute space between nested columns (.nexus-row modifier)',
            },
            {
                class: 'nexus-first-<BREAKPOINT_NAME>',
                description: 'Reorders the selected column as the first column',
            },
            {
                class: 'nexus-last-<BREAKPOINT_NAME>',
                description: 'Reorders the selected column as the last column',
            },
            {
                class: 'nexus-hidden',
                description: 'Hides content by setting display: none;',
            },
            {
                class: 'nexus-hidden-<BREAKPOINT_NAME>',
                description: 'Hides content based on the Breakpoint\'s min-width to max-width range by setting display:none;',
            },
            {
                class: 'nexus-reverse',
                description: 'Reverses the order of all nested columns (.nexus-row modifier)',
            }
        ]

    const mixins =
        [{
            mixins: 'row()',
            description: 'Creates the grids row wrapper',
        },
        {
            mixins: 'col-gutter($gutter: 0)',
            description: 'Sets the columns gutters',
        },
        {
            mixins: 'col($ratios:1, $gutter: 0)',
            description: 'Creates a column based on the ratios and gutters passed in. Example: col(1/4, 10px)',
        },
        {
            mixins: 'offset($ratios:1)',
            description: 'Offests a column'
        },
        {
            mixins: 'start()',
            description: 'Horizontally align items to the start (.nexus-row modifier)'
        },
        {
            mixins: 'center()',
            description: 'Horizontally align items to the center (.nexus-row modifier)'
        },
        {
            mixins: 'end()',
            description: 'Horizontally align items to the end (.nexus-row modifier)'
        },
        {
            mixins: 'top()',
            description: 'Vertically align items to the top (.nexus-row modifier)'
        },
        {
            mixins: 'middle()',
            description: 'Vertically align items to the middle (.nexus-row modifier)'
        },
        {
            mixins: 'bottom()',
            description: 'Vertically align items to the bottom (.nexus-row modifier)'
        },
        {
            mixins: 'around()',
            description: 'Distribute space around nested columns (.nexus-row modifier)'
        },
        {
            mixins: 'between()',
            description: 'Distribute space between nested columns (.nexus-row modifier)'
        },
        {
            mixins: 'first()',
            description: 'Reorders the selected column as the first column'
        },
        {
            mixins: 'last()',
            description: 'Reorders the selected column as the last column'
        },
        {
            mixins: 'row-reverse()',
            description: 'Reverses the order of all nested columns. (.nexus-row modifier)'
        }
        ]

    return (
        <section className='nexus-col-xs-4 nexus-mt-4'>
            <span className='nexus-h3'>CSS Helper</span>
            <hr className='underline' />
            <div className='nexus-mt-4 nexus-mb-4'>
                <div className='nexus-mt-2 nexus-mb-2'>
                    <span className='nexus-h4 nexus-pt-4'>Classes</span>
                </div>
                <table className='nexus-table'>
                    <thead>
                        <tr>
                            <th>Class</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {helpers.map((data) => (
                            <tr>
                                <td>{data.class}</td>
                                <td>{data.description}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className='nexus-mt-4 nexus-mb-4'>
                <div className='nexus-mt-2 nexus-mb-2'>
                    <span className='nexus-h4'>Mixins</span>
                </div>
                <table className='nexus-table'>
                    <thead>
                        <tr>
                            <th>Mixins</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {mixins.map((data) => (
                            <tr>
                                <td>{data.mixins}</td>
                                <td>{data.description}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </section>)
}

export default CSSHelpers;