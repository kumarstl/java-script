# Projescts related to DOM...

<!-- ## Project Link..
[click Here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html) -->

# Solution Code..

## Project 1


```Java Script

const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target)
    if(e.target.id==='lightpink'){
        body.style.background=e.target.id;
    }
    if(e.target.id==='lightcoral'){
        body.style.background=e.target.id;
    }
    if(e.target.id==='lightseagreen'){
        body.style.background=e.target.id;
    }
    if(e.target.id==='lightskyblue'){
        body.style.background=e.target.id;
    }
  })
});



```
## Project 2
```Java Script
const form = document.querySelector('form');
// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height${height}`;
}else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight${weight}`;
}else{
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show the result
    results.innerHTML = `<span>${bmi}</span>`;
}
});


```

##Project 3- Solution
```Java Script
const clock =document.getElementById('clock')

// const clock =document.querySelectorById('#clock')

setInterval(function(){
    let date = new Date();
// console.log(date.toLocaleTimeString());
clock.innerHTML=date.toLocaleTimeString();

},1000)

```

