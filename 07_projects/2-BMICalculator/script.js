const form = document.querySelector('form')

form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('#result')

    if(height === '' || height < 0 || isNaN(height)) {
        result.innerHTML = 'Please give a valid height';
    } else if(weight === '' || weight < 0 || isNaN(weight)) {
        result.innerHTML = 'Please give a valid weight';
    } else {
        const bmi = (weight / ((height * height)/10000)).toFixed(2)

        let rangeTxt;
        if (bmi > 18.6 && bmi < 24.9) {
            rangeTxt = 'Normal Range.'
        } else {
            rangeTxt = bmi < 18.6 ? 'Under weight' : 'Overwieght'
        }

        // show the result
        result.innerHTML = `<span>${bmi}</span><br></span>${rangeTxt}</span>`
    }
})