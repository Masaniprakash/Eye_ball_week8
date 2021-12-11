const balls = document.getElementsByClassName('ball');

console.log(typeof(balls))
document.onmousemove = (event) => {
  const x = (event.clientX * 100) / window.innerWidth + '%';
  const y = (event.clientY * 100) / window.innerHeight + '%';
  console.log(x)
  console.log(y)
  for(let i in balls){
    balls[i].style.left = x;
    balls[i].style.top = y;
    balls[i].transform = 'translate(-' + x + ',-' + y + ')';
    console.log(i)
  }
};






