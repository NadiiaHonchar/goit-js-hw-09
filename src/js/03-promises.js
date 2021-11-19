const form = document.querySelector('.form');
  
form.addEventListener('submit', onFormSubmit);

function createPromise(position, delay) {
  return new Promise((resolve, reject) =>{
    const shouldResolve = Math.random() > 0.3;

    setTimeout(() =>{
    if (shouldResolve) {
      resolve(`✅ Fulfilled promise ${position} in ${delay}ms`)
    } 
      reject(`❌ Rejected promise ${position} in ${delay}ms`)    
  }, delay);
  });
  
};

function onFormSubmit(event) {
  event.preventDefault();
  if (!event.currentTarget.elements.delay.value || !event.currentTarget.elements.step.value|| !event.currentTarget.elements.amount.value) {
    alert('Please, enter data');
  }
  const formData = new FormData(event.currentTarget);
  let delay = Number(event.currentTarget.elements.delay.value);
  for (let i =0; i < event.currentTarget.elements.amount.value; i+=1){
    let position = i+1;
    createPromise(position, delay)
  .then((result) => {    
    console.log(result);
  })
  .catch((result) => {    
    console.log(result);
  });

    delay = delay + Number(event.currentTarget.elements.step.value);    
  }
  form.reset();
}
