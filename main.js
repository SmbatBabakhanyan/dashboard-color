
function test() {
  var dashboard = [];
  var obj = {};
  for (var i = 1; i <= 64; i++) {
    dashboard.push(obj);
  }
  for (j = 0; j < dashboard.length; j++) {
    document.getElementById("mainChessBoard").appendChild(document.createElement("button")).style.backgroundColor = parseInt((j / 8) + j) % 2 == 0 ? 'white': '#ababab' ;
    var btns = document.querySelectorAll('button');
    btns[j].addEventListener('click', function () {
      var x = Math.floor(Math.random() * 256);
      var y = Math.floor(Math.random() * 256);
      var z = Math.floor(Math.random() * 256);
      var bgColor = "rgb(" + x + "," + y + "," + z + ")";
      this.style.backgroundColor = bgColor;
      console.log(bgColor);
    });
  }
}
test();
