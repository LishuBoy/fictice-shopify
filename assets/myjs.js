

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
var swiper2 = new Swiper(".mySwiper2", {
    slidesPerView: 'auto',
    spaceBetween: 20,
    loop: false, // Ativa o loop para rotação contínua
    centeredSlides: false, // Desativa a centralização automática
    pagination: {
      el: ".swiper-pagination2",
      clickable: true,
    },
    navigation: {
        nextEl: ".proximo", 
        prevEl: ".anterior",
      },
    slideToClickedSlide: true, // Permite clicar no slide e passar diretamente para el
  });