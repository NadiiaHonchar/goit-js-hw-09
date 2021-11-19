import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

 let curentDataUNIX = Date.now();
 let ms =0; 

const refs = {
    btn : document.querySelector('button'),
    writeDays : document.querySelector('span[data-days]'),
    writeHours : document.querySelector('span[data-hours]'),
    writeMinutes : document.querySelector('span[data-minutes]'),
    writeSeconds : document.querySelector('span[data-seconds]'),
}

refs.btn.disabled = true;

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(), 
    minuteIncrement: 1, 
     
    onClose(selectedDates)
    {
        // console.log(selectedDates[0]);
        if (selectedDates[0]>curentDataUNIX)
        {refs.btn.removeAttribute('disabled');                 
        refs.btn.addEventListener("click", () => {
            const timerId = setInterval(() => {
                curentDataUNIX=Date.now();                  
                ms = selectedDates[0]- curentDataUNIX;                
                convertMs(ms);
            }, 1000);
            });        
    }
    else {window.alert("Please choose a date in the future");}},        
};

flatpickr("#datetime-picker", options);

function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = addLeadingZero(Math.floor(ms / day));
    // Remaining hours
    const hours = addLeadingZero(Math.floor((ms % day) / hour));
    // Remaining minutes
    const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
    // Remaining seconds
    const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));    

    refs.writeDays.textContent = days;
    refs.writeHours.textContent = hours;
    refs.writeMinutes.textContent = minutes;
    refs.writeSeconds.textContent = seconds;
  
    return { days, hours, minutes, seconds };
  }

  function addLeadingZero(value)
  {return String (value).padStart(2,'0')}