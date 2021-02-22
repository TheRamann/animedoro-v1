/* eslint-disable eqeqeq */
var runningornot = false;

// eslint-disable-next-line no-unused-vars
function startcount() {
    if(runningornot === false){
        runningornot = true;
        const startingMinutes = 40;
        let time = startingMinutes * 60;
        let endtime = false;
        const countdownEl = document.getElementById('countdown');
    
        setInterval(()=>{
            const minutes = Math.floor(time / 60);
            let seconds = time % 60;
            if(minutes == '0' && seconds == '0'){ 
                if(endtime == false){
                    countdownEl.innerHTML = `Time To Watch Anime`
                    endtime = true
                    runningornot = false;
                    alert("Time To Watch Anime")
                }
                return;
                }
            seconds = seconds < 10 ? '0' + seconds : seconds;
            countdownEl.innerHTML = `${minutes}: ${seconds}`
            time--;
        }, 1000);
    }

}