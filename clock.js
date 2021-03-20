function clock(){
    const h = document.getElementById("hour");
    const m = document.getElementById("min");
    const s = document.getElementById("sec");

    let oneDigit = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09"];

    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();

    if (second < 10){
        second = oneDigit[second];
    }
    if (minute < 10){
        minute = oneDigit[minute];
    }
    if (hour < 10){
        hour = oneDigit[hour];
    }

    h.innerHTML = hour;
    m.innerHTML = minute;
    s.innerHTML = second;
}
setInterval(clock, 1000);