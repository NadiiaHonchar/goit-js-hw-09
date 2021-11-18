function getRandomHexColor() {
return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}  

const getStart = document.querySelector('button[data-start]');
const getStop = document.querySelector('button[data-stop]');  

getStop.disabled = true;

getStart.addEventListener("click", () => {
timerId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor(); 
    getStart.disabled = true;
    getStop.removeAttribute('disabled');       
}, 1000);
});

getStop.addEventListener("click", () => {
clearInterval(timerId);
getStart.removeAttribute('disabled');
getStop.disabled = true;    
});