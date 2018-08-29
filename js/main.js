        // loader 
      $(window).load(function() { // makes sure the whole site is loaded
      $('#status').fadeOut(); // will first fade out the loading animation
      $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
      $('body').delay(350).css({'overflow':'visible'});

      })

        // Sticky Header
        $(window).scroll(function() {

            if ($(window).scrollTop() >=  50) {
                $('.main_header').addClass('sticky');
            } else {
                $('.main_header').removeClass('sticky');
            }
        });

        // Mobile Navigation
        $('.mobile-toggle').click(function() {
            if ($('.main_header').hasClass('open-nav')) {
                $('.main_header').removeClass('open-nav');
            } else {
                $('.main_header').addClass('open-nav');
            }
        });

        $('.main_header li a').click(function() {
            if ($('.main_header').hasClass('open-nav')) {
                $('.navigation').removeClass('open-nav');
                $('.main_header').removeClass('open-nav');
            }
        });

        // navigation scroll lijepo radi materem
        $('nav a').click(function(event) {
            var id = $(this).attr("href");
            var offset = 50;
            var target = $(id).offset().top - offset;
            $('html, body').animate({
                scrollTop: target
            },0);
            event.preventDefault();
        });




        // wow js
    
    new WOW().init();

        // nice scroll

      $(document).ready(

        function() { 

          $("html").niceScroll({cursorwidth:"8",cursorborderradius:"none",cursorborder:"none",cursorcolor:"#3498db",mousescrollstep:"60"});

        }

      ); 

      // portfolio filter

      $(function () {
        
        var filterList = {
        
          init: function () {
          
            // MixItUp plugin
            // http://mixitup.io
            $('#portfoliolist').mixitup({
              targetSelector: '.portfolio',
              filterSelector: '.filter',
              effects: ['fade'],
              easing: 'snap'  ,
              // call the hover effect
              onMixEnd: filterList.hoverEffect()
            });       
          
          },
          
          hoverEffect: function () {
          
            // Simple parallax effect
            $('#portfoliolist .portfolio').hover(
              function () {
                $(this).find('.label').stop().animate({bottom: 0}, 200, 'easeOutQuad');
                $(this).find('img').stop().animate({top: -30}, 500, 'easeOutQuad');       
              },
              function () {
                $(this).find('.label').stop().animate({bottom: -40}, 200, 'easeInQuad');
                $(this).find('img').stop().animate({top: 0}, 300, 'easeOutQuad');               
              }   
            );        
          
          }

        };
        
        // Run the show!
        filterList.init();
        
        
      }); 


      // Skillset js 

      var object = [

        {

          'headline':'HTML & CSS',
          'value':8,
          'length':9,
          'description':'Significant experience and knowlage of HTML(5) and CSS functionality and use.'

        },
        {

          'headline':'JavaScript & jQuery',
          'value':4,
          'length':6,
          'description':'Experience with object-oriented JavaScript. </br> Extended knowlage of DOM manipulation in aiding and extending the UI.'

        },
        {

          'headline':'UX/UI',
          'value':3,
          'length':5,
          'description':'Experience with object-oriented JavaScript. </br> Extended knowlage of DOM manipulation in aiding and extending the UI.'

        }

      ];

      $(document).ready(function(){

        $("#skillset").skillset({

          object:object,
          duration:40

        });

      });


        // Owl carousel

      $(document).ready(function() {
               
      $("#testimonial_carosule").owlCarousel({
               
                    slideSpeed : 300,
                    paginationSpeed : 400,
                    singleItem:true,
                    autoPlay : true,
                    transitionStyle : "backSlide",
                    // "singleItem:true" is a shortcut for:
                     //items : 1, 
                    // itemsDesktop : false,
                    // itemsDesktopSmall : false,
                    // itemsTablet: false,
                    // itemsMobile : false
               
                });
               
      });

      // Up to top js

      $(document).ready(function() {
        
        $().UItoTop({ easingType: 'easeOutQuart' });
        
      });



/* ==========================================================================
   CONTACT FORM JS
   ========================================================================== */

  $(document).ready(function() {
      $("#submit_btn").click(function() { 
          //get input field values
          var user_name       = $('input[name=name]').val(); 
          var user_email      = $('input[name=email]').val();
          var user_phone      = $('input[name=phone]').val();
          var user_message    = $('textarea[name=message]').val();
          
          //simple validation at client's end
          //we simply change border color to red if empty field using .css()
          var proceed = true;
          if(user_name==""){ 
              $('input[name=name]').css('border-color','red'); 
              proceed = false;
          }
          if(user_email==""){ 
              $('input[name=email]').css('border-color','red'); 
              proceed = false;
          }
          if(user_phone=="") {    
              $('input[name=phone]').css('border-color','red'); 
              proceed = false;
          }
          if(user_message=="") {  
              $('textarea[name=message]').css('border-color','red'); 
              proceed = false;
          }

          //everything looks good! proceed...
          if(proceed) 
          {
              //data to be sent to server
              post_data = {'userName':user_name, 'userEmail':user_email, 'userPhone':user_phone, 'userMessage':user_message};
              
              //Ajax post data to server
              $.post('contact_me.php', post_data, function(response){  
                  
                  //load json data from server and output message     
                  if(response.type == 'error')
                  {
                      output = '<div class="error">'+response.text+'</div>';
                  }else{
                  
                      output = '<div class="success">'+response.text+'</div>';
                      
                      //reset values in all input fields
                      $('#contact_form input').val(''); 
                      $('#contact_form textarea').val(''); 
                  }
                  
                  $("#result").hide().html(output).slideDown();
              }, 'json');
              
          }
      });
      
      //reset previously set border colors and hide all message on .keyup()
      $("#contact_form input, #contact_form textarea").keyup(function() { 
          $("#contact_form input, #contact_form textarea").css('border-color',''); 
          $("#result").slideUp();
      });
      
  });






  

