$(function(){
  $(".promo-slider__rating").rateYo({
    rating: 3.6,
    starWidth: "24px",
    normalFill: "#ccccce",
    ratedFill: "#FFC700",
    readOnly: true,
    numStars: 1
  });

  $(".promo-slider").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: true,
    infinite: false,
    variableWidth: true,
    adaptiveHeight: true,
    prevArrow: '<button type="button" class="slick-prev"><svg><use xlink:href="images/sprite.svg#arrow-prev"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg><use xlink:href="images/sprite.svg#arrow-next"></use></svg></button>'
  });
});