# Projects related to DOM

## project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution Code

## Project 1

```Javascript
const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')

buttons.forEach(function(button) {
    button.addEventListener('click', function(e) {
        body.style.backgroundColor = e.target.getAttribute('data-color')      
    })
})
```