/*------------------------------ SmoothScroll (for Mouse Wheel) v1.2.1 ----------------------*/
(function ($) {
  var defaultOptions = {
    frameRate: 150,
    animationTime: 1200,
    stepSize: 120,
    pulseAlgorithm: !0,
    pulseScale: 8,
    pulseNormalize: 1,
    accelerationDelta: 20,
    accelerationMax: 1
  }, options = defaultOptions,
  direction = {
    x: 0,
    y: 0
  }, root = 0 <= document.compatMode.indexOf("CSS") || !document.body ? document.documentElement : document.body,
  que = [],
  pending = !1,
  lastScroll = +new Date;

  function scrollArray(a, b, c, d) {
    d || (d = 1E3);
    directionCheck(b, c);
    if (1 != options.accelerationMax) {
      var e = +new Date - lastScroll;
      e < options.accelerationDelta && (e = (1 + 30 / e) / 2, 1 < e && (e = Math.min(e, options.accelerationMax), b *= e, c *= e));
      lastScroll = +new Date
    }
    que.push({
      x: b,
      y: c,
      lastX: 0 > b ? 0.99 : -0.99,
      lastY: 0 > c ? 0.99 : -0.99,
      start: +new Date
    });
    if (!pending) {
      var q = a === document.body,
      p = function (e) {
        e = +new Date;
        for (var h = 0, k = 0, l = 0; l < que.length; l++) {
          var f = que[l],
          m = e - f.start,
          n = m >= options.animationTime,
          g = n ? 1 : m / options.animationTime;
          options.pulseAlgorithm && (g = pulse(g));
          m = f.x * g - f.lastX >> 0;
          g = f.y * g - f.lastY >> 0;
          h += m;
          k += g;
          f.lastX += m;
          f.lastY += g;
          n && (que.splice(l, 1), l--)
        }
        q ? window.scrollBy(h, k) : (h && (a.scrollLeft += h), k && (a.scrollTop += k));
        b || c || (que = []);
        que.length ? requestFrame(p, a, d / options.frameRate + 1) : pending = !1
      };
      requestFrame(p, a, 0);
      pending = !0
    }
  }

  function wheel(a) {
    var b = overflowingAncestor(a.target);
    if (!b || a.defaultPrevented) return !0;
    var c = a.wheelDeltaX || 0,
    d = a.wheelDeltaY || 0;
    c || d || (d = a.wheelDelta || 0);
    1.2 < Math.abs(c) && (c *= options.stepSize / 120);
    1.2 < Math.abs(d) && (d *= options.stepSize / 120);
    scrollArray(b, -c, -d);
    a.preventDefault()
  }
  var cache = {};
  setInterval(function () {
    cache = {}
  }, 1E4);
  var uniqueID = function () {
    var a = 0;
    return function (b) {
      return b.uniqueID || (b.uniqueID = a++)
    }
  }();

  function setCache(a, b) {
    for (var c = a.length; c--;) cache[uniqueID(a[c])] = b;
      return b
  }

  function overflowingAncestor(a) {
    var b = [],
    c = root.scrollHeight;
    do {
      var d = cache[uniqueID(a)];
      if (d) return setCache(b, d);
      b.push(a);
      if (c === a.scrollHeight) {
        if (root.clientHeight + 10 < c) return setCache(b, document.body)
      } else if (a.clientHeight + 10 < a.scrollHeight && (overflow = getComputedStyle(a, "").getPropertyValue("overflow-y"), "scroll" === overflow || "auto" === overflow)) return setCache(b, a)
  } while (a = a.parentNode)
}

function directionCheck(a, b) {
  a = 0 < a ? 1 : -1;
  b = 0 < b ? 1 : -1;
  if (direction.x !== a || direction.y !== b) direction.x = a, direction.y = b, que = [], lastScroll = 0
}
var requestFrame = function () {
  return window.requestAnimationFrame || window.webkitRequestAnimationFrame || function (a, b, c) {
    window.setTimeout(a, c || 1E3 / 60)
  }
}();

function pulse_(a) {
  var b;
  a *= options.pulseScale;
  1 > a ? b = a - (1 - Math.exp(-a)) : (b = Math.exp(-1), a = 1 - Math.exp(-(a - 1)), b += a * (1 - b));
  return b * options.pulseNormalize
}

function pulse(a) {
  if (1 <= a) return 1;
  if (0 >= a) return 0;
  1 == options.pulseNormalize && (options.pulseNormalize /= pulse_(1));
  return pulse_(a)
}
window.addEventListener("mousewheel", wheel, !1);
})(jQuery);


