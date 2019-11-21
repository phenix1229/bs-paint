for(let i = 0; i < 4000; i++){
    const div = document.createElement('div');
    div.className = "square";
    div.style.width = '10px';
    div.style.height = "10px";
    document.querySelector('.canvas').appendChild(div);
}

const brush = document.querySelector('.current-brush');
const canvas = document.querySelector('.canvas');
const canvasSquares = document.querySelectorAll('.square');
const colorCounter = {
    'color-1': 0,
}

function changeBrushColor(){
    brush.classList.remove(brush.classList.item(1));
    brush.classList.add(event.target.classList.item(1));
}

function changeColor(){
    event.target.classList.remove(event.target.classList.item(1));
    event.target.classList.add(brush.classList.item(1));
}

document.querySelectorAll('.palette-color').forEach(color => {color.addEventListener('click', changeBrushColor)});



canvas.style.gridTemplateColumns = 'repeat(80, 10px)';
canvas.style.gridTemplateRows = 'repeat(50, 10px)';
canvasSquares.forEach(square => {square.addEventListener('click', changeColor)});
