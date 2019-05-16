function test() {
  const chessBoard = document.createElement("div");
  chessBoard.id = "mainChessBoard";
  for (let i = 0; i < 64; i++) {
    const button = document.createElement("button");
    button.style.backgroundColor = (Math.floor(i / 8) + i) % 2 == 0 ? 'white' : 'black';
    button.dataset.id = i + 1;
    chessBoard.appendChild(button);
  }
  chessBoard.addEventListener('click', function (e) {
    if (e.target.dataset.id) {
      document.getElementById("demo").innerHTML = e.target.dataset.id;
      const x = Math.random() * 256;
      const y = Math.random() * 256;
      const z = Math.random() * 256;
      const bgColor = `rgb(${x} ${y} ${z})`
      e.target.style.backgroundColor = bgColor;
    }
  });
  document.body.appendChild(chessBoard);
};
test();


