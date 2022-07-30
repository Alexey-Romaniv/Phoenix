(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-mobile-menu-open]'),
    closeModalBtn: document.querySelector('[data-mobile-menu-close]'),
    modal: document.querySelector('[data-mobile-menu-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
