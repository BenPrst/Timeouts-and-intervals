let timer;

(function () {
  let min = 0;
  let sec = 0;
  timer = setInterval(() => {
    document.getElementById("timer").innerHTML = min + ":" + sec;
    sec++;
    if (sec === 60) {
      min++;
      sec = 0;
    }
    document.getElementById("p").innerHTML = min + " minutes have passed.";
    if (min === 1) {
      document.getElementById("p").innerHTML = min + " minute has passed.";
    }
  }, 1000); // each 1 second
})();

function pause() {
  clearInterval(timer);
}
