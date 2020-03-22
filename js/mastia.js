//JS

//Lazy-Load
var lazyLoadInstance = new LazyLoad({
    elements_selector: ".lazyload"
});

//Menu
$(function(){
    $('.menu').slicknav();
});

//Menu-Scroll
$(window).scroll(function() {
    if($(document).scrollTop() > 50) {
        $('#header').addClass('fixed');
    } else {
        $('#header').removeClass('fixed')
    }
});

//Home-Owl-Slider
$('.home-owl-slider').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});

//Home-Owl-Projects
$('.home-owl-projects').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
});

//Home-Counter
$('.count').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 4000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});

//Home-Owl-Blog
$('.home-owl-blog').owlCarousel({
    loop:true,
    margin:30,
    nav:true,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:2
        }
    }
});

//Why-Accordion
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
};

//About-Owl-Clients
$('.about-owl-clients').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:2
        }
    }
});

//Project-Tab
$(".project-tab").pTab({
    pTab: '.tab-list',
    pTabElem: 'li',
    pContent: '.tab-content'
});