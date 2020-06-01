const slideList = document.querySelectorAll(".slide__item");
const dotList = document.querySelectorAll(".dot");
const btn_prev = document.querySelector(".carousel__prev");
const btn_next = document.querySelector(".carousel__next");
const slide = document.querySelector(".slide");
let count = 2;
let active = count;
let size = slideList[0].clientWidth;
function move() {
  slide.style.transform = "translateX(" + -1 * count * size + "px)";
  dotList[active].classList.remove("dot--active");
  active = count;
  dotList[active].classList.add("dot--active");
}

for (let i = 0; i < dotList.length; i++) {
  dotList[i].addEventListener("click", () => {
    count = i;
    console.log(i);
    move();
  });
}
btn_next.addEventListener("click", () => {
  if (count < slideList.length - 1) {
    count++;
    move();
  }
});
btn_prev.addEventListener("click", () => {
  if (count > 0) {
    count--;
    move();
  }
});
