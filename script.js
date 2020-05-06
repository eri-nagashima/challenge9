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

//１番目の画像と画像タイトルを表示
document.getElementById('pics').src = picArray[0].src;
document.getElementById('pic-title').innerText = picArray[0].title;

//写真を切り替える関数
//関数名「changePicture」
let counter = 0;

function changePicture() {
  counter++;

  if (counter < picArray.length) {
    document.getElementById('pics').src = picArray[counter].src;
    document.getElementById('pic-title').innerText = picArray[counter].title;
  }
  // counter++; //ここに置くとpicture1が一回多く表示されるのはなぜ？
}

// ボタンを押してスライドショーを再生・停止する関数
//関数名「playSlidedeshow」
function playSlideshow() {
  if (playingID) {
    // playingID = 0; //ここに置くとclearIntervalが作動しない、なぜか？
    clearInterval(playingID);
    document.getElementById('playButton').innerText = 'PLAY';
    playingID = 0;
  } else {
    playingID = setInterval(changePicture, 2000);
    document.getElementById('playButton').innerText = 'STOP';
  }
}
