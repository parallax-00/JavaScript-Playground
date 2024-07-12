const clock = document.querySelector('#clock')
//! setInterval() method requires 2 arguements, first is the 'function(){}' or '()=>{}' and 2nd arguement is the 
//! time-interval(in miliSeconds) in which you want to rerun your function 

setInterval(() => {
    const date = new Date() //! NOTE: everytime a new date has to be created or if new date is created outside the 
 //console.log(date.toLocaleTimeString())//! setInterval(), it will not change but update and printed again and again
    clock.innerHTML=date.toLocaleTimeString()//! in the innerHTML of clock
}, 1000);