document.body.style.backgroundImage = 'url(' + [
        'background-1.jpg',
        'background-2.jpg'
    ][Math.floor(Math.random() * 2)] + ')';

function showDialog(id1, id2) {
    var overlay = document.getElementById(id1);
    var dialog = document.getElementById(id2);
    if(dialog.style.display == 'block'|| overlay.style.display == 'block;') {
        dialog.style.display = 'none';
        overlay.style.display = 'none';
    }
    else {
        dialog.style.display = 'block';
        overlay.style.display = 'block';
    }
}

tday=new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday");
tmonth=new Array("January","February","March","April","May","June","July","August","September","October","November","December");

function GetClock(){
    var d=new Date();
    var nday=d.getDay(),nmonth=d.getMonth(),ndate=d.getDate(),nyear=d.getYear();
    if(nyear<1000) nyear+=1900;
    var d=new Date();
    var nhour=d.getHours(),nmin=d.getMinutes(),nsec=d.getSeconds(),ap;

    if(nhour==0){ap=" AM";nhour=12;}
    else if(nhour<12){ap=" AM";}
    else if(nhour==12){ap=" PM";}
    else if(nhour>12){ap=" PM";nhour-=12;}

    if(nmin<=9) nmin="0"+nmin;
    if(nsec<=9) nsec="0"+nsec;

    document.getElementById('clockbox').innerHTML=""+tday[nday]+", "+tmonth[nmonth]+" "+ndate+", "+nyear+" "+nhour+":"+nmin+":"+nsec+ap+"";
}

window.onload=function(){
    GetClock();
    setInterval(GetClock,1000);
}