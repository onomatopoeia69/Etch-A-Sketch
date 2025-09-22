const gridWrap = document.querySelector('.grid-wrapper');
const gridSize = document.querySelector('#size');
const gridSizeInput1 = document.querySelector('#size-input1');
const gridSizeInput2 = document.querySelector('#size-input2');
const resetBtn = document.querySelector('#reset-btn');
const rgbBtn = document.querySelector('#colorPicker');
const blckBtn = document.querySelector('#black-btn');
const randomClr = document.querySelector('#rndmClrBtn');

let color = '#000000';


function boxGrid(size)
{

  gridWrap.replaceChildren();
  const total = size * size;
  const boxSize = 400 / size; 

  for (let i = 0; i < total; i++) {
    const gridCreate = document.createElement('div');
    gridCreate.id = `grid-${i}`;
    gridCreate.style.width = `${boxSize}px`;
    gridCreate.style.height = `${boxSize}`;
    gridCreate.style.border = 'solid 1px black';
    gridWrap.append(gridCreate);
  }

}


boxGrid(gridSize.value);


gridSize.addEventListener('input',(event)=>{

      gridSizeInput1.textContent = gridSize.value;
      gridSizeInput2.textContent = gridSize.value;
      boxGrid(gridSize.value);

});

gridWrap.addEventListener('mouseover', (e) => {
  if (e.target.id) {
    e.target.style.backgroundColor = color;
  }
});




function clearAll()
{
      for (const children of gridWrap.children ) {

          children.style.backgroundColor = 'white';
      }
}


resetBtn.addEventListener('click',clearAll);


rgbBtn.addEventListener('input',()=>{

  randomClr.classList.remove('active');
  blckBtn.classList.remove('active'); 
  rgbBtn.classList.add('active'); 

  color = rgbBtn.value;


});


blckBtn.addEventListener('click',()=>{;

   randomClr.classList.remove('active');
    rgbBtn.classList.remove('active'); 
    blckBtn.classList.add('active'); 
  color = '#000000';

});


function getRandomRGB() {
  const r = Math.floor(Math.random() * 256); 
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}



randomClr.addEventListener('click',()=>{


    blckBtn.classList.remove('active');
    rgbBtn.classList.remove('active');  
    randomClr.classList.add('active');
  
    let randomizerClr = getRandomRGB();

    color = randomizerClr;

});



