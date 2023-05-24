import React from 'react';

import {
  NexusCard,
  NexusCardAvatar,
  NexusCardFooter,
  NexusCardHeader,
  NexusCardHeaderButton,
  NexusCardHeaderDetails,
  NexusCardHeaderSubtitle,
  NexusCardHeaderTitle,
  NexusIcon
} from '@nexus/react';
import CardHeaderImage from '@nexus/core/dist/assets/images/card-header-image.png';
import ButtonIcon from '@nexus/core/dist/assets/icons/navigation/ic_more_horiz_24px.svg';

interface CardComponentProps {
  bgColor: string;
  bgImage: string;
  clickable: boolean;
  height: string;
}

const CardComponent: React.FC<CardComponentProps> = (props) => {
  const { bgColor, bgImage, clickable, height } = { ...props };
  return (
    <div className="nexus-row">
      <div className="nexus-col-xs-6">
        <NexusCard bgColor={bgColor} clickable={clickable} height={height}>
          <NexusCardAvatar>
            <img src={bgImage === '' ? './assets/images/card-header-image.png':bgImage} alt="Michael Bay" />
          </NexusCardAvatar>
          <NexusCardHeader>
            <NexusCardHeaderTitle>Michael Bay</NexusCardHeaderTitle>
            <NexusCardHeaderSubtitle>User Profile Card</NexusCardHeaderSubtitle>
            <NexusCardHeaderDetails>Last login: 02.20.21</NexusCardHeaderDetails>
            <NexusCardHeaderButton>
              <button className="nexus-btn-icon" id="btn" title="btn">
                <NexusIcon src={ButtonIcon} />
              </button>
            </NexusCardHeaderButton>
          </NexusCardHeader>
          <NexusCardFooter>
            <button className="nexus-btn-primary nexus-btn-medium">View Profile</button>
            <button className="nexus-btn nexus-btn-medium">Contact User</button>
          </NexusCardFooter>
        </NexusCard>
      </div>
    </div>
  );
};

CardComponent.defaultProps = {
  bgColor: '',
  bgImage: CardHeaderImage,
  clickable: false,
  height: ''
};

export default CardComponent;
