const start = document.getElementById('Start');
start.addEventListener('click',function Starter() {
    const d = new Date();
    const getStringHours =  document.getElementById("demo").innerHTML = d.toLocaleTimeString();
    const getValueHours = parseInt(getStringHours.replace('PM',''));
    document.body.append(getValueHours);    
    var myStarter  = setInterval(Starter, 1000); 
    return myStarter;
  })

  const Stop = document.getElementById('Stop');
  Stop.addEventListener('click',function Stop(){
    alert('hello')
    clearInterval(myStarter);
  })
