let audio = new Audio("meow.wav");
let audioButton = document.querySelector("#meow");
audioButton.addEventListener("click", () => {
    audio.play();
  });


let cats = document.querySelectorAll(".cat");
cats.forEach((cat) => {
  cat.addEventListener("click", () => {
    let predictionArea = document.querySelector("#prediction-cats");
    let prediction = [
      "In the coming days, your cherished desire will come true",
      "A gift is waiting for you!",
      "You will have new friends very soon",
      "A fun adventure awaits you during the holidays",
      "It is better to regret what you did, not what you did not do",
      "Never give up on your dream",
      "You will meet with an important person",
      "If you take the initiative, success will not be long in coming",
      "Your hopes and plans will come true beyond all expectations",
      "Someone is trying to hinder or harm you",
      "Very soon important news will come",
      "Everything is God's will: to influence the situation is not in your power!",
      "The answer to your question is connected with some man, perhaps, well known to you",
      "Something new will enter your life that will significantly affect your personality",
      "Be careful: they want to deceive you!",
      "Take a close look at your surroundings: someone may let you down at the most decisive moment",
      "You hope not in vain!",
    ];
    let randomPrediction =
      prediction[Math.floor(Math.random() * prediction.length)];
    predictionArea.innerHTML = `<h3>Your prediction</h3> <p class="prediction-text">${randomPrediction} <i class="fa-solid fa-paw"></i></p>`;
  });
});
