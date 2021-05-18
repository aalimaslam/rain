const video = document.getElementById('video').play();
const audio = document.getElementById('rainAudio');
const playPauseBtn = document.getElementById('playPause');
const path = 'imgs/';
const playBtn = `${path}playBtn.png`;
const pauseBtn = `${path}pauseBtn.png`;
let playPauseState = 0;
playPauseBtn.onclick = ()=>{

        // 0  === false
        // 1  === true


        if(playPauseState == 0){
            audio.play();
            playPauseBtn.src = pauseBtn;
            playPauseState = 1;
        }
        else if(playPauseState == 1){
            audio.pause();
            playPauseBtn.src = playBtn;
            playPauseState = 0;
        }

        


        // playPauseBtn.src = pauseBtn;
        // audio.play();
        // console.log(audio)
        // console.log(audio.play())
        // console.log(pauseBtn)
        // playPauseBtn.src = playBtn;


}
