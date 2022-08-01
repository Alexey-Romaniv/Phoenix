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

// $(document).ready(function(){ 
//   $(".nav-scroll").on("click","a", function (event) { 
//       event.preventDefault(); 
//       var id  = $(this).attr('href'), 
//           top = $(id).offset().top; 
//     $('body,html').animate({ scrollTop: top }, 1500);
//     if (document.documentElement.clientWidth >= 1366) return;
//     const menuBtnRef = document.querySelector("[data-menu-button]");
//     const mobileMenuRef = document.querySelector("[data-menu]");
//     const body = document.querySelector("#page");
//     const expanded =
//     menuBtnRef.getAttribute("aria-expanded") === "true" || false;

//   menuBtnRef.classList.toggle("is-open");
//   menuBtnRef.setAttribute("aria-expanded", !expanded);

//   mobileMenuRef.classList.toggle("is-open");
//   body.classList.remove("no-scroll");
//   }); 
// }); 