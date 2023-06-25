$(document).ready(function(){
    $('.slider').slick({
      slidesToShow:4,
      Infinity:true,
      autoplay:true,
      autoplaySpeed:3000,
      slidesToScroll:1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            arrows:false,
          }
        },
        {
          breakpoint: 860,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          }
        },
        {
          breakpoint: 590,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }
      ]
    });
  });