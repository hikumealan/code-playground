import React from 'react';
import { sizeAvatar } from '../../constants';
import { NexusAvatar } from '@nexus/react';


const SizeComponent: React.FC = () => {
    return (
        <div className='nexus-row nexus-around-xs'>
            <div className='nexus-col-md-1'>
                <p className="nexus-h6">XS</p>
                <NexusAvatar
                    userName={sizeAvatar.name}
                    avatarNameDisplay={sizeAvatar.avatarNameDisplay === 'true'}
                    avatarSize={sizeAvatar.sizeXS}
                    avatarLogoIcon={sizeAvatar.logoIcon}
                ></NexusAvatar>
            </div>

            <div className='nexus-col-md-1'>
                <p className="nexus-h6">SM</p>
                <NexusAvatar
                    userName={sizeAvatar.name}
                    avatarNameDisplay={sizeAvatar.avatarNameDisplay === 'true'}
                    avatarSize={sizeAvatar.sizeSM}
                    avatarLogoIcon={sizeAvatar.logoIcon}
                ></NexusAvatar>
            </div>


            <div className='nexus-col-md-1'>
                <p className="nexus-h6">MD</p>
                <NexusAvatar
                    userName={sizeAvatar.name}
                    avatarNameDisplay={sizeAvatar.avatarNameDisplay === 'true'}
                    avatarSize={sizeAvatar.sizeMD}
                    avatarLogoIcon={sizeAvatar.logoIcon}
                ></NexusAvatar>
            </div>

            <div className='nexus-col-md-1'>
                <p className="nexus-h6">LG</p>
                <NexusAvatar
                    userName={sizeAvatar.name}
                    avatarNameDisplay={sizeAvatar.avatarNameDisplay === 'true'}
                    avatarSize={sizeAvatar.sizeLG}
                    avatarLogoIcon={sizeAvatar.logoIcon}
                ></NexusAvatar>
            </div>


            <div className='nexus-col-md-1'>
                <p className="nexus-h6">XL</p>
                <NexusAvatar
                    userName={sizeAvatar.name}
                    avatarNameDisplay={sizeAvatar.avatarNameDisplay === 'true'}
                    avatarSize={sizeAvatar.sizeXL}
                    avatarLogoIcon={sizeAvatar.logoIcon}
                ></NexusAvatar>
            </div>
        </div>
    );
};


export default SizeComponent;
