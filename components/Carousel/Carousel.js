/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/


function MakeCarousel() {
  const carousel = document.createElement("div");
  const leftBtn = document.createElement("div");
  const mountains = document.createElement("img");
  const computer = document.createElement("img");
  const trees = document.createElement("img");
  const turnTable = document.createElement("img");
  const rightBtn = document.createElement("div");

  carousel.append(leftBtn);
  carousel.append(mountains);
  carousel.append(computer);
  carousel.append(trees);
  carousel.append(turnTable);
  carousel.append(rightBtn);

  carousel.classList.add("carousel");
  leftBtn.classList.add("left-button");
  rightBtn.classList.add("right-button");

  leftBtn.textContent = " < "; // replace with graphemica
  rightBtn.textContent = " > ";

  mountains.src = "./assets/carousel/mountains.jpeg";
  computer.src = "./assets/carousel/computer.jpeg";
  trees.src = "./assets/carousel/trees.jpeg";
  turnTable.src = "./assets/carousel/turntable.jpeg";
  mountains.classList.add("img-focus");

  let counter = 0;
  const imgArr = [mountains, computer, trees, turnTable];
  rightBtn.addEventListener("click", (e) => {
    if (counter < imgArr.length - 1) {
      imgArr[counter].classList.toggle("img-focus");
      counter++;
      imgArr[counter].classList.toggle("img-focus");
    } else {
      imgArr[counter].classList.toggle("img-focus");
      counter = 0;
      imgArr[counter].classList.toggle("img-focus");
    }
  });

  leftBtn.addEventListener("click", (e) => {
    if (counter > 0) {
      imgArr[counter].classList.toggle("img-focus");
      counter--;
      imgArr[counter].classList.toggle("img-focus");
    } else {
      imgArr[counter].classList.toggle("img-focus");
      counter = imgArr.length-1;
      imgArr[counter].classList.toggle("img-focus");
    }
  });

  // rightBtn.addEventListener("click", (e) => {
  //   imgArr.forEach( (elem) => {
  //     elem.style.transform = 'translateX(-100%)';
  //   });
  // }); // trying a different way

  return carousel;
}

document.querySelector(".carousel-container").append(MakeCarousel());