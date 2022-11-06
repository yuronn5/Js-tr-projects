$(document).ready(function(){
    //open close menu
    $(".sub-menu, .second-menu-content, .third-menu-content").hover(function () {
        $(this).children("ul").toggleClass("active");
    })

    $("#burger").click(function () {
        $(".nano-content").css("display", "block");
        $("#quit").addClass( "active" );
        $(this).toggleClass("active");
        $("#leftside-navigation").toggleClass("mobile-menu-active");
        // $("body").toggleClass("mobile-menu");
        $('.sidebar').slideToggle("slow");

    })


});


