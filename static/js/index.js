window.HELP_IMPROVE_VIDEOJS = false;

var INTERP_BASE = "./static/interpolation/stacked";
var NUM_INTERP_FRAMES = 240;

var interp_images = [];
function preloadInterpolationImages() {
  for (var i = 0; i < NUM_INTERP_FRAMES; i++) {
    var path = INTERP_BASE + '/' + String(i).padStart(6, '0') + '.jpg';
    interp_images[i] = new Image();
    interp_images[i].src = path;
  }
}

function setInterpolationImage(i) {
  var image = interp_images[i];
  image.ondragstart = function() { return false; };
  image.oncontextmenu = function() { return false; };
  $('#interpolation-image-wrapper').empty().append(image);
}


$(document).ready(function() {
    // Check for click events on the navbar burger icon
    $(".navbar-burger").click(function() {
      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      $(".navbar-burger").toggleClass("is-active");
      $(".navbar-menu").toggleClass("is-active");

    });

    /* 
    var options = {
			slidesToScroll: 1,
			slidesToShow: 1,
			loop: true,
			infinite: true,
			autoplay: false,
			autoplaySpeed: 3000,
    }

		// Initialize all div with carousel class
    var carousels = bulmaCarousel.attach('.carousel', options);

    // Loop on each carousel initialized
    for(var i = 0; i < carousels.length; i++) {
    	// Add listener to  event
    	carousels[i].on('before:show', state => {
    		console.log(state);
    	});
      
      carousels[i].on('after:show', state => {
        console.log("after:show", state);
        // Pause all videos
        $('.carousel video').each(function() {
          this.pause();
        });
        
        // Play the video in the active item
        // Use a small timeout to ensure the 'is-active' class is applied
        setTimeout(() => {
           $('.carousel .item.is-active video').each(function() {
             var video = this;
             // Reset time if needed, or just play
             // video.currentTime = 0; 
             var playPromise = video.play();
             if (playPromise !== undefined) {
               playPromise.catch(error => {
                 console.log("Auto-play prevented:", error);
               });
             }
           });
        }, 100);
      });
    }

    // Initial play for the first active video
    setTimeout(() => {
      $('.carousel .item.is-active video').each(function() {
        this.play();
      });
    }, 500);

    // Initial play for the first active video
    setTimeout(() => {
      $('.carousel .item.is-active video').each(function() {
        this.play();
      });
    }, 500);
    */

    // Delay preloading to prioritize video loading
    setTimeout(preloadInterpolationImages, 2000);

    $('#interpolation-slider').on('input', function(event) {
      setInterpolationImage(this.value);
    });
    setInterpolationImage(0);
    $('#interpolation-slider').prop('max', NUM_INTERP_FRAMES - 1);

    bulmaSlider.attach();

})
