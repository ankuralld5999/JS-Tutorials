# Projects created in tutorial learning :)

## Hitesh Project link for Pratice 
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

## Ankur Project link solution
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode-5sqk15)

# Solution code

## project 1 solution

```javascript
const buttons = document.querySelectorAll('.button');
// console.log(buttons)

const body = document.querySelector('body');

buttons.forEach((button) => {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);

    switch (e.target.id) {
      case 'grey':
        body.style.backgroundColor = e.target.id;
        break;
      case 'white':
        body.style.backgroundColor = e.target.id;
        break;
      case 'blue':
        body.style.backgroundColor = e.target.id;
        break;
      case 'yellow':
        body.style.backgroundColor = e.target.id;
        break;
    }
  });
});

```

## project 2 solution

```javascript
const form = document.querySelector('form');
console.log(form);

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const result = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    result.innerHTML = `Please enter a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    result.innerHTML = `Please enter a valid weight ${weight}`;
  } else {
    const BMI = (weight / ((height * height) / 10000)).toFixed(2);
    result.innerHTML = `<span>${BMI}</span>`;
  }
});

```


## project 3 solution

```javascript
const clock = document.getElementById('clock')
console.log(clock)



setInterval( function() {
  let date = new Date()
  // console.log(date.toLocaleTimeString()) 
  clock.innerHTML = date.toLocaleTimeString()
}, 1000)
```
