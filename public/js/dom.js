const field = select('#field');
const submit = select('#submit');
const result = select('.result');
submit.addEventListener('click', (e) => {
  result.textContent = '';
  e.preventDefault();
  const fieldValue = field.value;
  if (fieldValue.trim() === '') {
    alert('The text filed is empty');
    return;
  }
  fetch('/weather', fieldValue, (res) => {
    const div1 = create('div');
    div1.classList = 'box1';
    result.appendChild(div1);
    
    if (res.cod === '404') {
      div1.textContent = res.message;
      return;
    }


    const heading = create('h3');
    heading.textContent = 'The tempreture of '+fieldValue+' : ';
    div1.appendChild(heading);


    const temp = create('span');
    temp.textContent = Math.round(res.main.temp - 273.15) + ' C';
    div1.appendChild(temp);

    const br = create('hr');
    div1.appendChild(br);


    const heading2 = create('h3');
    heading2.textContent = 'Description : ';
    div1.appendChild(heading2);


    const desc = create('span');
    desc.textContent = res.weather[0].description;
    div1.appendChild(desc);
  });
});
