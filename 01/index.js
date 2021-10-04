// function normalFunk(x) {
//   document.getElementById('monitor').innerHTML = x;
// }

let normalFunc = function(x) {
  document.getElementById('monitor').innerHTML = x;
}

let arrowFunc = (x) => {
  document.getElementById('monitor').innerHTML = x;
}

window.addEventListener("load", () => {
  let normalFuncBtn = document.getElementById('normalFunc');
  normalFuncBtn.addEventListener('click', () => {
    document.getElementById('monitor').innerHTML = '通常関数です';
  });
});

