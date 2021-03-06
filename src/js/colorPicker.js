const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

let intervalChangeColor = null;

const refs = {
start : document.querySelector(`button[data-action="start"]`),
stop: document.querySelector(`button[data-action="stop"]`),
section: document.querySelector(`body`)
}

refs.start.addEventListener('click', onStartChangeColor)
refs.stop.addEventListener('click', onStopChangeColor)


function onStartChangeColor() {
    const TIME_CHANGE_COLOR = 1000
    
    refs.start.setAttribute(`disabled`, "")
    
    intervalChangeColor = setInterval(() => {
    refs.section.setAttribute(`bgcolor`, `${colors[randomIntegerFromInterval(0, 5)]}`)
    
}, TIME_CHANGE_COLOR);
    
}

function onStopChangeColor() {
    clearInterval(intervalChangeColor)
    refs.start.removeAttribute(`disabled`)
}



