import './style.scss'
import printMe from './print.js';
import Fetcher from './fetcher'


window.addEventListener('load', () => {
console.log('Welcome to my back end tester playground!')

function component() {
  printMe()

  const root = document.createElement('div')
  root.classList.add("root")
  document.body.appendChild(root)


  const fetcher = new Fetcher("http:\/\/localhost:3000\/")
  const fetchDiv = document.createElement('div')
  const btn = document.createElement('button');
  fetchDiv.classList.add("fetch-div")
  fetchDiv.innerHTML = 'Webpack Walkthrough: working with regular vanilla JavaScript'
  btn.innerHTML = 'FETCH';
  fetchDiv.appendChild(btn);

  btn.addEventListener('click', () => {
    fetcher.getRequest('menu_items/1')
    .then(r => r.json())
    .then(response => {
      if (response) {
        Object.keys(response).map(key => {
          console.log(`${key}: ${response[key]}`)
        })
      }
    })
  })

  root.appendChild(fetchDiv)
  return root
}

  document.body.appendChild(component());
})
