// function showNav(){
//     console.log("this is working");
//     var x = document.getElementById("responsive-nav");
//     if (x.className === "responsive-nav"){
//         x.className += " showNav";
//     } else {
//         x.className = "responsive-nav";
//     }
// }


// var navButton = document.getElementById("nav-toggle-button");

// function toggleNavDisplay(event) {
//     // prevent hyperlink from running
//     event.preventDefault();

//     // get the resonsive-nav container
//     var responsiveNav = document.getElementById("responsive-nav");

//     // toggle the showNav CSS on the responsive nav container
//     // if the showNav class is there, it is removed; else it is added
//     // with a single property: toggle
//     responsiveNav.classList.toggle("showNav");
// }

// navButton.addEventListener("click", toggleNavDisplay);


$(document).ready(function() {
    $(".menu-icon").on("click", function() {
          $("nav ul").toggleClass("showing");
    });
});

// Scrolling Effect

$(window).on("scroll", function() {
    if($(window).scrollTop()) {
          $('nav').addClass('black');
    }

    else {
          $('nav').removeClass('black');
    }
})