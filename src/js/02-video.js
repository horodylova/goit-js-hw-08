import Vimeo from '@vimeo/player';

import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo(iframe);

console.log(player);
console.log(iframe);

player.on('timeupdate', throttle(function(data) {
    const currentTime = data.seconds;
    localStorage.setItem('videoplayer-current-time', currentTime.toString());
}, 1000));

const savedTime = localStorage.getItem('videoplayer-current-time');
if(savedTime) {
    player.setCurrentTime(parseFloat(savedTime));
}
