const btn = document.querySelector('#btn');
const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');
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
    heading.style.transform = '';
  });
});

btn2.addEventListener('click', () => {
  const rotateInterval = setInterval(() => {
    const x = Math.floor(
      Math.random() * (document.body.clientWidth - heading.offsetWidth),
    );

    const y = Math.floor(
      Math.random() * (document.body.clientHeight - heading.offsetHeight),
    );

    const rotate = Math.floor(Math.random() * 360);

    heading.style.transform = `translate(${x}px, ${y}px) rotate(${rotate}deg)`;
    btn2.addEventListener('click', () => {
      clearInterval(rotateInterval);
      heading.style.transform = '';
    });
  }, 2000);
});
