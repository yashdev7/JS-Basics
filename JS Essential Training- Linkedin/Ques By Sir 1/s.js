//Constructor
class Marker{
    constructor(
        cap,
        color,
        ink
    ){
        this.cap = cap;
        this.color = color;
        this.ink = ink;
    }
}

const blackMarker = new Marker(1, "white", "black")

console.log(blackMarker.cap)


// Define an array called ColorName containing color names
const ColorName = ['Red', 'Orange', 'Yellow', 'Blue'];
 

function handleClick(color, e) {
    e.preventDefault();
    console.log(color);
}
 

const template = ColorName.map((color) => `<li><a href="/#" onclick="handleClick('${color}', event)">${color}</a></li>`);

const ul = `<ul>${template.join('')}</ul>`

document.querySelector('div#main').innerHTML = ul




const ColorName = ['Red', 'Orange', 'Yellow', 'Blue'];
 
function handleClick(color, e) {  
    e.preventDefault();
    console.log((color) + " Color is Selected");
}
 
const template = ColorName.map((color) => `<li><a href="/#" onclick="handleClick('${color}', event)">${color}</a></li>`);
 
const ColorList = document.getElementById('color-list');
 
ColorList.innerHTML = template.join('');
