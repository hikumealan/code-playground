import React from 'react';
import '../../styles.scss';
import BannerComponent from '../banner/banner';
import FooterComponent from '../footer/footer';


const BasePageLayout: React.FC<{ bannerHeader: string, children: React.ReactNode }> = (props) => {
    return (
        <>
            <BannerComponent header={props.bannerHeader} />
            <div className='main'>
                {props.children}
            </div>
            <div className='footer'>
                <FooterComponent setTransparency={false} />
            </div>
        </>
    )
}

export default BasePageLayout
