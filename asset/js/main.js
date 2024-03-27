$(document).ready(function () {

  // header

  $(window).scroll(function () {
    if ($(window).scrollTop() >= 150) {
      $("header").addClass("header-sm");
    } else {
      $("header").removeClass("header-sm");
    }
    didScroll = true;
  });

  var didScroll;
  var lastScrollTop = 0;
  var delta = 5;
  var navbarHeight = $("header").outerHeight();

  setInterval(function () {
    if (didScroll) {
      hasScrolled();
      didScroll = false;
    }
  }, 250);

  function hasScrolled() {
    var st = $(this).scrollTop();

    if (Math.abs(lastScrollTop - st) <= delta) return;

    if (st > lastScrollTop && st > navbarHeight) {
      $("header").removeClass("nav-down").addClass("nav-up");
    } else {
      if (st + $(window).height() < $(document).height()) {
        $("header").removeClass("nav-up").addClass("nav-down");
      }
    }
    lastScrollTop = st;
  }

  // header end

  // banner-owl-carousel start
  function initialBannerImageWidth() {
    let valWid = $(".banner-carousel-wrapper").width();
    let firstImgWidth = Math.floor((valWid * 57) / 100);
    let secondImgWidth = Math.floor((valWid * 43) / 100 - 25);
    $(".first-img").width(firstImgWidth);
    $(".second-img").width(secondImgWidth);
  }

  if ($(window).width() >= 767) {
    initialBannerImageWidth();
  }
  $(window).resize(function () {
    initialBannerImageWidth();
  });
  $(".banner-carousel.owl-carousel").owlCarousel({
    margin: 24,
    loop: true,
    autoWidth: true,
    center: false,
    slideBy: 2,
    dots: false,
    nav: true,
    navText: [
      "<img src='images/prev-img.png'>",
      "<img src='asset/images/next-img.png'>",
    ],
    responsive: {
      0: {
        margin: 25,
        autoWidth: true,
        items: 1,
        nav: false,
      },
      576: {
        items: 2,
      },
      768: {
        margin: 26,
        nav: true,
      },
    },
  });
  // banner-owl-carousel end

  // investor-partner start
  $('.investors-partner .owl-carousel').owlCarousel({
    loop: true,
    margin: 8,
    responsiveClass: true,
    dots: false,
    navText: [
      "<img src='asset/images/prev-img.png'>",
      "<img src='asset/images/next-img.png'>",
    ],
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      480: {
        items: 2,
        nav: false,
      },
      600: {
        items: 2,
        nav: false
      },
      1000: {
        items: 3,
        nav: true,
        loop: false,
      },
      1400: {
        items: 4,
        nav: true,
        loop: false,
      },
    }
  })
  // investor-partner end
  // Auction Carousel :: Starts
  $(".auction-carousel.owl-carousel").owlCarousel({
    margin: 30,
    loop: false,
    autoWidth: true,
    navText: [
      "<img src='asset/images/prev-img.png'>",
      "<img src='asset/images/next-img.png'>",
    ],
    dots: false,
    nav: true,
    responsive: {
      0: {
        items: 1.5,
        margin: 14,
      },
      576: {
        items: 3,
      },
      768: {
        nav: false,
        items: 2.5,
      },
      991: {
        items: 2,
        nav: true,
      },
    },
  });
  // Auction Carousel :: Ends
  //creators section:starts//
  $(".creators-grid").owlCarousel({
    loop: false,
    autoWidth: true,
    dots: false,
    // responsiveClass: true,
    margin: 30,
    nav: true,
    navText: [
      "<img src='asset/images/prev-img.png'>",
      "<img src='asset/images/next-img.png'>",
    ],
    responsive: {
      0: {
        margin: 14,
        loop: true,
        autoWidth: false,
        items: 1.5,
        nav: false,
      },
      768: {
        nav: true,
        margin: 14,
      },
    },
  });

  //creators section:ends//

  // modal start
  const myModal = document.getElementById('myModal')
  const myInput = document.getElementById('myInput')

  myModal.addEventListener('shown.bs.modal', () => {
    myInput.focus()
  });
  // modal end

});

