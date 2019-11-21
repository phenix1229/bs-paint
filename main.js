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
    'color-2': 0,
    'color-3': 0,
    'color-4': 0,
    'color-5': 0,
}

function changeBrushColor(){
    brush.classList.remove(brush.classList.item(1));
    brush.classList.add(event.target.classList.item(1));
}

function changeColor(){
    event.target.classList.remove(event.target.classList.item(1));
    event.target.classList.add(brush.classList.item(1));
    colorCounter[brush.classList.item(1)]++;
        if (colorCounter['color-1'] >= 20){
            window.alert('There are other colors you know.');
            colorCounter['color-1'] = -4000;
        } else if (colorCounter['color-2'] >= 25){
            window.alert('I like blue too.');
            colorCounter['color-2'] = -4000;
        } else if (colorCounter['color-3'] >= 21){
            window.alert('I hope you\'re painting trees.');
            colorCounter['color-3'] = -4000;
        } else if (colorCounter['color-4'] >= 21){
            window.alert('Paint that $$money$$. Or grass... Whatever...');
            colorCounter['color-3'] = -4000;
        } 
}

document.querySelectorAll('.palette-color').forEach(color => {color.addEventListener('click', changeBrushColor)});



canvas.style.gridTemplateColumns = 'repeat(80, 10px)';
canvas.style.gridTemplateRows = 'repeat(50, 10px)';
canvasSquares.forEach(square => {square.addEventListener('click', changeColor)});
