//画像情報のオブジェクトを格納した配列
const picArray = [
  { src: './images/pic_1.jpg', title: 'picture 1' },
  { src: './images/pic_2.jpg', title: 'picture 2' },
  { src: './images/pic_3.jpg', title: 'picture 3' },
  { src: './images/pic_4.jpg', title: 'picture 4' },
  { src: './images/pic_5.jpg', title: 'picture 5' },
  { src: './images/pic_6.jpg', title: 'picture 6' },
];

//スライドショーが再生中かどうかを記録しておくためのグローバル変数
let playingID = 0;

let changeAction = false; //ボタンクリック時の動作の切替

//１番目の画像と画像タイトルを表示
document.getElementById('pics').src = picArray[0].src;
document.getElementById('pic-title').innerText = picArray[0].title;

//写真を切り替える関数
//関数名「changePicture」
let counter = 0;
function changePicture() {
  if (counter === 0) {
    document.getElementById('pics').src = picArray[1].src;
    document.getElementById('pic-title').innerText = picArray[1].title;
  } else if (counter === 1) {
    document.getElementById('pics').src = picArray[2].src;
    document.getElementById('pic-title').innerText = picArray[2].title;
  } else if (counter === 2) {
    document.getElementById('pics').src = picArray[3].src;
    document.getElementById('pic-title').innerText = picArray[3].title;
  } else if (counter === 3) {
    document.getElementById('pics').src = picArray[4].src;
    document.getElementById('pic-title').innerText = picArray[4].title;
  } else if (counter === 4) {
    document.getElementById('pics').src = picArray[5].src;
    document.getElementById('pic-title').innerText = picArray[5].title;
  }
  counter++;
}

// ボタンを押してスライドショーを再生・停止する関数
//関数名「playSlidedeshow」
function playSlideshow() {
  if (changeAction) {
    clearInterval(playingID);
    document.getElementById('playButton').innerText = 'PLAY';
    changeAction = false;
  } else {
    playingID = setInterval(changePicture, 2000);
    document.getElementById('playButton').innerText = 'STOP';
    changeAction = true;
  }
}
