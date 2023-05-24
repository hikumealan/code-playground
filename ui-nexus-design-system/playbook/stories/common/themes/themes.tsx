import React from 'react';
import THEMES_JSON from '../../../../tmp/scssVariableDocs.json';
import BasePageLayout from '../component/layout/layout';

const Themes: React.FC = () => {
    return (
        <BasePageLayout bannerHeader='Themes'>
            <div className='nexus-container nexus-body'>
                <div className='nexus-row'>
                    {
                        THEMES_JSON.map((themeVariables, idx) => (
                            <section key={idx} className='nexus-col-xs-4 nexus-mt-4 nexus-mb-4'>
                                <span className='nexus-h4'>{themeVariables['groupName']}</span>
                                <div className='nexus-mb-2' />
                                <table className='nexus-table'>
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Value</th>
                                            <th>Description</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {themeVariables.variables.map(
                                            (data, idy) => (
                                                <tr>
                                                    <td>{data.name}</td>
                                                    <td>{data.value}</td>
                                                    <td>{data.description}</td>
                                                </tr>
                                            )
                                        )}
                                    </tbody>
                                </table>
                            </section>
                        ))
                    }
                </div>
            </div>

        </BasePageLayout>
    );
}

export default Themes;