const artPatterns = 
    [[0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,2,0,2,0,0,0,0,0,0,0,2,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,2,0,0,2,0,3,0,0,0,3,0,0,2,0,0,2,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,2,0,2,0,0,0,2,2,2,0,0,0,2,0,2,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,0,0,0,0,0,0,0,0,0,0],
    [0,2,0,0,0,0,0,2,2,2,0,0,0,2,0,0,0,0,0,0,2,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,2,0,0,0,0,2,2,2,0,0,2,0,0,0,0,0,0,2,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,2,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]];

const rowLength = artPatterns.length;
const columnLength = artPatterns[0].length;   
const boxColor = ["#ebedf0", "#c6e48b", "#7bc96f", "#7bc96f", "196127"];

var x = document.getElementsByClassName("js-calendar-graph-svg");
x[0].style.backgroundColor = "red";

for (let i = 0; i<columnLength; i++)
{
    for (let j = 0; j<rowLength; j++)
    {
        let c = getColor(artPatterns[j][i])
        console.log(c)
    }
}

function getColor(v)
{
    if (v == 0)
    return boxColor[0];
    else if (v == 1)
    return boxColor[1];
    else if (v == 2)
    return boxColor[2];
    else if (v == 3)
    return boxColor[3];
    else
    return boxColor[4];
}