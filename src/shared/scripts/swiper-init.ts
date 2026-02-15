import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';
import StarSvg from '../../assets/star.svg?raw';

new Swiper('.swiper', {
  direction: 'vertical',
  slidesPerView: 1,
  speed: 500,
  mousewheel: {
    releaseOnEdges: true,
  },
  keyboard: {
    enabled: true,
  },
  allowTouchMove: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    renderBullet: (_index: number, className: string) => {
      return `<div class="${className}">${StarSvg}</div>`;
    },
  },
  on: {
    init: function (this: Swiper) {
      this.slides[0].classList.add('has-animated');
      updateStarFills(this.activeIndex);
    },
    slideChange: function (this: Swiper) {
      const activeSlide = this.slides[this.activeIndex];
      if (!activeSlide.classList.contains('has-animated')) {
        activeSlide.classList.add('has-animated');
      }
      updateStarFills(this.activeIndex);
    },
  },
});

function updateStarFills(activeIndex: number) {
  const bullets = document.querySelectorAll('.swiper-pagination-bullet');
  bullets.forEach((bullet, index) => {
    if (index <= activeIndex) {
      bullet.classList.add('filled');
    } else {
      bullet.classList.remove('filled');
    }
  });
}
