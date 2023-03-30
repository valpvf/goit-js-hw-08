import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

getTimeFromLS('videoplayer-current-time');

player.on('timeupdate', throttle(onSaveLS, 1000));

function onSaveLS(data) {
  localStorage.setItem('videoplayer-current-time', data.seconds);
}

function getTimeFromLS(key) {
  const savedTime = localStorage.getItem(key) || 0;
  player.setCurrentTime(savedTime);
}
