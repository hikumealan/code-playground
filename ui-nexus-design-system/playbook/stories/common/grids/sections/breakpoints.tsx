import React from 'react';
import '../../styles.scss';

const Breakpoints = () => {
    return (
        <section className='nexus-col-xs-4 nexus-mt-4'>
            <span className='nexus-h3'>Grid Breakpoints</span>
            <hr className='underline' />
            <table className='nexus-table'>
                <caption>
                    <p>The nexus grid consists of variable columns depending on breakpoint. It has 4 columns on small screens, 8 columns on medium size screens and 12 columns on large screens.</p>
                </caption>
                <thead>
                    <tr>
                        <th>Size</th>
                        <th>Min Width</th>
                        <th>Columns</th>
                        <th>Gutters</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>2xs</td>
                        <td>0</td>
                        <td>4</td>
                        <td>16px</td>
                    </tr>
                    <tr>
                        <td>xs</td>
                        <td>320px</td>
                        <td>4</td>
                        <td>16px</td>
                    </tr>
                    <tr>
                        <td>sm</td>
                        <td>576px</td>
                        <td>4</td>
                        <td>16px</td>
                    </tr>
                    <tr>
                        <td>md</td>
                        <td>768px</td>
                        <td>8</td>
                        <td>24px</td>
                    </tr>
                    <tr>
                        <td>lg</td>
                        <td>1024px</td>
                        <td>12</td>
                        <td>24px</td>
                    </tr>
                    <tr>
                        <td>xl</td>
                        <td>1280px</td>
                        <td>12</td>
                        <td>24px</td>
                    </tr>
                    <tr>
                        <td>2xl</td>
                        <td>1440px</td>
                        <td>12</td>
                        <td>24px</td>
                    </tr>
                </tbody>
            </table>
        </section>)
}

export default Breakpoints;