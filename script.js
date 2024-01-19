$(document).ready(function () {

    //, Animazioni dei contenuti
    $('#hide-btn').click(function () {
        $('#text').hide('fast');
    })

    $('#show-btn').click(function () {
        $('#text').show('slow', 'linear');
    })

    $('#toggle-btn').click(function () {
        $('#text').toggle(4000, () => {
            alert('Toggle avviato dopo 4s');
        });
    })


    //, Fading

    $('#fade-in').click(function () {
        $('#fading-text').fadeIn(1000);
    })

    $('#fade-out').click(function () {
        $('#fading-text').fadeOut("fast");
    })

    $('#fade-toggle').click(function () {
        $('#fading-text').fadeToggle("slow");
    })

    $('#fade-to').click(function () {
        $('#fading-text').fadeTo(1000, .5);
    })


    //, Sliding

    $("#slide-up").click(function () {
        $("#sliding-text").slideUp();
    });

    $("#slide-down").click(function () {
        $("#sliding-text").slideDown(3000);
    });

    $("#slide-toggle").click(function () {
        $("#sliding-text").slideToggle("fast");
    });


    //, Delay
    $("#delay-btn").click(function () {
        $("#delayed-text").slideToggle(2000).delay(1000).fadeToggle(400);
    });


    //, Animazioni personalizzate
    /* $("#start-btn").click(function () {
        $("#square").animate({
            width: '500px',
            height: '100px',
            opacity: 0.8,
        }, 2000, () => {
            console.log('Animazione completata');
        });
    }); */


    //# Valori relativi
    /* $("#start-btn").click(function () {
        $("#square").animate({
            width: '+=50px',
            height: '-=100px',
            opacity: '-=0.5',
            marginLeft: '2em'
        }, 2000);
    }); */


    //# Concatenare animazioni
    /* $("#start-btn").click(function () {
        $("#square")
        .animate({
            width: '+=50px',
            height: '-=100px',
            opacity: '-=0.5',
            marginLeft: '2em'
        }, 2000, ()=> console.log('Prima animazione completata'))
        .slideUp(2000, ()=> console.log('slideUp completato'))
        .slideDown(2000, ()=> console.log('slideDown completato'))
        .animate({
            width: '-=20px',
            height: '+=30px',
            opacity: '+=0.3',
            marginBottom: '2em'
        }, 2000, ()=> console.log('Seconda animazione completata'))
        .fadeTo(0.6, 'slow', ()=> console.log('Fading completato'))
        .animate({
            width: '+=50px',
            height: '-=20px',
            opacity: '+=.2',
            marginLeft: '0',
            marginBottom: '0em'
        }, 2000, ()=> console.log('Terza animazione completata'))
        .hide(3000, ()=> console.log('Elemento nascosto'))
    }); */


    //# stop()
    $("#stop-btn").click(function () {
        $("#square").stop();
    });

    /* $("#stop-btn").click(function () {
        $("#square").stop(false, true);
    }); */


});
