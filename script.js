let currentColor = 'black';

// seleciona a cor ao clicar no quadro
document.querySelectorAll('.colorArea .color').forEach(item => {
  item.addEventListener('click', colorClickEvent);
});

function colorClickEvent(e){
  let color =e.target.getAttribute('data-color');
  console.log('cor selecionada', color);
}