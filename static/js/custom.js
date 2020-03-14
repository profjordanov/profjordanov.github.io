(function($){
    "use strict"
    var ALX = {};

    /*--------------------
      * Pre Load
    ----------------------*/
    ALX.WebLoad = function(){
      document.getElementById("loading").style.display = "none"; 
    }


    /*--------------------
    * owl Slider
    ----------------------*/

    ALX.ClientSlider = function(){
      var testimonials_slider = $('#client-slider-single');
        testimonials_slider.owlCarousel({
            loop: true,
            margin: 30,
            nav:false,
            responsive: {
              0: {
                items: 1
              },
              600: {
                items: 1
              },
              768: {
                items: 1
              },
              991: {
                items: 1
              },
              1140: {
                items: 2
              }
            }
        });
    }
    /*--------------------
    * owl Slider
    ----------------------*/
    ALX.BlogSlider = function(){
      var testimonials_slider = $('#portfolio-slider-single');
        testimonials_slider.owlCarousel({
            loop: true,
            margin: 30,
            nav:false,
            responsive: {
              0: {
                items: 1
              },
              768: {
                items: 1
              },
              991: {
                items: 2
              },
              1140: {
                items: 3
              }
            }
        });
    }


    /*--------------------
    * Isotope
    ----------------------*/
    ALX.MasoNry = function () {
      var portfolioWork = $('.portfolio-content');
        $(portfolioWork).isotope({
            resizable: false,
            itemSelector: '.portfolio-item',
            layoutMode: 'masonry',
            filter: '*'
          });
          //Filtering items on portfolio.html
          var portfolioFilter = $('.filter li');
          // filter items on button click
          $(portfolioFilter).on( 'click', function() {
            var filterValue = $(this).attr('data-filter');
            portfolioWork.isotope({ filter: filterValue });
          });
          //Add/remove class on filter list
          $(portfolioFilter).on( 'click', function() {
            $(this).addClass('active').siblings().removeClass('active');
          });
    }


    ALX.PopupVideo = function(){
      $('.popup-video').magnificPopup({
              disableOn: 700,
              type: 'iframe',
              mainClass: 'mfp-fade',
              removalDelay: 160,
              preloader: false,
              fixedContentPos: false
        });
    }

    ALX.LightboxGallery = function(){
      $('.portfolio-col').magnificPopup({
          delegate: '.lightbox-gallery',
          type: 'image',
          tLoading: '#%curr%',
          mainClass: 'mfp-fade',
          fixedContentPos: true,
          closeBtnInside: true,
          gallery: {
              enabled: true,
              navigateByImgClick: true,
              preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
          }
      });
    }

     ALX.mTypeIt = function() {
        new TypeIt('#type-it', {
            speed: 200,
            loop:true,
            strings: [
              'Web Developer',
              'Solution Architect'
            ],
            breakLines: false
        }); 
    }

    
    // Window on Load
    $(window).on("load", function(){
      ALX.MasoNry(),
      ALX.WebLoad();
    });

    $( document ).ready(function() {
        ALX.ClientSlider(),
        ALX.BlogSlider(),
        ALX.MasoNry(),
        ALX.PopupVideo(),
        ALX.LightboxGallery(),
        ALX.mTypeIt();
    });

})(jQuery);


