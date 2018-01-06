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

var x = document.getElementsByClassName("day");
console.log(x);

document.getElementsByClassName("f4 text-normal mb-2")[1].innerHTML = x;
x[2].style.fill = "red";

// $(".day").css({ fill: "#ff0000" });

for (let i = 0; i<columnLength; i++)
{
    for (let j = 0; j<rowLength; j++)
    {
        let c = getColor(artPatterns[j][i])
        x.style.fill(c);
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
