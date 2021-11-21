function getRandomHexColor() {
return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}  

const getStart = document.querySelector('button[data-start]');
const getStop = document.querySelector('button[data-stop]');  

getStop.disabled = true;

getStart.addEventListener("click", () => {
    getStart.disabled = true;
    getStop.removeAttribute('disabled');       
timerId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();     
}, 1000);
});

getStop.addEventListener("click", () => {
clearInterval(timerId);
getStart.removeAttribute('disabled');
getStop.disabled = true;    
});