window.onload = function() {
    // Month Day, Year Hour:Minute:Second, id-of-element-container
    countUp("Mar 11, 2022 12:00:00", 'timer');
  };
  
  function countUp(countFrom, id) {
    countFrom = new Date(countFrom).getTime();
    let now = new Date(),
        countFrom = new Date(countFrom),
        timeDifference = (now - countFrom);
      
    let secondsInADay = 60 * 60 * 1000 * 24,
        secondsInAHour = 60 * 60 * 1000;
      
    days = Math.floor(timeDifference / (secondsInADay) * 1);
    hours = Math.floor((timeDifference % (secondsInADay)) / (secondsInAHour) * 1);
    mins = Math.floor(((timeDifference % (secondsInADay)) % (secondsInAHour)) / (60 * 1000) * 1);
    secs = Math.floor((((timeDifference % (secondsInADay)) % (secondsInAHour)) % (60 * 1000)) / 1000 * 1);
  
    document.getElementById('days')[0].innerHTML = days;
    document.getElementById('hours')[0].innerHTML = hours;
    document.getElementById('minutes')[0].innerHTML = mins;
    document.getElementById('seconds')[0].innerHTML = secs;
  
    clearTimeout(countUp.interval);
    countUp.interval = setTimeout(function(){ countUp(countFrom, id); }, 1000);
  }