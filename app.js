const durationInput = document.querySelector("#duration");
const startButton = document.querySelector("#start");
const pauseButton = document.querySelector("#pause");
const circle = document.querySelector("circle");

//targeting and calculating the svg attributes
const perimeter = circle.getAttribute("r") * 2 * Math.PI;
circle.setAttribute("stroke-dasharray", perimeter);

let offset = 0;

//initiating the instance
const timer = new Timer(durationInput, startButton, pauseButton, {
  //callbacks - for dividing the function groups
  onStart() {
    console.log("timer started");
  },
  onTick() {
    offset -= 1;
    circle.setAttribute("stroke-dashoffset", offset);
  },
  onComplete() {
    console.log("timer completed");
  },
});
