
function startcount() {
    const startingMinutes = 40;
    let time = startingMinutes * 60;
    let endtime = false;
    const countdownEl = document.getElementById('countdown');

    setInterval(()=>{
        const minutes = Math.floor(time / 60);
        let seconds = time % 60;
        if(minutes == '0' && seconds == '0'){ 
            countdownEl.innerHTML = `Time To Watch Anime`
            if(endtime == false){
                endtime = true
                alert("Time To Watch Anime")
            }
            return;
            }
        seconds = seconds < 10 ? '0' + seconds : seconds;
        countdownEl.innerHTML = `${minutes}: ${seconds}`
        time--;
    }, 1000);
}