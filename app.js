const durationInput = document.querySelector("#duration");
const startButton = document.querySelector("#start");
const pauseButton = document.querySelector("#pause");

//initiating the instance
const timer = new Timer(durationInput, startButton, pauseButton, {
  //callbacks - for dividing the function groups
  onStart() {
    console.log("timer started");
  },
  onTick() {
    console.log("on tick runs");
  },
  onComplete() {
    console.log("timer completed");
  },
});
