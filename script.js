const body = document.querySelector('body')

const crearNeive = () => {
    let copo = document.createElement('i')
    let x = innerWidth * Math.random()
    let size = (Math.random() * 8) + 2
    let z = Math.round(Math.random()) * 100
    let delay = Math.random() * 5
    let anima = (Math.random() * 10) + 5

    copo.style.left = x + 'px'
    copo.style.width = size + 'px'
    copo.style.height = size + 'px'
    copo.style.zIndex = z
    copo.style.animationDelay = delay + 's'
    copo.style.animationDuration = anima + 's'

    body.appendChild(copo)

    setTimeout(() => {
        copo.remove()
    }, anima * 1000)
}

setInterval(crearNeive, 50)



document.addEventListener('DOMContentLoaded', function () {
  const body = document.body;
  let isCircle = true;

  document.addEventListener('mousemove', function (e) {
    const x = e.clientX;
    const y = e.clientY;

    // Crear una nueva forma en el rastro
    const formaRastro = document.createElement('div');
    formaRastro.className = isCircle ? 'circulo' : 'cuadrado';
    formaRastro.style.left = x + 'px';
    formaRastro.style.top = y + 'px';

    // Alternar entre círculo y cuadrado
    isCircle = !isCircle;

    // Agregar la forma al cuerpo del documento
    body.appendChild(formaRastro);
  });
});
