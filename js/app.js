

$(document).ready(function(){

        //HERO SLider

        $('#slider-troca').owlCarousel({

            loop: true,
            margin:0,
            nav:true,
            items:1,
            smartSpeed:1000,
           dots:false,
           // navText: ['PREV','NEXT'],
            autoplay:true,
            autoplayTimeOut:7000,
            autoplayHovePause:false,
            Responsive:{
                0:{
                    nav:false,
                },
                768:{
                    nav:false,
                }
            }
        });

        //Projecto Slider

        $('#projecto-slider').owlCarousel({

            loop:true,
            margin:0,
            nav:true,
            dots:true,
            margin: 14,
            smartSpeed:1000,
            dots:true,
            autoplay:true,
            autoplayTimeOut:7000,
            autoplayHovePause:false,
            responsive:{
                0:{
                    items:1,
                    nav:false,
                    margin:0,
                },
                768:{
                    items:2,
                    nav:true,
                    center: true,
                },
                1140:{
                    items:2,
                    center: true,
                    nav:true,
                }
            }
        })
});



$('#reviews-slider').owlCarousel({

    loop:true,
    margin:10,
    nav:false,
    dots:true,
    items:1,
    smartSpeed:800,
    
    autoplay:true,
    autoplayTimeOut:7000,
   
})
