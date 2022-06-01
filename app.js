const checkbox = document.getElementById("checkbox");
const ball = document.getElementById("ball");
const label = document.getElementById("label");
const cardContainer = document.querySelectorAll(".card-container");
const secondsCardsContainer = document.querySelectorAll(".card");

checkbox.addEventListener("change", () => {
  //change theme

  document.body.classList.toggle("light");
  ball.classList.toggle("light");
  label.classList.toggle("light");

  for (let i = 0; i < cardContainer.length; i++) {
    cardContainer[i].classList.toggle("light");
  }

  for (let i = 0; i < secondsCardsContainer.length; i++) {
    secondsCardsContainer[i].classList.toggle("light");
  }
});
