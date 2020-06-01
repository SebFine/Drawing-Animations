const durationInput = document.querySelector("#duration");
const startButton = document.querySelector("#start");
const pauseButton = document.querySelector("#pause");
const circle = document.querySelector("circle");

//targeting and calculating the svg attributes
const perimeter = circle.getAttribute("r") * 2 * Math.PI;
circle.setAttribute("stroke-dasharray", perimeter);

let offset = 0;
let duration = 0;

//initiating the instance
const timer = new Timer(durationInput, startButton, pauseButton, {
  //callbacks - for dividing the function groups
  onStart(totalDuration) {
    duration = totalDuration;
  },
  onTick(timeRemaining) {
    circle.setAttribute("stroke-dashoffset",
    perimeter * timeRemaining / duration - perimeter);
  },
  onComplete() {
    console.log("timer completed");
  },
});
