//  -------Initialize Swiper---------
var swiper = new Swiper(".my_swiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
  breakpoints: {
        300: {
          slidesPerView: 1,
          spaceBetween: 20,
          },
        600: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1000: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        1200: {
        slidesPerView: 3,
        spaceBetween: 30,
        },
        1320: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
      },
});
  // ----------Mobile nav button function---------------
const mobile_nav_button = document.querySelector('.mobile_nav_button')
const mobile_nav_container = document.querySelector('.mobile_nav_container')
const mobile_nav_overlay = document.querySelector('.mobile_nav_overlay')

mobile_nav_button.addEventListener('click', () => {
  mobile_nav_container.classList.toggle('mobile_nav_active');
  mobile_nav_overlay.classList.toggle('mobile_overlay_active')
  mobile_nav_button.classList.toggle('mobile_nav_button_active')
})

const mobile_nav_items = document.querySelectorAll('.mobile_nav_container .nav_menu .nav_item a')

mobile_nav_items.forEach(element => {
  element.addEventListener('click', () => {
    mobile_nav_container.classList.toggle('mobile_nav_active');
    mobile_nav_overlay.classList.toggle('mobile_overlay_active')
    mobile_nav_button.classList.toggle('mobile_nav_button_active')
  })
});

//---------------- SCROLL SECTIONS ACTIVE LINK -----------------
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 200;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav_menu a[data-location*=' + sectionId + ']').classList.add('active')
            document.querySelector('.mobile_nav_container .nav_menu a[data-location*=' + sectionId + ']').classList.add('active')
        }else{
            document.querySelector('.nav_menu a[data-location*=' + sectionId + ']').classList.remove('active')
            document.querySelector('.mobile_nav_container .nav_menu a[data-location*=' + sectionId + ']').classList.remove('active')
        }
    })
}
window.addEventListener('scroll', scrollActive)