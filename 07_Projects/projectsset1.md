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
