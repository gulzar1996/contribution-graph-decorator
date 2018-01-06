const artPatterns =
[[0,0,0,0,3,3,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,3,3,3,0,0,0,0,0,0,0,0,0,0],
[0,0,0,3,3,0,0,0,0,0,3,0,0,3,0,3,0,0,3,3,3,3,3,0,0,3,3,3,0,0,3,3,0,0,3,0,0,0,0,0,0,0,0,0,0],
[0,0,0,3,0,0,0,0,0,0,3,0,0,3,0,3,0,0,0,0,0,3,0,0,3,3,0,3,0,0,3,3,3,3,3,0,0,0,0,0,0,0,0,0,0],
[0,0,0,3,0,0,3,3,3,3,3,0,3,3,0,3,0,0,0,0,3,0,0,0,3,0,0,3,3,0,3,3,3,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,3,3,3,3,3,0,3,3,3,3,0,0,3,0,0,0,3,0,0,0,0,3,3,3,3,3,0,3,0,3,3,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,3,3,3,3,0,3,0,0,0,0,0,3,3,3,0,3,3,3,3,0,3,0,0,0,3,0,3,0,0,3,3,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]];

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

const boxColor = ["#ebedf0", "#c6e48b", "#7bc96f", "#7bc96f", "196127"];

var x = document.getElementsByClassName("day");

var d = new Date(2011,8,22,13,0,0,0);


void drawNumber(no)
{
    for (let i = 0; i<5; i++)
    {
        for (let j = 0; j<5; j++)
        {
            let c = getColor(no[j][i])
            x[count++].style.fill = c;
        }
    }  
}



function transformMiliseconds(t){
    //func that transforms miliseconds in digital clock format i.e. 22:34:12
      var h = Math.floor((t/(1000*60*60))%24);
      var m = Math.floor((t/(1000*60))%60);
      var s = Math.floor((t/1000)%60);
      
      h = (h <10)?'0'+h:h;
      m = (m <10)?'0'+m:m;
      s = (s <10)?'0'+s:s;
      return s;
    //   return h+':'+m+':'+s;
}

//ticker function that will refresh our display every second
function tick(){
    var newd = new Date();
    console.log("Ticker Function Executed");
    var currentTime = transformMiliseconds(newd-d);
    console.log("Time x",currentTime);
    if(currentTime == 0)
    drawNumber(zero);
    else if (currentTime == 1)
    drawNumber(one)
    else if (currentTime == 2)
    drawNumber(two)
    else if (currentTime == 3)
    drawNumber(three)
    else if (currentTime == 4)
    drawNumber(four)
    else if (currentTime == 5)
    drawNumber(five)
    else if (currentTime == 6)
    drawNumber(six)
    else if (currentTime == 7)
    drawNumber(seven)
    else if (currentTime == 8)
    drawNumber(eight)
    else
    drawNumber(nine)

   }

tick();
//the runner
var t = setInterval( tick, 1000);


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
