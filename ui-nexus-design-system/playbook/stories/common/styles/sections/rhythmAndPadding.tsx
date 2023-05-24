import React from 'react';


const RhythmAndPadding = () => {
    const rhythmAndPadding = [{
        name: `.nexus-rhythm-<code>&lt;INCREMENT&gt;</code>`,
        description: `Controls the vertical space under a component.
        <code>INCREMENT</code> values
        are <code>1</code> - <code>20</code> and go in increments of 8px.`
    },
    {
        name: `.nexus-rhythm-top-<code>&lt;INCREMENT&gt;</code>`,
        description: `Controls the top space under a component.
        <code>INCREMENT</code> values
        are <code>1</code> - <code>20</code> and go in increments of 8px.`
    },
    {
        name: `.nexus-rhythm-bottom-<code>&lt;INCREMENT&gt;</code>`,
        description: `Controls the bottom space under a component.
        <code>INCREMENT</code> values
        are <code>1</code> - <code>20</code> and go in increments of 8px.`
    },
    {
        name: `.nexus-padding-<code>&lt;INCREMENT&gt;</code>`,
        description: `Controls the horizontal padding space for a component.
        <code>INCREMENT</code> values
        are <code>1</code> - <code>20</code> and go in increments of 8px.`
    },
    {
        name: `.nexus-padding-left-<code>&lt;INCREMENT&gt;</code>`,
        description: `Controls the padding left space for a component.
        <code>INCREMENT</code> values
        are <code>1</code> - <code>20</code> and go in increments of 8px.`
    },
    {
        name: `.nexus-padding-right-<code>&lt;INCREMENT&gt;</code>`,
        description: `Controls the padding right space for a component.
        <code>INCREMENT</code> values
        are <code>1</code> - <code>20</code> and go in increments of 8px.`
    }
    ]

    return (
        <section className='nexus-col-xs-4 nexus-mt-4 nexus-mb-4'>
            <span className='nexus-h4'>Rhythm and Padding</span>
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
                        rhythmAndPadding.map(data => <tr>
                            <td dangerouslySetInnerHTML={{ __html: data.name}}></td>
                            <td dangerouslySetInnerHTML={{ __html: data.description}}></td>
                        </tr>)
                    }
                </tbody>
            </table>
        </section>
    );
}

export default RhythmAndPadding;