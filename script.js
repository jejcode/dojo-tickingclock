function getSecondsSinceStartOfDay() {
    return new Date().getSeconds() + 
      new Date().getMinutes() * 60 + 
      new Date().getHours() * 3600;
}

setInterval( function() {
    var time = getSecondsSinceStartOfDay();
    console.log(time);
    // your code here
    hour.style['transform'] = `rotate(${time/120  + 180 }deg)`
    minutes.style['transform'] = `rotate(${time/60 * 6 + 180}deg)`
    seconds.style['transform'] = `rotate(${time*6 + 180}deg)`

}, 1000);  
