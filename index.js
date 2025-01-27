const date = new Date();
date.setHours(0,0,0,0);

function EstimateHours(){
  date.setSeconds(date.getSeconds()+1);
  const finalTime = date.toTimeString().split(' ')[0];
  document.getElementById("demo").innerHTML = finalTime;
}
let KeepInterval;
const startButton =  document.getElementById('Start').addEventListener('click',()=>{
 KeepInterval =  setInterval(EstimateHours,1000);
})


const stopButton =  document.getElementById('Stop').addEventListener('click',()=>{
    clearInterval(KeepInterval);
    
 }) 



const resetButton =  document.getElementById('Reset').addEventListener('click',()=>{
// document.getElementById('demo').textContent = '00:00:00'
clearInterval(KeepInterval);
date.setHours(0,0,0,0);
document.getElementById('demo').innerHTML = "00:00:00";
})
