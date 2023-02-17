
const conteiner = document.querySelector('.conteiner')
const btn = document.querySelector('.btn');
const inputNumber = document.querySelector('.input_number')

let test = "";
let numero = "";
btn.addEventListener('click', (ev) => {
    numero = Number(inputNumber.value);
     
    let numberSquare = numero;
    console.log(numberSquare)   

    const render = (squareEl) => {
        
        for ( let i = 1; i <= numberSquare; i+= 1) {
            test += `<div class="square_view">${i}</div>`
            
        }
        squareEl.innerHTML = test;
        
    }
 
  const init = (squarePlus) => {
    render(squarePlus);
  }
  
  init(conteiner);
    
  const changeNumber =  () => {
    let squareView = document.querySelectorAll('.square_view');
    for (let num = 0; num < squareView.length; num++) {

        squareView[num].addEventListener('click', (ev) => {
            squareView[num].classList.add('show')
               
        })
    
    }
    console.log(squareView)
    }
changeNumber ();
    
})




