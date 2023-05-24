const carousel = document.getElementById('stdCarousel');

carousel.options = [
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
