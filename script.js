$(document).ready(function() {
  var minutes = 25;
  var seconds = 0;
  var pause = false;
  var countTime = 25;
  var breakTime = 5;
  var counting = 0;
  $('.timer').html(minutes + ':00')

  function countDown() {
    if (minutes === 0 && seconds === 1) {
      audio.play();
    }
    if (minutes === 0 && seconds === 0) {
      if ($('.title').text() === 'Session') {
        $('.title').text().html('Break');
        minutes = breakTime;
        $('.timer').html(minutes + ':0' + seconds);
      } else if ($('.title').text() === 'Break') {
        $('.title').text().html('Session');
        minutes = countTime;
        $('.timer').html(minutes + ':0' + seconds);
      }
    } else {
      if (seconds === 0) {
        seconds = 60;
        minutes--;
      }
      seconds--;
      if (seconds < 10) {
        $('.timer').html(minutes + ':0' + seconds)
      } else {
        $('.timer').html(minutes + ':' + seconds);
      }
    }
  }
  
  $('#minusBreak').click(function(){
    if(pause === false){
      if(breakTime > 1){
        breakTime--;
        $('#break').html(breakTime);
        $('.title').html('Session');
        $('.timer').html(countTime + ':00');
        seconds = 0;
        minutes = countTime;
      }
    }
  })
  $('#plusBreak').click(function(){
    if(pause === false){
        breakTime++;
        $('#break').html(breakTime);
        $('.title').html('Session');
        $('.timer').html(countTime + ':00');
        seconds = 0;
        minutes = countTime;
      }
  })
  $('#minusWork').click(function(){
    if(pause===false){
      if(countTime > 1){
        countTime--;
        $('#count').html(countTime);
        $('.title').html('Session');
        $('.timer').html(countTime + ':00');
        seconds = 0;
        minutes = countTime;
      }
    }
  })
  $('#plusWork').click(function(){
    if(pause===false){
        countTime++;
        $('#count').html(countTime);
        $('.title').html('Session');
        $('.timer').html(countTime + ':00');
        seconds = 0;
        minutes = countTime;
    }
  })
  $('.clock').click(function(){
    if(pause === false){
      counting = setInterval(countDown, 1000);
      pause = true;
    }
    else if(pause === true){
      clearInterval(counting);
      pause = false;
    }
  })
  
});