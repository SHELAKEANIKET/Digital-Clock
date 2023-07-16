function showTime() {
  let clock = new Date();
  let h = clock.getHours();
  let m = clock.getMinutes();
  let s = clock.getSeconds();
  h = checkHours(h);
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById("show").innerHTML = h + ":" + m + ":" + s; //for showing the time on screen
  setTimeout(showTime, 1000);
}

// for minutes and seconds
function checkTime(i) {
  if (i < 10) {    
    i = "0" + i;
  }
  return i;
}

// for hours
function checkHours(j) {
  if (j > 12)
  {
    j = j - "12";
  }
  return j;
}

