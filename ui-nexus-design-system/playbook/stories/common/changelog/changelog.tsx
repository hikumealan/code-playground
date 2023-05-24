import React from 'react';
import ReactMarkdown from 'react-markdown'
import BasePageLayout from '../component/layout/layout';
import CHANGE_LOG from '!!raw-loader!./../../../../CHANGELOG.md';

const ChangeLog: React.FC = () => {

    return(
        <BasePageLayout bannerHeader='Changelog'>
            <section className='nexus-container nexus-body'>
                <div className='nexus-row'>
                    <div className='nexus-col-xs-4'>
                    <ReactMarkdown children={CHANGE_LOG} />
                    </div>
                </div>
            </section>
        </BasePageLayout>
    );
}

export default ChangeLog;