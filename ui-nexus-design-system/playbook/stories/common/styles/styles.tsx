import React, {useEffect} from 'react';
import BasePageLayout from '../component/layout/layout';
import '../styles.scss';
import Prism from 'prismjs';

import LayoutComponent from './sections/layout';
import PaddingAndMargin from './sections/padding';
import RhythmAndPadding from './sections/rhythmAndPadding';
import SpacingComponent from './sections/spacing';
import Flex from './sections/flex';
import FlexDirection from './usage/flexDirection';
import FlexRowReversed from './usage/rowReversed';
import FlexColDirection from './usage/flexCol';
import FlexColReversedDirection from './usage/flexColReversed';
import Initial from './flex/initial';
import FlexOne from './flex/flexOne';
import None from './flex/none';
import Auto from './flex/auto';
import FlexShrink from './flex/flexShrink';
import FlexGrow from './flex/flexGrow';

const Styles: React.FC = () => {

    useEffect(() => {
        Prism.highlightAll();
    }, [])

    return(
        <BasePageLayout bannerHeader='CSS Helpers'>
            <div className='nexus-container nexus-body'>
                <div className='nexus-row nexus-around-md nexus-around-lg'>
                    <LayoutComponent />
                    <SpacingComponent />
                    <PaddingAndMargin />
                    <RhythmAndPadding />
                    <Flex />
                    <FlexDirection />
                    <FlexRowReversed />
                    <FlexColDirection />
                    <FlexColReversedDirection />
                    <Initial />
                    <FlexOne />
                    <Auto />
                    <None />
                    <FlexGrow />
                    <FlexShrink />
                </div>
            </div>
        </BasePageLayout>
    );
}

export default Styles;