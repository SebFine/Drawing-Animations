class Timer {
    constructor(durationInput, startButton, pauseButton, callbacks) {
      //setting instance variables
      this.durationInput = durationInput;
      this.startButton = startButton;
      this.pauseButton = pauseButton;
      if (callbacks) {
        this.onStart = callbacks.onStart;
        this.onTick = callbacks.onTick;
        this.onComplete = callbacks.onComplete;
      }
  
      startButton.addEventListener("click", this.start);
      pauseButton.addEventListener("click", this.pause);
    }
  
    start = () => {
      // arrow functions actually creates a constructor in their particular class, therefore this is referencing to Timer.
      if (this.onStart) {
        this.onStart();
      }
      this.tick();
      this.interval = setInterval(this.tick, 1000);
    };
  
    pause = () => {
      clearInterval(this.interval);
    };
  
    tick = () => {
      if (this.timeRemaining <= 0) {
        this.pause();
        if (this.onComplete) {
          this.onComplete();
        }
      } else {
        this.timeRemaining = this.timeRemaining - 1;
        if (this.onTick) {
          this.onTick();
        }
      }
    };
  
    get timeRemaining() {
      return parseFloat(this.durationInput.value);
    }
  
    set timeRemaining(time) {
      this.durationInput.value = time;
    }
  }