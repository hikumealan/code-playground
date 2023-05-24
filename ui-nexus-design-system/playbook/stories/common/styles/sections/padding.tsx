import React from 'react';

const PaddingAndMargin = () => {

    return (
        <section className='nexus-col-xs-4 nexus-mt-4 nexus-mb-4'>
            <span className='nexus-h4'>Padding & Margin</span>
            <hr className='underline nexus-mb-4' />
            <table className='nexus-table'>
                <thead>
                    <tr>
                        <th>Class</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>.nexus-p[t|r|b|l|x|y]-<code>&lt;INCREMENT&gt;</code></td>
                        <td> Controls the padding space for a component. INCREMENT values are 1 - 8 and for values check spacing measurement table.
                            <br /> <code>empty - top right bottom left</code>
                            <br /> <code>x - left and right</code>
                            <br /> <code>y - top and bottom</code>
                            <br />
                            <br /> <code>t - top</code>
                            <br /> <code>r - right</code>
                            <br /> <code>b - bottom</code>
                            <br /> <code>l - left</code>
                            <br />
                        </td>
                    </tr>
                    <tr>
                        <td>.nexus-m[t|r|b|l|x|y]-<code>&lt;INCREMENT&gt;</code></td>
                        <td>Controls the margin space for a component. INCREMENT values are 1 - 8 and for values check spacing measurement table.
                            <br /> <code>empty - top right bottom left</code>
                            <br /> <code>x - left and right</code>
                            <br /> <code>y - top and bottom</code>
                            <br />
                            <br /> <code>t - top</code>
                            <br /> <code>r - right</code>
                            <br /> <code>b - bottom</code>
                            <br /> <code>l - left</code>
                            <br />
                        </td>
                    </tr>
                </tbody>
            </table>
        </section>
    );
}

export default PaddingAndMargin;