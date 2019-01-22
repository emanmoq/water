$(document).ready(function () {
    

    $(".moreAbout").click(function() {
        $(".aboutdesc p").css("margin-bottom","10px")
        $(".moreDesc").slideToggle(400);
    });
    $(".moreserviceDetails").click(function() {
        $(".hiddenul").slideToggle(400);
    });


    $('.expertOwl').owlCarousel({
        autoplay: true,
        rtl:true,
        loop: true,
        dots:true,
        responsiveClass: true,
        responsive: {
            0: {
                items:1,
            },
            500:{
                items:2
            },
            1190:{
                items:3,
                margin:30,
            }
          
        }
        
});
$('.clients').owlCarousel({
    autoplay: true,
    nav:true,
    dots:true,
    rtl:true,
    loop: true,
    responsiveClass: true,
    responsive: {
        0: {
            items:1,
        },
     
      
    }
    
});
$(".aboutlink").click(function() {   
    $('html, body').animate({
        scrollTop: $("#aboutus").offset().top
    }, 2000);
});
$(".aboutlink").on('touchmove', function(ev) {
$('body').animate({
    scrollTop: $("#aboutus").offset().top
}, 2000);
});
$(".serviceslink").click(function() {   
    $('html, body').animate({
        scrollTop: $(".OurServices").offset().top
    }, 2000);
});
$(".serviceslink").on('touchmove', function(ev) {
$('body').animate({
    scrollTop: $(".OurServices").offset().top
}, 2000);
});
$(".clientslink").click(function() {   
    $('html, body').animate({
        scrollTop: $(".OurCliens").offset().top
    }, 2000);
});
$(".clientslink").on('touchmove', function(ev) {
$('body').animate({
    scrollTop: $(".OurCliens").offset().top
}, 2000);
});
$(".expertlink").click(function() {   
    $('html, body').animate({
        scrollTop: $(".Expert").offset().top
    }, 2000);
});
$(".expertlink").on('touchmove', function(ev) {
$('body').animate({
    scrollTop: $(".Expert").offset().top
}, 2000);
});
$(".contactlink").click(function() {   
    $('html, body').animate({
        scrollTop: $(".contactsec").offset().top
    }, 2000);
});
$(".contactlink").on('touchmove', function(ev) {
$('body').animate({
    scrollTop: $(".contactsec").offset().top
}, 2000);
});
$(".mainlink").click(function() {   
    $('html, body').animate({
        scrollTop: $(".herosec").offset().top
    }, 2000);
});
$(".mainlink").on('touchmove', function(ev) {
$('body').animate({
    scrollTop: $(".herosec").offset().top
}, 2000);
});
mainlink

});

