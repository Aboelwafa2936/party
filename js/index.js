// open side bar
$('.fa-bars').on('click', function() {
    $('.menu').animate({
        left: '0'
    }, 1000)
    $('.burger-icon').animate({
        margin: '0 0.5rem 0 10rem'
    }, 1000)
})

// close side bar
$('.fa-xmark').on('click', function() {
    $('.menu').animate({
        left: '-10rem'
    }, 1000)
    $('.burger-icon').animate({
        margin: '0'
    }, 1000)
})

// singer section
let parent = $('.singer').first().nextAll();
$(parent).children("p").slideUp();
$(".singer-title").on('click', (e)=>{
    $(e.target).next().slideToggle();
})


    // counter
    function countDownToTime(countTo) {
        const targetDate = new Date(countTo).getTime();

        setInterval(function() {
            const now = new Date().getTime();
            const timeDifference = targetDate - now;

            const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

            $("#days").html(`${days} D`);
            $("#hours").html(`${hours} h`);
            $("#minutes").html(`${minutes} m`);
            $('#seconds').html(`${seconds} s`);
        }, 1000);
    }


    countDownToTime("1 mars 2026 011:00:00")





    // teaxtarea count
    const maxLength = 100;
    const counterEl = $('#counter')

    $("textarea").keyup(function () {
    const length = $(this).val().length;
    console.log(length);

    const charactersLeft = maxLength - length;
    console.log(charactersLeft);
    console.log(counterEl.textContent);

    if (charactersLeft <= 0) {
        console.log("No characters left");
        counterEl.text("Your available characters finished");
    } else {
        console.log("Characters remaining");
        counterEl.text(`${charactersLeft}`)
    }
    });
    // sidebar navigation
    $('.menu li a').on('click', function(e){
        console.log(this.text);
        const sectionName = this.text;
        const section = $(`[data-${sectionName}]`).offset().top
        let sectionHeight = $(`[data-${sectionName}]`);
        window.scrollTo(0, section);
    })