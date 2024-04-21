function updateClock() {
  var now = new Date();
  var hours = now.getHours();
  var minutes = now.getMinutes();
  var seconds = now.getSeconds();

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  var timeString = hours + ":" + minutes + ":" + seconds;

  document.getElementById("clock").innerText = timeString;
}

// Update the clock every second
setInterval(updateClock, 1000);

// Initial call to display the clock immediately
updateClock();
// start cards sec
var currentCardIndex = 0;
var cards = document.querySelectorAll(".card-swip");
var prevButton = document.getElementById("prevButton");
var nextButton = document.getElementById("nextButton");

function showCard(index) {
  cards.forEach((card) => {
    card.style.display = "none";
  });
  cards[index].style.display = "flex";
}

showCard(currentCardIndex);

prevButton.addEventListener("click", function () {
  currentCardIndex = (currentCardIndex - 1 + cards.length) % cards.length;
  showCard(currentCardIndex);
});

nextButton.addEventListener("click", function () {
  currentCardIndex = (currentCardIndex + 1) % cards.length;
  showCard(currentCardIndex);
});

// message code

const textarea = document.getElementById("textarea");
const counter = document.getElementById("counter");
const maxLength = parseInt(textarea.getAttribute("maxlength"));

textarea.addEventListener("input", function () {
  const remainingChars = maxLength - textarea.value.length;
  counter.textContent = " متبقي لك:" + remainingChars;

  if (remainingChars <= 0) {
    textarea.value = textarea.value.slice(0, maxLength);
    counter.textContent = "انتهت الاحرف!";
  }
});
