setInterval( function() {
      const time = new Date()
      const seconds = 180 + (time.getSeconds() * 6)
      const minutes = 180 + (time.getMinutes() * 6) + (time.getSeconds() * 1/60)
      const hour = 180 + (time.getHours() * 30) + (time.getMinutes() * 1/60 * 30)
      
      document.getElementById('hour').style['transform'] = `rotate(${hour}deg)`
      document.getElementById('minutes').style['transform'] = `rotate(${minutes}deg)`
      document.getElementById('seconds').style['transform'] = `rotate(${seconds}deg)`
      
  }, 1000);
  
