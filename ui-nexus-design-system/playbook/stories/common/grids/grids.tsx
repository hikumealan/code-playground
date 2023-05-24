import React, { useEffect } from 'react';
import Prism from 'prismjs';
import '../styles.scss';
import BasePageLayout from '../component/layout/layout';

import Breakpoints from './sections/breakpoints';
import CustomizeBreakpoints from './sections/customizeBreakpoints';
import Usage from './sections/usage';
import CSSHelpers from './sections/cssClassHelpers';
import ExtraSmallGrid from './sections/extraSmallGrid';
import SmallGrid from './sections/smallGrid';
import MediumGrid from './sections/mediumGrid';
import LargeGrid from './sections/largeGrid';
import ExtraLarge from './sections/extraLargeGrid';

export const GridsPage: React.FC = () => {

    useEffect(() => {
        Prism.highlightAll();
    }, [])

    return (
        <BasePageLayout bannerHeader='Grids'>
            <div className='nexus-container nexus-body'>
                <div className='nexus-row'>
                    <Breakpoints />
                    <CustomizeBreakpoints />
                    <Usage />
                    <CSSHelpers />
                    <ExtraSmallGrid />
                    <SmallGrid />
                    <MediumGrid />
                    <LargeGrid />
                    <ExtraLarge />
                </div>
            </div>
        </BasePageLayout>
    );
}