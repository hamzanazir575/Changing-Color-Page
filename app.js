const btn = document.querySelector('#btn');
const btn1 = document.querySelector('#btn1');
const heading = document.querySelector('#colorText');

const changeColor = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  return `RGB(${r} ${g} ${b})`;
};

btn.addEventListener('click', () => {
  const interval = setInterval(() => {
    const color = (document.body.style.backgroundColor = changeColor());
    heading.style.textAlign = 'center';
    heading.innerText = color;
  }, 1000);

  btn1.addEventListener('click', () => {
    clearInterval(interval);
    document.body.style.backgroundColor = '';
    heading.innerText = `Click button to change color`;
  });
});
