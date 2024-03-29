import Player from '@vimeo/player'; 
import throttle from 'lodash.throttle';

 const frame = document.querySelector('iframe');
 const player = new Player(frame);

 const onPlay = function (data) {
     localStorage.setItem('videoplayer-current-time', data.seconds);
 };

 player.on('timeupdate', throttle(onPlay, 1000));

 const currentTime = Number(localStorage.getItem('videoplayer-current-time'));

 player.setCurrentTime(currentTime || 0)