import './styles.scss';
import nintendoSwitchControllerJpeg from './assets/nintendo-switch-controller.jpeg';
import nintendoSwitchControllerPng from './assets/nintendo-switch-controller.png';
import { add } from './utils/number-utils.js';

import Data from './data/data.xml';
import Notes from './data/data.csv';


console.log(add(1,3));

console.log(Data);
console.log(Notes);

const imgElementJpeg = document.createElement('img');
const imgElementPng = document.createElement('img');

imgElementJpeg.setAttribute('src', nintendoSwitchControllerJpeg);
imgElementPng.setAttribute('src', nintendoSwitchControllerPng);

document.body.appendChild(imgElementJpeg);
document.body.appendChild(imgElementPng);

function main() {
  return Promise.resolve();
}

main().then(data => {
 document.querySelector('.promise').textContent = 'Promise Works'
});


function* generator() {
  yield 1;
}

const gen = generator();
if (gen.next().value === 1) {
  document.querySelector('.generator').textContent = 'Generator Works'
}

const arr1 = [1,2,3];

const arr2 = [...arr1, 4,5,6];
console.log(arr2);

export default () => {
  return 'app'
}