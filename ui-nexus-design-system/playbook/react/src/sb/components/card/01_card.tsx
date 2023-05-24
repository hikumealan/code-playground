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
import PropTypes from 'prop-types';
import { DefaultCard } from '../../constants';
import CardHeaderImage from '@nexus/core/dist/assets/images/card-header-image.png';


const CardComponent: React.FC = (props) => {
  const {
    bgColor = '',
    bgImage = CardHeaderImage,
    clickable = false,
    height = ''} = { ...props };
  return (
    <div className="nexus-row nexus-center-xs nexus-mt-2">
      <div className="nexus-col-xs-6">
        <NexusCard bgColor={bgColor} clickable={clickable} height={height}>
          <NexusCardAvatar>
            <img src={bgImage === '' ? DefaultCard.profile : bgImage} alt={DefaultCard.name} />
          </NexusCardAvatar>
          <NexusCardHeader>
            <NexusCardHeaderTitle>{DefaultCard.name}</NexusCardHeaderTitle>
            <NexusCardHeaderSubtitle>{DefaultCard.cardTitle}</NexusCardHeaderSubtitle>
            <NexusCardHeaderDetails>{DefaultCard.lastLogin}</NexusCardHeaderDetails>
            <NexusCardHeaderButton>
              <button className="nexus-btn-icon" id="btn" title="btn">
                <NexusIcon src={DefaultCard.src} />
              </button>
            </NexusCardHeaderButton>
          </NexusCardHeader>
          <NexusCardFooter>
            <button className="nexus-btn-primary nexus-btn-medium">{DefaultCard.viewProfile}</button>
            <button className="nexus-btn nexus-btn-medium">{DefaultCard.userProfile}</button>
          </NexusCardFooter>
        </NexusCard>
      </div>
    </div>
  );
};

CardComponent.propTypes = {
  bgColor: PropTypes.string,
  bgImage: PropTypes.string,
  clickable: PropTypes.bool,
  height: PropTypes.string
}

CardComponent.defaultProps = {
  bgColor: '',
  bgImage: CardHeaderImage,
  clickable: false,
  height: ''
};

export default CardComponent;
