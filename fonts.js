/*
* Lower case alphabets with fixed row length and variable column length
*/    

const a =
[[0,0,0,0,0],
[0,2,2,0,0],
[0,0,0,2,0],
[0,2,2,2,0],
[2,0,0,2,0],
[2,2,2,2,2],
[0,0,0,0,0]]

const b =
[[0,0,0],
[2,0,0],
[2,0,0],
[2,2,2],
[2,0,2],
[2,2,2],
[0,0,0]]

const c =
[[0,0,0],
[0,2,2],
[2,0,0],
[2,0,0],
[2,0,0],
[0,2,2],
[0,0,0]]

const d =
[[0,0,0],
[0,0,2],
[0,0,2],
[2,2,2],
[2,0,2],
[2,2,2],
[0,0,0]]

const e =
[[0,0,0,0],
[0,2,2,0],
[2,0,0,2],
[2,2,2,2],
[2,0,0,0],
[0,2,2,0],
[0,0,0,0]]

const f =
[[0,0,0],
[0,2,2],
[0,2,0],
[2,2,2],
[0,2,0],
[2,2,0],
[0,0,0]]

const g =
[[0,0,0,0],
[0,2,2,2],
[2,0,0,2],
[2,0,0,2],
[0,2,2,2],
[0,0,0,2],
[0,2,2,0]]

const h =
[[0,0,0],
[2,0,0],
[2,0,0],
[2,2,0],
[2,0,2],
[2,0,2],
[0,0,0]]

const i =
[[0],
[2],
[0],
[2],
[2],
[2],
[0]]

const j =
[[0,0,2],
[0,0,0],
[0,2,2],
[0,0,2],
[0,0,2],
[2,0,2],
[2,2,0]]

const k =
[[0,0,0],
[2,0,0],
[2,0,0],
[2,0,2],
[2,2,0],
[2,0,2],
[0,0,0]]

const l =
[[0,0],
[2,0],
[2,0],
[2,0],
[2,0],
[2,2],
[0,0]]

const m =
[[0,0,0,0,0],
[0,0,0,0,0],
[2,2,2,2,2],
[2,0,2,0,2],
[2,0,2,0,2],
[2,0,2,0,2],
[0,0,0,0,0]]

const n =
[[0,0,0],
[0,0,0],
[2,2,2],
[2,0,2],
[2,0,2],
[2,0,2],
[0,0,0]]

const o =
[[0,0,0],
[0,0,0],
[0,2,0],
[2,0,2],
[2,0,2],
[0,2,0],
[0,0,0]]

const p =
[[0,0,0],
[0,0,0],
[0,0,0],
[2,2,2],
[2,0,2],
[2,2,2],
[2,0,0]]

const q =
[[0,0,0],
[0,0,0],
[0,0,0],
[2,2,2],
[2,0,2],
[2,2,2],
[0,0,2]]

const r =
[[0,0,0],
[0,0,0],
[2,0,0],
[2,2,2],
[2,0,2],
[2,0,0],
[0,0,0]]

const s =
[[0,0,0,0],
[0,2,2,2],
[2,0,0,0],
[0,2,2,0],
[0,0,0,2],
[2,2,2,0],
[0,0,0,0]]

const t =
[[0,0,0],
[0,2,0],
[2,2,2],
[0,2,0],
[0,2,0],
[0,2,2],
[0,0,0]]

const u =
[[0,0,0,0],
[0,0,0,0],
[2,0,0,2],
[2,0,0,2],
[2,0,0,2],
[0,2,2,2],
[0,0,0,0]]

const v =
[[0,0,0],
[0,0,0],
[2,0,2],
[2,0,2],
[2,0,2],
[0,2,0],
[0,0,0]]

const w =
[[0,0,0,0,0],
[0,0,0,0,0],
[2,0,2,0,2],
[2,0,2,0,2],
[2,0,2,0,2],
[0,2,0,2,0],
[0,0,0,0,0]]

const x =
[[0,0,0],
[0,0,0],
[0,0,0],
[2,0,2],
[0,2,0],
[2,0,2],
[0,0,0]]

const y =
[[0,0,0,0],
[0,2,0,2],
[0,2,0,2],
[0,2,2,2],
[0,0,0,2],
[0,0,0,2],
[0,2,2,0]]

const z =
[[0,0,0],
[0,0,0],
[2,2,2],
[0,0,2],
[0,2,0],
[2,2,2],
[0,0,0]]

/**
 * Special Characters like space
 */

const space =
[[0],
[0],
[0],
[0],
[0],
[0],
[0]]

let lowerCaseAlphabets = [a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z];
const boxColor = ["#ebedf0", "#c6e48b", "#7bc96f", "#239a3b", "#196127"];

let str = "  vinny and chacks are bbf"

let symbolsToBeDrawnArray = [];
let symbolsToBeDrawnArrayCounter = 0;
let shift = 0;

let pixel = document.getElementsByClassName("day");

function init(){
    for (let i = 0; i<str.length; i++)
    {
        let ch = str.charCodeAt(i);
        if ( ch == 32){
        const symbol = space
    
        //Three spaces to be added when space is found
        addSymbol(symbol);
        addSymbol(symbol);
        addSymbol(symbol);
        }
        else if (ch >= 97 && ch <= 123){
        const symbol = lowerCaseAlphabets[ch % 97];
    
        //Character followed by space is to be added
        addSymbol(symbol);
        addSymbol(space);
        }
    }
    console.log(symbolsToBeDrawnArray)
}

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

function addSymbol(symbol)
{
    for (let i = 0; i < symbol.length; i++)
            {
                if ( symbolsToBeDrawnArray[i]!= null )
                {
                symbolsToBeDrawnArray[i] = symbolsToBeDrawnArray[i].concat(symbol[i])
                } 
                else
                {
                symbolsToBeDrawnArray[i] = symbol[i];
                }
                
            }
    symbolsToBeDrawnArrayCounter = symbolsToBeDrawnArray[0].length;  
    //temp (Hack!)   
    symbolsToBeDrawnArrayCounter = parseInt(symbolsToBeDrawnArrayCounter)-45;   
}

function draw(symbolsToBeDrawnArray, shift)
{

    let pixelCounter = 0;

    
        for (let i = shift; i < symbolsToBeDrawnArray[0].length; i++)
        {
            for (let j = 0; j < symbolsToBeDrawnArray.length; j++)
            {
                    let c = getColor(symbolsToBeDrawnArray[j][i])
                    if(pixelCounter < 370)
                    pixel[pixelCounter++].style.fill = c;
                    else
                    break;
            }
        }

}

function clear()
{
    let pixelCounter = 0;

    while(pixelCounter <= 370)
    {
        pixel[pixelCounter++].style.fill = boxColor[0];
    }
}

//clear();
init();



function tick()
{
    if (shift > (symbolsToBeDrawnArrayCounter))
    shift = 0;
    draw(symbolsToBeDrawnArray, shift++);   
}

setInterval( tick, 100);