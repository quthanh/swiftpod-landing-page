const swiperPartner = new Swiper(".swiper-partner", {
  slidesPerView: "auto",
  spaceBetween: 12,
  //   autoplay: {
  //     delay: 2500,
  //     disableOnInteraction: false,
  //   },
  breakpoints: {
    1024: {
      spaceBetween: 24,
    },
  },
});

const swiperCatalog = new Swiper(".swiper-catalog", {
  slidesPerView: "auto",
  spaceBetween: 12,
  //   autoplay: {
  //     delay: 2500,
  //     disableOnInteraction: false,
  //   },
  breakpoints: {
    1024: {
      spaceBetween: 24,
    },
  },
});

const array = [8, 9, 10, 11, 12, 13, 14, 15];

const arrayTime = [1000, 1300, 1800, 1500, 2100, 1500, 2700, 2400];

for (let i = 0; i < arrayTime.length; i++) {
  const time = arrayTime[i];

  setInterval(() => {
    // Generate a random index within the range of the array's length
    const randomIndex = Math.floor(Math.random() * array.length);

    // Access the element at the random index
    const randomElement = array[randomIndex];

    if (document.getElementsByClassName("bg-item")?.[i]?.style) {
      document.getElementsByClassName("bg-item")[
        i
      ].style.backgroundImage = `url('./images/image${randomElement}.jpg')`;
    }
  }, time);
}
