const slideList = document.querySelectorAll(".slide__item");
const dotList = document.querySelectorAll(".dot");
const btn_prev = document.querySelector(".carousel__prev");
const btn_next = document.querySelector(".carousel__next");
const slide = document.querySelector(".slide");
let count = 2;
let active = count;
let size = slideList[0].clientWidth;
slide.style.transform = "translateX(" + -1 * count * size + "px)";
function checkend() {
  if (count == -1) {
    count = slideList.length - 1;
    slide.style.transition = "0s";
    move();
  } else if (count == slideList.length) {
    count = 0;
    slide.style.transition = "0s";
    move();
  } else {
    slide.style.transition = "0.5s";
    move();
  }
}
function move() {
  slide.style.transform = "translateX(" + -1 * count * size + "px)";
  dotList[active].classList.remove("dot--active");
  active = count;
  console.log(active);

  dotList[active].classList.add("dot--active");
}

for (let i = 0; i < dotList.length; i++) {
  dotList[i].addEventListener("click", () => {
    count = i;
    console.log(i);
    checkend();
  });
}
btn_next.addEventListener("click", () => {
  count++;
  checkend();
});
btn_prev.addEventListener("click", () => {
  count--;
  checkend();
});
