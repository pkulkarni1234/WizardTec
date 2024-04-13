(function ($) {
    "use strict";
    
    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('#nav').addClass('nav-sticky');
        } else {
            $('#nav').removeClass('nav-sticky');
        }
    });
    
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 768) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Skills section
    $('.skills').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, {offset: '80%'});
    

    // jQuery counterUp
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 1000
    });
    

    // Clients carousel
    $(".clients-carousel").owlCarousel({
        autoplay: true,
        dots: true,
        loop: true,
        responsive: { 0: {items: 2}, 768: {items: 4}, 900: {items: 6} }
    });
    

    // Testimonials carousel
    $(".testimonials-carousel").owlCarousel({
        autoplay: true,
        dots: true,
        loop: true,
        responsive: { 0: {items: 1}, 576: {items: 2}, 768: {items: 3}, 992: {items: 4} }
    });
  
})(jQuery);

document.addEventListener("DOMContentLoaded", function() {
    var button = document.getElementById("read-more-btn");
    var extraContent = document.querySelector(".extra-content");
  
    button.addEventListener("click", function() {
      if (extraContent.style.display === "none") {
        extraContent.style.display = "block";
        button.textContent = "Read Less";
      } else {
        extraContent.style.display = "none";
        button.textContent = "Read More";
      }
    });
  });
  
window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // Activate SimpleLightbox plugin for portfolio items
    new SimpleLightbox({
        elements: '#portfolio a.portfolio-box'
    });

});

function validateForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var message = document.getElementById('message').value;

    // Simple validation
    if (name == "") {
        document.getElementById('name1').innerHTML="**plese enter user name**";
        return false;
    }
    if(name.length<2)
            {
              document.getElementById('name1').innerHTML="**plese enter atlist two character**";
            return false;
            }
            if(!isNaN(name))
            {
              document.getElementById('name1').innerHTML="**numbers are not allowed**";
            return false;
            }
           else
           {
            document.getElementById('name1').innerHTML="";
           } 
    

    if(email == "")
          {
            document.getElementById('email1').innerHTML="**plese enter email**";
           return false;
          }
          if(email.indexOf('@')<=0)
          {
            document.getElementById('email1').innerHTML="**invalid position of @**";
           
            return false;
          }
          if(email.charAt(email.length-4)!='.')
          {
            document.getElementById('email1').innerHTML="**invalid position of . **";
           
            return false;
          }
          else
           {
            document.getElementById('email1').innerHTML="";
           }

           if(phone=="")
           {
             document.getElementById('phone1').innerHTML="**plese enter phone number**";
            return false;
           }
           if(isNaN(phone))
           {
             document.getElementById('phone1').innerHTML="**plese enter numbers only**";
             return false;
           }
           if(phone.length<10) 
             {
               document.getElementById('phone1').innerHTML="**plese enter atlist 10 numbers**";
             return false;
             }
            if (phone.length>10)
            {
               document.getElementById('phone1').innerHTML="**plese enter only 10 digit numbers**";
             return false;
             }
 
           else
            {
             document.getElementById('phone1').innerHTML="";
            }

            if(message=="")
            {
              document.getElementById('message1').innerHTML="**plese enter message**";
              return false;
             
            }
        
        } 
        function emailSend()
        {
            Email.send({
                Host : "smtp.elasticemail.com",
                Username : "bmitshearise@gmail.com",
                Password : "jmjwbalyqodpiqir",
                To : "pratikshakulkarni600@gmail.com",
                From : "you@isp.com",
                Subject : "This is the subject",
                Body : "And this is the body"
            }).then(
              message => alert(message)
            );
        }       

