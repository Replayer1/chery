let burger = true;

$('.slider').slick({
  infinite: true,
  autoplay: true,
  interval: 1,
  slidesToShow: 3,
  slidesToScroll: 3
});

function burgerTogle() {
  if (burger){
    burger = false
    $('#burger-btn').attr('class', 'bi bi-x-lg')
    $('#burger').attr('class', 'burger-container active')
  } else {
    burger = true
    $('#burger-btn').attr('class', 'bi bi-list')
    $('#burger').attr('class', 'burger-container')
  }
}

function displayForm(id) {
  if (id == "hair") {
    $('#div-hair').removeAttr('style')
    $('#div-skin').attr('style', 'display: none;')
    $('#div-nails').attr('style', 'display: none;')
  } else if (id == "skin") {
    $('#div-skin').removeAttr('style')
    $('#div-hair').attr('style', 'display: none;')
    $('#div-nails').attr('style', 'display: none;')
  } else {
    $('#div-nails').removeAttr('style')
    $('#div-skin').attr('style', 'display: none;')
    $('#div-hair').attr('style', 'display: none;')
  }
}

function displayProfile(id) {
  if (id == "qwe") {
    $('#togle-class-2').attr('class', 'profile-orders services-dis');
    $('#togle-class-1').attr('class', 'profile-services');
  } else {
    $('#togle-class-2').attr('class', 'profile-orders ');
    $('#togle-class-1').attr('class', 'profile-services services-dis');
  }
}