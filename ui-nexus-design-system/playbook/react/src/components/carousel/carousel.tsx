import React from 'react';
import {Link} from 'react-router-dom';
import { NexusCard, NexusCarousel, NexusCarouselItem, NexusCardBody, NexusCardFooter } from '@nexus/react';
import CardBgImage from '@nexus/core/dist/assets/images/card-bg-image.jpg';
import CardBgImage2 from '@nexus/core/dist/assets/images/card-bg-image-2.jpg';

const CarouselComponent: React.FC = () => {
  return (
    <>
      <NexusCarousel options={[
        {
          slidesToShow: 1,
          overlapSize: 60
        },
        {
          breakpoint: 768,
          slidesToShow: 2,
          overlapSize: 60
        },
        {
          breakpoint: 1024,
          slidesToShow: 3,
          overlapSize: 60
        }
      ]}    >
        <NexusCarouselItem>
          <NexusCard data-testid="bg-color-card" bg-color="#FFA464" clickable={true} height="316px">
            <NexusCardBody>
              <h2 data-testid="bg-color-overline" className="nexus-overline nexus-rhythm-1">
                Whenever you need
              </h2>
              <h3 data-testid="bg-color-body" className="nexus-h6 nexus-rhythm-1">
                Earn 5% rewards when signing up for an online course in Udemy with your credit card
              </h3>
            </NexusCardBody>
            <NexusCardFooter>
              <Link to='#' data-testid="bg-color-btn-learnmore" className="nexus-btn nexus-btn-fluid"> Learn more
              </Link>
            </NexusCardFooter>
          </NexusCard>
        </NexusCarouselItem>
        <NexusCarouselItem>
          <NexusCard data-testid="bg-image-card" bg-image={CardBgImage} height="316px" clickable={true}>
            <Link to='#' className="nexus-visually-hidden">
              Read More
            </Link>
            <NexusCardBody>
              <h2 data-testid="bg-image-overline" className="nexus-overline nexus-rhythm-1">
                Next Step
              </h2>
              <h3 data-testid="bg-image-body" className="nexus-h6 nexus-rhythm-1">
                Explore our retirement toolkit that was designed by trusted financial advisors.
              </h3>
            </NexusCardBody>
          </NexusCard>
        </NexusCarouselItem>
        <NexusCarouselItem>
          <NexusCard data-testid="bg-color2-card" bg-color="#BACAF7" clickable={true} height="316px">
            <NexusCardBody>
              <h2 data-testid="bg-color2-overline" className="nexus-overline nexus-rhythm-1">
                Suggested Offer
              </h2>
              <h3 data-testid="bg-color2-body" className="nexus-h4 nexus-rhythm-1">
                Earn 5% rewards when signing up for an online course in Udemy with your credit card
              </h3>
            </NexusCardBody>
            <NexusCardFooter>
              <Link to='#' data-testid="bg-color2-btn-enroll" className="nexus-btn nexus-btn-fluid">
                Enroll
              </Link>
            </NexusCardFooter>
          </NexusCard>
        </NexusCarouselItem>
        <NexusCarouselItem>
          <NexusCard data-testid="bg-image2-card" bg-image={CardBgImage2} height="316px" clickable={true}>
            <Link to='#' className="nexus-visually-hidden">
              Read More
            </Link>

            <NexusCardBody className="nexus-theme-dark">
              <h2 data-testid="bg-image2-overline" className="nexus-overline nexus-rhythm-1">
                Suggested Offer
              </h2>
              <h3 data-testid="bg-image2-body" className="nexus-h6 nexus-rhythm-1">
                Earn 5% rewards when signing up for an online course in Udemy with your credit card
              </h3>
            </NexusCardBody>
          </NexusCard>
        </NexusCarouselItem>
      </NexusCarousel>
    </>);
}

export default CarouselComponent;
