(()=>{const e={openModalBtn:document.querySelector("[data-mobile-menu-open]"),closeModalBtn:document.querySelector("[data-mobile-menu-close]"),modal:document.querySelector("[data-mobile-menu-modal]")},n=document.getElementById("header"),o=document.getElementById("page");let t=document.querySelector("#menu-mobile");function s(){e.modal.classList.toggle("is-hidden"),(t.classList.contains("is-hidden")||!0!==o.classList.contains("no-scroll"))&&(n.classList.remove("header--no-transparency"),o.classList.add("no-scroll")),t.classList.contains("is-hidden")&&(o.classList.remove("no-scroll"),n.classList.add("header--no-transparency"))}e.openModalBtn.addEventListener("click",s),e.closeModalBtn.addEventListener("click",s)})(),$("document").ready((function(){$("#button").on("click",(function(){$("input[required]").addClass("req")}))}));
//# sourceMappingURL=index.59abd108.js.map
