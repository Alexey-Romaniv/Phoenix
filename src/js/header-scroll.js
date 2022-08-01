window.onscroll = () => changeHeaderBackground();

function changeHeaderBackground() {
  const header = document.getElementById("header");
  const headerOffsetTrigger = header.offsetTop;
  const pageOffset = window.pageYOffset;

  if (pageOffset > headerOffsetTrigger) {
    header.classList.add("header--no-transparency");
  } else {
    header.classList.remove("header--no-transparency");
  }
}

$(document).ready(function(){ 
  $(".nav-scroll").on("click","a", function (event) { 
      event.preventDefault(); 
      var id  = $(this).attr('href'), 
          top = $(id).offset().top; 
    $('body,html').animate({ scrollTop: top }, 1500);
    if (document.documentElement.clientWidth >= 1366) return;
    
  }); 
}); 