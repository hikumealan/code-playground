
import html from '!!raw-loader!../../examples/carousel/01_carousel.html';

const Carousel = () => {
  const carousel = document.createElement('div') as HTMLElement;
  carousel.setAttribute('id', 'stdCarousel');
  const options = [
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
  ];

  carousel.innerHTML = html.replace('options=[]', `options=${options}`);

  return carousel;
};

export default Carousel;
