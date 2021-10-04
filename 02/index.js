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


let arrowFuncBtn = document.querySelector('#arrowFunc');
arrowFuncBtn.addEventListener('click', function(e) {
  arrowFuncEvent(e, 'アロー関数です');
});
});

let arrowFuncEvent = (e, text) => {
  document.getElementById('monitor').innerHTML = text;
};