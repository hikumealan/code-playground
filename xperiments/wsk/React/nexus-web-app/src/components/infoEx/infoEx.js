import React from 'react';
import DemoTemplate from '../demoTemplate/demoTemplate';
import i18n from 'i18n';
import './infoEx.scss';
const InfoEx = () => {
    const translationScope = 'infoEx';

    return (
        <DemoTemplate
            header={i18n.t('header', { scope: translationScope })}
            description={i18n.t('description', { scope: translationScope })}
        >
            <div>Placeholder</div>
        </DemoTemplate>
    );
};

export default InfoEx;
