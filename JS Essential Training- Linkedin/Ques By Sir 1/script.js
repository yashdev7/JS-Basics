
// const ColorName = ['Red', 'Orange', 'Yellow', 'Blue'];
 

// function handleClick() {
//     // e.preventDefault();
//     console.log('hsjfhsj');
// }
 

// const template = ColorName.map((color) => `<li><a href="/#" onclick="handleClick()">${color}</a></li>`);

// const ul = `<ul>${template}</ul>`

// document.querySelector('div#main').innerHTML = ul



const ColorName = ['Red', 'Orange', 'Yellow', 'Blue'];
 
function handleClick(color, e) {  
    e.preventDefault();
    console.log((color) + " Color is Selected");
}
 
const template = ColorName.map((color) => `<li><a href="/#" onclick="handleClick('${color}', event)">${color}</a></li>`);
 
const ColorList = document.getElementById('color-list');
 
ColorList.innerHTML = template.join('');