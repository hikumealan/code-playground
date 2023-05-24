/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import { Link } from 'react-router-dom';
import { NexusCard, NexusCardBody, NexusCardBodyImage, NexusCardFooter } from '@nexus/react';
import CardImage from '@nexus/core/dist/assets/images/card-image.jpg';
import CardBgImage from '@nexus/core/dist/assets/images/card-bg-image.jpg';

const CardExampleComponent: React.FC = () => (
  <>
    <p className="nexus-h5">Body with image</p>

    <div className="nexus-row">
      <div className="nexus-col-xs-4 nexus-col-sm-2 nexus-col-md-4 nexus-col-lg-4 nexus-col-xl-3 ">
        <NexusCard>
          <NexusCardBody>
            <NexusCardBodyImage>
              <img src={CardImage} alt="Alt Text" />
            </NexusCardBodyImage>
            <p data-testid="body-with-image-caption" className="nexus-caption-copy nexus-rhythm-4">
              This is a caption of the image attached
            </p>
            <h2 data-testid="body-with-image-body" className="nexus-h5">
              This is a card with some text and images in it.
            </h2>
            <p data-testid="body-with-image-bodyend">
              The monkey-rope is found in all whalers; but its only in the Pequod that the monkey and his holder were
              ever tied together. This was introduced less than a mth
            </p>
          </NexusCardBody>
          <NexusCardFooter>
            <button data-testid="body-with-image-btn-MoreInfo" className="nexus-btn-primary nexus-btn-medium">
              More Info
            </button>
            <button data-testid="body-with-image-btn-Dismiss" className="nexus-link">
              Dismiss
            </button>
          </NexusCardFooter>
        </NexusCard>
      </div>
    </div>

    <p className="nexus-h5">BG color</p>

    <div className="nexus-row">
      <div className="nexus-col-xs-4 nexus-col-sm-2 nexus-col-md-4 nexus-col-lg-4 nexus-col-xl-3 ">
        <NexusCard data-testid="bg-color" bg-color="#BACAF7" clickable={true} height="316px">
          <NexusCardBody>
            <h2 data-testid="bg-color-overline" className="nexus-overline nexus-rhythm-1">
              Suggested Offer
            </h2>
            <h3 data-testid="bg-color-body" className="nexus-h4 nexus-rhythm-1">
              Earn 5% rewards when signing up for an online course in Udemy with your credit card
            </h3>
          </NexusCardBody>
          <NexusCardFooter>
            <Link to="#" data-testid="bg-color-btn-Enroll" className="nexus-btn nexus-btn-fluid">
              Enroll
            </Link>
          </NexusCardFooter>
        </NexusCard>
      </div>
    </div>

    <p className="nexus-h5">Full BG image</p>

    <div className="nexus-row">
      <div className="nexus-col-xs-4 nexus-col-sm-2 nexus-col-md-4 nexus-col-lg-4 nexus-col-xl-3 ">
        <NexusCard data-testid="full-bg-image" bg-image={CardBgImage} height="316px" clickable={true}>
          <Link to="#" className="nexus-visually-hidden">
            Read More
          </Link>
          <NexusCardBody>
            <h2 data-testid="full-bg-image-overline" className="nexus-overline nexus-rhythm-1">
              Next Step
            </h2>
            <h3 data-testid="full-bg-image-body" className="nexus-h6 nexus-rhythm-1">
              Explore our retirement toolkit that was designed by trusted financial advisors.
            </h3>
          </NexusCardBody>
        </NexusCard>
      </div>
    </div>
  </>
);

export default CardExampleComponent;
