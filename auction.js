// timer function
function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
      minutes = parseInt(timer / 60, 10);
      seconds = parseInt(timer % 60, 10);
  
      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;
  
      display.textContent = minutes + ":" + seconds;
  
      if (--timer < 0) {
        timer = duration;
      }
    }, 1000);
  }
  
  window.onload = function () {
    var timerDuration = 120; // Timer duration in seconds
    var display = document.querySelector('#timer'); // HTML element to display the timer
  
    startTimer(timerDuration, display);
  };

//   auction function
var highestBid = 0;

    function placeBid() {
      var bidInput = document.getElementById('bid-input');
      var bid = parseFloat(bidInput.value);

      if (bid > highestBid) {
        highestBid = bid;
        updateDisplay();
      }

      bidInput.value = '';
    }

    function updateDisplay() {
      var highestBidDisplay = document.getElementById('highest-bid');
      highestBidDisplay.textContent = highestBid;
    }