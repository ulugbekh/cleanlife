let shadovModal = document.querySelector('.shadov-modal')
let modal = document.querySelector('.modal')
let headerZakaz = document.querySelector('.header-zakaz')
let form = document.querySelector('.form')
form.addEventListener('submit', function() {
  shadovModal.classList.remove('active')
  modal.classList.remove('active')
})

headerZakaz.addEventListener('click', function() {
  
  shadovModal.classList.add('active')
  modal.classList.add('active')
});

shadovModal.addEventListener('click', function() {
  this.classList.remove('active')
  modal.classList.remove('active')
})


let section2Blocks = document.querySelectorAll('.section2-blocks')
let plusText = document.querySelectorAll('.plus-text')
let linkTop = document.querySelector('.link-top')

window.addEventListener('scroll', function () {
  if (window.scrollY > 7000) {
    linkTop.classList.add('active');
  } else {
    linkTop.classList.remove('active');
  }
});

plusText.forEach(item => {
  item.addEventListener('click', function(e) {
    e.stopPropagation()
  })
})

function allclassremove(clickedElement) {
  section2Blocks.forEach(item => {
    if(item.dataset.blockInfo != clickedElement.dataset.blockInfo) {
      item.classList.remove('active');
    }
  })
}

section2Blocks.forEach((item, index) => {
  item.addEventListener('click', function (e) {
     e.preventDefault();
      allclassremove(item);
    if(index == item.dataset.blockInfo) {
      item.classList.toggle('active');
    }
  })
});		







$('.responsive').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    prevArrow: $('.arrow-link-lef'),
    nextArrow: $('.arrow-link-righ'),
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  $('.responsive1').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    prevArrow: $('.caro-btn-left'),
    nextArrow: $('.caro-btn-right'),
  });

  $('.responsive2').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    prevArrow: $('.caro-btn-left1'),
    nextArrow: $('.caro-btn-right1'),
  });

  $('.responsive4').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: $('.prev-btn-4'),
    nextArrow: $('.next-btn-4'),
  });
          
  $(function() {
    $('.progress-fill span').each(function(){
      var percent = $(this).html();
      $(this).parent().css('width', percent);
    });
});

let caroBtnLeft = document.querySelector('.caro-btn-left')
let caroBtnRight = document.querySelector('.caro-btn-right')
let caroBtnLeft1 = document.querySelector('.caro-btn-left1')
let caroBtnRight1 = document.querySelector('.caro-btn-right1')

caroBtnLeft.addEventListener('click', function() {
  caroBtnLeft.classList.add('active')
  caroBtnRight.classList.remove('active')
})

caroBtnRight.addEventListener('click', function() {
  caroBtnRight.classList.add('active')
  caroBtnLeft.classList.remove('active')
})

caroBtnLeft1.addEventListener('click', function() {
  caroBtnLeft1.classList.add('active')
  caroBtnRight1.classList.remove('active')
})

caroBtnRight1.addEventListener('click', function() {
  caroBtnRight1.classList.add('active')
  caroBtnLeft1.classList.remove('active')
})

let prevBtn4 = document.querySelector('.prev-btn-4')
let nextBtn4 = document.querySelector('.next-btn-4')

prevBtn4.addEventListener('click', function() {
  prevBtn4.classList.add('active')
  nextBtn4.classList.remove('active')
})

nextBtn4.addEventListener('click', function() {
  prevBtn4.classList.remove('active')
  nextBtn4.classList.add('active')
})


