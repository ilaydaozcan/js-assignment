
const nextButton = document.getElementById("next");
const previousButton = document.getElementById("previous");
const imagePosition = document.getElementById("count");

var totalImages = document.getElementsByTagName("img").length;

console.log("totalImages: " + totalImages);

var currentImage = 0;

function setImage() {
  var el = document.querySelector(".active");
  el.classList.remove("active");

  var newImage = document.getElementsByTagName("li");
  newImage[currentImage].classList.add("active");

  imagePosition.innerText = (currentImage + 1) + " of " + totalImages;
}


previousButton.onclick = function () {
  console.log("left clicked");

  if (currentImage > 0) {
    currentImage--;
    setImage();
  }
  else {
    currentImage = totalImages - 1;
    setImage();
  }
}

nextButton.onclick = function () {
  console.log("next clicked");

  if (currentImage < totalImages - 1) {
    currentImage++;
    setImage();
  }
  else {
    currentImage = 0;
    setImage();
  }
}

document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowLeft") {
    previousButton.onclick();
  }
  else if (event.key === "ArrowRight") {
    nextButton.onclick();
  }
})
