let hanteiBtn = document.getElementById('hantei');
  hanteiBtn.addEventListener('click', () => {
    const textbox = document.getElementById('message').value;
    if (textbox === '') {
      document.getElementById('monitor2').innerHTML = '年を入力してください！！';
    } else if (textbox <= 1900 || textbox >= 2200) {
        document.getElementById('monitor1').innerHTML = '1900年から2200年までの年を入力してください';
    } else if ((textbox % 4 === 0 && textbox % 100 !== 0) || textbox % 400 === 0) {
      document.getElementById('monitor1').innerHTML = 'うるう年です！';
    } else
      document.getElementById('monitor1').innerHTML = 'うるう年ではありません！' 
});

let clearBtn = document.getElementById('clear');
  clearBtn.addEventListener('click', () => {
  document.getElementById('message').value = '';
  document.getElementById('monitor1').innerHTML = '';
  document.getElementById('monitor2').innerHTML = '';
});



let 関数名 = タグの情報;
関数名.addEventListener(イベントの種類, () => {
  処理
});

