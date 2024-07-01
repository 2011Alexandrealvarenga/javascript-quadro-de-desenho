// valor inicial
let currentColor = 'black';
let canDraw = false;
let mouseX = 0;
let mouseY = 0;

let screen = document.querySelector('#tela');
let ctx = screen.getContext('2d');

// Events

// seleciona a cor ao clicar no quadro
document.querySelectorAll('.colorArea .color').forEach(item => {
  item.addEventListener('click', colorClickEvent);
});
screen.addEventListener('mousedown', mouseDownEvent);
screen.addEventListener('mousemove', mouseMoveEvent);
screen.addEventListener('mouseup', mouseUpEvent);


// functions
function colorClickEvent(e){
  let color =e.target.getAttribute('data-color');
  console.log('cor selecionada', color);

  // remove a classe ativa
  document.querySelector('.color.active').classList.remove('active');

  // adiciona a classe ativa
  e.target.classList.add('active');

}

function mouseDownEvent(){
  canDraw = true;
  mouseX = e.pageX - screen.offsetLeft;
  mouseY = e.pageY - screen.offsetTop;

}
function mouseMoveEvent(e){
  if(canDraw){
    canDraw(e.pageX, e.pageY);

  }
  // pagex e pagey identificam onde esta o mouse
}
function mouseUpEvent(){
  canDraw = false;
  
}

function draw(x, y){
  let pointX = x - screen.offsetLeft;
  let pointY = y - screen.offsetTop;

  ctx.beginPath();
  // propriedade da largura da linha, propriedade de linha, da linha
  ctx.lineWidth = 5; 
  ctx.lineJoin = 'round' ;

  mouseX = pointX;
  mouseY = pointY;

}