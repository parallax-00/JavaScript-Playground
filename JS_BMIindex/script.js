const form = document.querySelector('form')
 
form.addEventListener('submit', (x) => {
    x.preventDefault();
    const height = parseInt(document.getElementById('height').value);
    const weight = parseInt(document.getElementById('weight').value);
    
    if (height === '' || isNaN(height) || height == 0) {
        alert("Please enter valid height")
    }
    if (weight === '' || isNaN(weight) || weight == 0) {
        alert("Please enter valid weight")
    } else {
        const BMI_index = (weight*10000 / (height * height)).toFixed(2);
        document.querySelector('#results').innerHTML = "Result:" + BMI_index;
    
        if (BMI_index < 18.6) {
            document.querySelector('#content').innerHTML = "You are Under Weight as per the standard BMI values";
        } else if (BMI_index > 24.9) {
            document.querySelector('#content').innerHTML = "You are Over Weight as per the standard BMI values";
        } else {
            document.querySelector('#content').innerHTML = "Your BMI is in Normal Range as per the standard BMI values";
        }
    }
})
