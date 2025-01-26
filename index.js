//set interval , clearInterval
const date = new Date();

date.setHours(0, 0, 0, 0);

function EstimateTime() {
  date.setSeconds(date.getSeconds() + 1);
  const finalTime = date.toTimeString().split(' ')[0];
  document.getElementById('demo').innerHTML = finalTime;
}

let KeepInterval;

const StartButton = document.getElementById('Start').addEventListener("click", () => {
  if (!KeepInterval) {
    KeepInterval = setInterval(EstimateTime, 1000)
  }

})
const StopButton = document.getElementById('Stop').addEventListener("click", () => {
  clearInterval(KeepInterval);
  KeepInterval = null;
})

const ResetButton = document.getElementById('Reset').addEventListener("click", () => {
  clearInterval(KeepInterval);
  KeepInterval = null;
  date.setHours(0, 0, 0, 0);
  document.getElementById('demo').innerHTML = "00:00:00";
});