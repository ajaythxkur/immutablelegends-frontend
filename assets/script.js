import Swiper from "swiper";
var swiper = new Swiper(".swiper", {
    grabCursor: true,
    speed: 500,
    effect: "fade",
    loop: true,
    clickable: true,
    mousewheel: {
      invert: false,
      sensitivity: 1,
    },
  });
  
  swiper.enable();
  
  // Sidebars
  
  const moreBtns = document.querySelectorAll(".more-btn");
  const closeBtns = document.querySelectorAll(".close-btn");
  const boxContainers = document.querySelectorAll(".box-container");
  const body = document.querySelector("body");
  const mobileBoxes = document.querySelectorAll(".box-mobile");
  
  moreBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      let modal = btn.getAttribute("data-modal");
      document.getElementById(modal).style.display = "block";
      body.classList.add("prevent-background-scroll");
      boxContainers.forEach((container) => {
        container.style.display = "none";
      });
    });
  });
  
  closeBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      let modal = (btn.closest(".sidebar").style.display = "none");
      body.classList.remove("prevent-background-scroll");
      boxContainers.forEach((container) => {
        container.style.display = "grid";
      });
    });
  });
  
  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("sidebar")) {
      e.target.style.display = "none";
      body.classList.remove("prevent-background-scroll");
      boxContainers.forEach((container) => {
        container.style.display = "grid";
      });
    }
  });
  
  mobileBoxes.forEach((btn) => {
    btn.addEventListener("click", () => {
      let modal = btn.getAttribute("data-modal");
      document.getElementById(modal).style.display = "block";
      body.classList.add("prevent-background-scroll");
      boxContainers.forEach((container) => {
        container.style.display = "none";
      });
    });
  });
  
  // Audio
  
  const audio = document.getElementById("background-music");
  const playPauseButton = document.getElementById("play-pause-button");
  const playIcon = document.getElementById("play-music");
  const pauseIcon = document.getElementById("pause-music");
  
  let isPlaying = false;
  
  function togglePlayPause() {
    if (isPlaying) {
      audio.pause();
      playIcon.classList.remove("hidden");
      pauseIcon.classList.add("hidden");
    } else {
      audio.play();
      playIcon.classList.add("hidden");
      pauseIcon.classList.remove("hidden");
    }
    isPlaying = !isPlaying;
  }
  
  // Add an event listener for when the music ends
  audio.addEventListener("ended", function () {
    audio.currentTime = 0;
    audio.play();
  });
  
  playPauseButton.addEventListener("click", togglePlayPause);
  
  
  const buttons = document.querySelectorAll('section button');
  let initial = document.querySelectorAll('button img').length / 2;
  let count = initial;
  
  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      if (count > 1) {
        document
          .querySelectorAll(`button img:nth-child(${count})`)
          .forEach((img) => {
            img.classList.add('fade-out');
          });
  
        count--;
      }
  
      // For demo purposes (looping images)
      else {
        count = initial;
        document.querySelectorAll(`button img`).forEach((img) => {
          img.classList.remove('fade-out');
        });
      }
    });
  });
  
  var galleryThumbs = new Swiper('.gallery-thumbs', {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: '2',
      // coverflowEffect: {
      //   rotate: 50,
      //   stretch: 0,
      //   depth: 100,
      //   modifier: 1,
      //   slideShadows : true,
      // },
      
      coverflowEffect: {
          rotate: 0,
          stretch: 0,
          depth: 50,
          modifier: 6,
          slideShadows : false,
        },
        
    });
    
    
  var galleryTop = new Swiper('.swiper-container.testimonial', {
      speed: 400,
      spaceBetween: 50,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      direction: 'vertical',
      pagination: {
        clickable: true,
        el: '.swiper-pagination',
        type: 'bullets',
      },
      thumbs: {
          swiper: galleryThumbs
        }
    });