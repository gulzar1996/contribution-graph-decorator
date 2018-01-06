const zero =
[[4,4,4,4,4],
[4,0,0,0,4],
[4,0,0,0,4],
[4,0,0,0,4],
[4,0,0,0,4],
[4,0,0,0,4],
[4,4,4,4,4]]

const one =
[[0,0,4,0,0],
[0,0,4,0,0],
[0,0,4,0,0],
[0,0,4,0,0],
[0,0,4,0,0],
[0,0,4,0,0],
[0,0,4,0,0]]

const two =
[[4,4,4,4,4],
[0,0,0,0,4],
[0,0,0,0,4],
[4,4,4,4,4],
[4,0,0,0,0],
[4,0,0,0,0],
[4,4,4,4,4]]

const three =
[[4,4,4,4,4],
[0,0,0,0,4],
[0,0,0,0,4],
[4,4,4,4,4],
[0,0,0,0,4],
[0,0,0,0,4],
[4,4,4,4,4]]

const four =
[[4,0,0,0,4],
[4,0,0,0,4],
[4,0,0,0,4],
[4,4,4,4,4],
[0,0,0,0,4],
[0,0,0,0,4],
[0,0,0,0,4]]

const five =
[[4,4,4,4,4],
[4,0,0,0,0],
[4,0,0,0,0],
[4,4,4,4,4],
[0,0,0,0,4],
[0,0,0,0,4],
[4,4,4,4,4]]

const six =
[[4,4,4,4,4],
[4,0,0,0,0],
[4,0,0,0,0],
[4,4,4,4,4],
[4,0,0,0,4],
[4,0,0,0,4],
[4,4,4,4,4]]

const seven =
[[4,4,4,4,4],
[0,0,0,0,4],
[0,0,0,0,4],
[0,0,0,0,4],
[0,0,0,0,4],
[0,0,0,0,4],
[0,0,0,0,4]]

const eight =
[[4,4,4,4,4],
[4,0,0,0,4],
[4,0,0,0,4],
[4,4,4,4,4],
[4,0,0,0,4],
[4,0,0,0,4],
[4,4,4,4,4]]

const nine =
[[4,4,4,4,4],
[4,0,0,0,4],
[4,0,0,0,4],
[4,4,4,4,4],
[0,0,0,0,4],
[0,0,0,0,4],
[0,0,0,0,4]]

const colon =
[0,0,2,0,2,0,0]

const clock =
[[0,0,4,4,4,0,0],
[0,4,0,2,0,4,0],
[4,0,0,2,0,0,4],
[4,0,0,2,2,0,4],
[4,0,0,0,0,0,4],
[0,4,0,0,0,4,0],
[0,0,4,4,4,0,0]]

const boxColor = ["#ebedf0", "#c6e48b", "#7bc96f", "#239a3b", "#196127"];
const rowLength = 7;
const shift =  2;

var x = document.getElementsByClassName("day");

var d = new Date(2011,8,22,13,0,0,0);

//CleanUp All The Pixel First 
let cc = 0;
for (let i = 0; i<7; i++)
{
    for (let j = 0; j<53; j++)
    {
        x[cc++].style.fill = boxColor[0];
    }
}

//Draw colon
drawColon(shift+12);
drawColon(shift+26);

//Draw clock
drawClock(shift+42);


function getColor(v)
{
     if (v == 1)
    return boxColor[1];
    else if (v == 2)
    return boxColor[2];
    else if (v == 3)
    return boxColor[3];
    else if (v == 4)
    return boxColor[4];
    else
    return boxColor[0];
}
function drawClock(offset)
{
    let ClockPixelPosition = offset * rowLength;
    for (let i = 0; i<7; i++)
    {
        for (let j = 0; j<7; j++)
        {
            let c = getColor(clock[j][i])
            x[ClockPixelPosition++].style.fill = c;
        }
    }
}
function drawNumber(firstDigit,offset)
{
    let DigitPixelPosition = offset * rowLength;
    for (let i = 0; i<5; i++)
    {
        for (let j = 0; j<7; j++)
        {
            let c = getColor(firstDigit[j][i])
            x[DigitPixelPosition++].style.fill = c;
        }
    }
}
function drawColon(offset)
{
    let ColonPixelPosition = offset * rowLength;
    for (let i = 0; i < 7; i++)
    {   
        let c = getColor(colon[i])
        x[ColonPixelPosition++].style.fill = c;
    }
}
//offs is no of pixel from left
function chooseNumber(currentTime, offs)
{
    if(currentTime == 0)
    drawNumber(zero,offs);
    else if (currentTime == 1)
    drawNumber(one,offs)
    else if (currentTime == 2)
    drawNumber(two,offs)
    else if (currentTime == 3)
    drawNumber(three,offs)
    else if (currentTime == 4)
    drawNumber(four,offs)
    else if (currentTime == 5)
    drawNumber(five,offs)
    else if (currentTime == 6)
    drawNumber(six,offs)
    else if (currentTime == 7)
    drawNumber(seven,offs)
    else if (currentTime == 8)
    drawNumber(eight,offs)
    else
    drawNumber(nine,offs)
}

//ticker function that will refresh our display every second
function tick() {
    var newd = new Date();

    var t = newd;
    var h = t.getHours();
    var m = t.getMinutes();
    var s = t.getSeconds();

    h = (h <10)?'0'+h:h;
    m = (m <10)?'0'+m:m;
    s = (s <10)?'0'+s:s;
    s = s.toString();
    h = h.toString();
    m = m.toString();
    //Display Hour
    chooseNumber(h.charAt(0),shift+0);
    chooseNumber(h.charAt(1),shift+6);

    

    //Display Minutes
    chooseNumber(m.charAt(0),shift+14);
    chooseNumber(m.charAt(1),shift+20);


    //Display Seconds
    chooseNumber(s.charAt(0),shift+28);
    chooseNumber(s.charAt(1),shift+34);
    



   }

//the runner
var t = setInterval( tick, 1000);
