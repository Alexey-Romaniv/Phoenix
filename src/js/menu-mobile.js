(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-mobile-menu-open]'),
    closeModalBtn: document.querySelector('[data-mobile-menu-close]'),
    modal: document.querySelector('[data-mobile-menu-modal]'),
  };
  // -----------------------------------------
  const header = document.getElementById('header');
  const body = document.getElementById('page');
  let elem = document.querySelector('#menu-mobile');
  let mobLink = document.querySelectorAll('.mobile-menu__link');
  // --------------------------------------------
  
  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    // -----------------------------------------------------------------


    if (elem.classList.contains('is-hidden') || (body.classList.contains('no-scroll') !== true )){
      header.classList.remove("header--no-transparency");
      body.classList.add("no-scroll");
    };
    if (elem.classList.contains('is-hidden')){
      body.classList.remove("no-scroll");
      header.classList.add("header--no-transparency");
    };
    // ---------------------------------------------------------------------

    
  };
  


  // -----------------------------------------------------
  [].forEach.call(mobLink,function(el){
    el.addEventListener('click', function (e) {
      header.classList.add("header--no-transparency");
      elem.classList.add('is-hidden');
      body.classList.remove("no-scroll");
    })
});
// ---------------------------------------------------------------

})();


