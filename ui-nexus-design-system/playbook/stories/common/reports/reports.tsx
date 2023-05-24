import React from 'react';
import PKG_JSON from '../../../../package.json';
import BasePageLayout from '../component/layout/layout';

const CodeCoverage: React.FC = () => {
    const BASE_URL = `https://apsdfsoom5wap0a.azurewebsites.net`;
    const version = PKG_JSON.version;
    return (
        <BasePageLayout bannerHeader='Reports/Code Quality'>
            <section className='nexus-container'>
                <div className='nexus-row'>
                    <div className='nexus-col-xs-4'>
                        <iframe src={`${BASE_URL}/${version}/lcov-report/index.html`} height={1000} width={1300} />
                    </div>
                </div>
            </section>
        </BasePageLayout>
    )
}

export default CodeCoverage