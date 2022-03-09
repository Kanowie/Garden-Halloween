const toNight = document.getElementById("container");
const runAway = document.getElementById("animate");

document.body.onkeyup = function(e){
    if(e.keyCode == 32){
      flamingoMove();
      zombieMove();
      sunMove();
      moonMove();
    }
}

// function allTogether() {
//   flamingoMove();
//   zombieMove();
//   sunMove();
//   moonMove();
// }

function flamingoMove() {
  let id = null;
  const elem = document.getElementById("animate");
  let pos = 155;
  clearInterval(id);
  id = setInterval(frame, 13);
  function frame() {
    if (pos == 450) {
      clearInterval(id);
    } else {
      pos++;
      elem.style.right = pos + 'px';
      runAway.style.transform = 'scaleX(-1)';
    }
  }
}

function zombieMove() {
  let id = null;
  const elem = document.getElementById("animate2");
  let pos = -80;
  clearInterval(id);
  id = setInterval(frame, 13);
  function frame() {
    if (pos == 150) {
      clearInterval(id);
    } else {
      pos++;
      elem.style.right = pos + 'px';
    }
  }
}

function sunMove() {
  let id = null;
  const elem = document.getElementById("sun");
  let pos = 5;
  clearInterval(id);
  id = setInterval(frame, 8);
  function frame() {
    if (pos == 500) {
      clearInterval(id);
    } else {
      pos++;
      elem.style.top = pos + 'px';
      toNight.style.background = "rgb(49, 53, 104)";
      toNight.style.transition = "all 5.5s";
    }
  }
}

function moonMove() {
  let id = null;
  const elem = document.getElementById("moon");
  let pos = -70;
  clearInterval(id);
  id = setInterval(frame, 20);
  function frame() {
    if (pos == 50) {
      clearInterval(id);
    } else {
      pos++;
      elem.style.top = pos + 'px';
    }
  }
}
