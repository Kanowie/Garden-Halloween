function allTogether() {
  flamingoMove();
  zombieMove();
  sunMove();
  moonMove();
}

function flamingoMove() {
  let id = null;
  const elem = document.getElementById("animate");
  let pos = 155;
  clearInterval(id);
  id = setInterval(frame, 12);
  function frame() {
    if (pos == 450) {
      clearInterval(id);
    } else {
      pos++;
      elem.style.right = pos + 'px';
    }
  }
}

function zombieMove() {
  let id = null;
  const elem = document.getElementById("animate2");
  let pos = 0;
  clearInterval(id);
  id = setInterval(frame, 11);
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
    if (pos == 450) {
      clearInterval(id);
    } else {
      pos++;
      elem.style.top = pos + 'px';
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