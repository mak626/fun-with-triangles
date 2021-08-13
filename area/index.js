const submit = document.getElementById('submit');
const invalid = document.getElementById('invalid-input');
const message = document.getElementById('msg');
const dropDown = document.getElementById('dropdown');
const all3Sides = document.getElementById('sides3');
const baseHeightDiv = document.getElementById('bh');
const angle2SidesDiv = document.getElementById('angle2');
const image = document.getElementById('image_traingle');

let mode = 0;

const eventHanlder = () => {
  all3Sides.style.display = 'none';
  baseHeightDiv.style.display = 'none';
  angle2SidesDiv.style.display = 'none';

  if (dropDown.value === 'All 3 sides') {
    all3Sides.style.display = '';
    image.src = '../assets/triangle_3sides.svg';
    mode = 0;
  }
  if (dropDown.value === 'Base And Height') {
    baseHeightDiv.style.display = '';
    image.src = '../assets/triangle_bh.svg';
    mode = 1;
  }
  if (dropDown.value === '2 sides and angle') {
    angle2SidesDiv.style.display = '';
    image.src = '../assets/triangle_angles_2a.svg';
    mode = 2;
  }
};

dropDown.addEventListener('change', eventHanlder);

submit.addEventListener('click', () => {
  invalid.style.display = 'none';
  invalid.style.backgroundColor = '#9E1D1D';

  if (mode === 0) {
    const a = parseFloat(document.getElementById('a').value);
    const b = parseFloat(document.getElementById('b').value);
    const c = parseFloat(document.getElementById('c').value);

    if (isNaN(a) || isNaN(b) || isNaN(c) || !(a + b > c && b + c > a && a + b > c)) {
      invalid.style.display = 'flex';
      message.innerText = 'Invalid Input';
      return;
    }

    invalid.style.display = 'flex';
    invalid.style.backgroundColor = '#0F9D58';

    const s = (a + b + c) / 2;
    const area = Math.sqrt(s * (s - a) * (s - b) * (s - c)).toFixed(2);
    message.innerText = `Area: ${area}`;
  }

  if (mode === 1) {
    const base = parseFloat(document.getElementById('base').value);
    const height = parseFloat(document.getElementById('height').value);

    if (isNaN(base) || isNaN(height)) {
      invalid.style.display = 'flex';
      message.innerText = 'Invalid Input';
      return;
    }

    invalid.style.display = 'flex';
    invalid.style.backgroundColor = '#0F9D58';
    const area = ((base * height) / 2).toFixed(2);
    message.innerText = `Area: ${area}`;
  }

  if (mode === 2) {
    const a = parseFloat(document.getElementById('_a').value);
    const b = parseFloat(document.getElementById('_b').value);
    const angle = parseFloat(document.getElementById('angle').value);

    if (isNaN(a) || isNaN(b)) {
      invalid.style.display = 'flex';
      message.innerText = 'Invalid Input';
      return;
    }

    invalid.style.display = 'flex';
    invalid.style.backgroundColor = '#0F9D58';
    const area = ((a * b * Math.sin((angle * Math.PI) / 180)) / 2).toFixed(2);
    message.innerText = `Area: ${area}`;
  }
});

eventHanlder();
