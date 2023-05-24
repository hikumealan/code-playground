import React from 'react';
import { NexusFooter, NexusFooterBottom, NexusFooterLogo, NexusIcon } from '@nexus/react';
import Logo from '@nexus/core/dist/assets/images/nexus-footer-logo.svg';

const FooterComponent: React.FC<{ setTransparency: boolean }> = ({ setTransparency = false }) => {
    const STORYBOOK_DEPLOYMENT_DATE = process.env.STORYBOOK_DEPLOYMENT_DATE;
    const bgStyle = {
        backgroundColor: 'transparent',
    };

    return (
        <NexusFooter className="nexus-footer-sticky" style={setTransparency ? bgStyle : {}}>
            <NexusFooterLogo>
                <a href="">
                    <NexusIcon src={Logo} />
                    <span className="nexus-visually-hidden">Home</span>
                </a>
            </NexusFooterLogo>
            <NexusFooterBottom>
                <div className='nexus-row nexus-center-xs nexus-center-sm'>
                    <div className='nexus-col-md-4 nexus-col-lg-6'>
                        <span>Copyright&#169; Ernst & Young, LLC. All rights reserved</span>
                    </div>
                    <div className='nexus-col-md-4 nexus-col-lg-6 nexus-end-xs'>
                        <span className="nexus-end-xs nexus-hidden-xs nexus-hidden-sm">{STORYBOOK_DEPLOYMENT_DATE}</span>
                    </div>
                </div>
            </NexusFooterBottom>
        </NexusFooter>
    )
}

export default FooterComponent;