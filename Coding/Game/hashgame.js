var clicks = 0;
var winner = false;
var matrix = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

function process(pos) {
  clicks++;
  var type = (clicks % 2 === 0) ? "X" : "O";
  if (!document.game.opt[pos].value) {
    if (!winner) {
      document.game.opt[pos].value = type;
      check(type);
    } else {
      alert( winner + ' wins');
    }
  } else {
    alert('This space is being used');
  }
}

function check(type) {
  matrix.forEach(function(x) {
    var count = 0;
    x.forEach(function(y) {
      if (document.game.opt[y] && document.game.opt[y].value === type)
        count++;
    });
    if (count == 3) {
      wins(x);
      var person = (document.game[type].value || type);
      winner = person;
      alert('Congratulations ' + person + '!!! you win!!!');
    }
  });
}

function wins(x) {
  x.forEach(function(i) {
    document.game.opt[i].className = 'wins';
  });
}

function reboot() {
  for (x = 0; x <= 8; x++) {
    document.game.opt[x].value = '';
    document.game.opt[x].className = '';
  }
  document.game.X.value = '';
  document.game.O.value = '';
  winner = false;
  clicks = 0;
}
