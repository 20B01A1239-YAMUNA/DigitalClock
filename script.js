function ShowTime(){
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    let d = date.getDay();
    let mt = date.getMonth();
    let session = "AM";
    if(h == 0)
    {
        h = 12;
    }
    if(h>12)
    {
        h=h-12;
        session = "PM";
    }
    h = (h<10)?"0"+h:h;
    m = (m<10)?"0"+m:m;
    s = (s<10)?"0"+s:s;
    document.getElementById("Clock").innerHTML = h + ":" + m + ":" + s + session;
    setTimeout(ShowTime,1000)
    
    }
    ShowTime();
    