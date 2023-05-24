import React from 'react';
import { NexusCard, NexusCardBody, NexusCardBodyImage, NexusCardFooter } from '@nexus/react';
import CardImage from '@nexus/core/dist/assets/images/card-image.jpg';
import { BodyWithImage } from '../../constants';

const BodyWithImageComponent: React.FC = () => (
  <div className="nexus-row">
    <div className="nexus-col-xs-4 nexus-col-sm-4 nexus-col-md-6 nexus-col-lg-8 nexus-col-xl-8">
      <NexusCard>
        <NexusCardBody>
          <NexusCardBodyImage>
            <img src={CardImage} alt="Alt Text" />
          </NexusCardBodyImage>
          <p data-testid="body-with-image-caption" className="nexus-caption-copy nexus-rhythm-4">{BodyWithImage.caption}</p>
          <h2 data-testid="body-with-image-body" className="nexus-h5">{BodyWithImage.subTitle}</h2>
          <p data-testid="body-with-image-bodyend">{BodyWithImage.detail}</p>
        </NexusCardBody>
        <NexusCardFooter>
          <button data-testid="body-with-image-btn-MoreInfo" className="nexus-btn-primary nexus-btn-medium">{BodyWithImage.moreInfo}</button>
          <button data-testid="body-with-image-btn-Dismiss" className="nexus-link">{BodyWithImage.dismiss}</button>
        </NexusCardFooter>
      </NexusCard>
    </div>
  </div>
);

export default BodyWithImageComponent;
