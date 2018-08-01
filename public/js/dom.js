const field = select('#field');
const submit = select('#submit');
const mainDiv = select('.main')

submit.addEventListener('click', (e) => {
  mainDiv.textContent = '';
  e.preventDefault();
  const fieldValue = field.value;
  if(fieldValue.trim() === '') {
    alert('The text filed is empty');
    return;
  } 
  fetch('/weather', fieldValue, (res) => {
    if(res.cod === '404') {
      mainDiv.textContent = res.message;
      return;
    }
    const heading = create('h3');
    heading.setAttribute('class', 'temlLabel');
    heading.textContent = 'The tempreture : ';
    mainDiv.appendChild(heading);
    const temp = create('span');
    temp.textContent = Math.round(res.main.temp - 273.15);
    mainDiv.appendChild(temp);
    const heading2 = create('h3');
    heading2.setAttribute('class', 'temlLabel');
    heading2.textContent = 'Description';
    mainDiv.appendChild(heading2);
    const desc = create('span');
    desc.textContent = res.weather[0].description;
    mainDiv.appendChild(desc);
  })
  
});

