import React from 'react';
import '../../styles.scss';

const BannerComponent: React.FC<{ header: string }> = ({ header }) => {
    return (
        <div className='banner nexus-pl-4 nexus-mb-2'>
            <span className="nexus-h3" > {header}</span >
        </div>
    );
}

export default BannerComponent;