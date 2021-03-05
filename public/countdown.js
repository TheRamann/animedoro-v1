/* eslint-disable eqeqeq */
var runningornot = false;

// eslint-disable-next-line no-unused-vars
function startcount() {
    if(runningornot === false){
        runningornot = true
        const startingMinutes = 40;
        let time = startingMinutes * 60;
        let minutes;
        let seconds
        const countdownEl = document.getElementById('countdown');
        var AfterStarting = setInterval(()=>{
            minutes = Math.floor(time / 60);
            seconds = time % 60;
            seconds = seconds < 10 ? '0' + seconds : seconds;
            countdownEl.innerHTML = `${minutes}: ${seconds}`
            time--;
            if(minutes == 0 && seconds == 0){
                countdownEl.innerHTML = "Time To Watch Anime"
                clearInterval(AfterStarting)
                alert("Time To Watch Anime")
            }
        }
        , 1000);
        
    }

}