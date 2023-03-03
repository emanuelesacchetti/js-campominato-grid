const bottonePlay = document.querySelector('.btn');

const difficoltaDom = document.getElementById('difficolta');
const difficoltaValue = difficoltaDom.value;
let numeroQuadrati;
console.log(difficoltaValue);





bottonePlay.addEventListener('click', 
    function (){
            
        
            const gridDom = document.getElementById('grid');
            gridDom.innerHTML = '';
            
            for (let i = 0; i < numeroQuadrati; i++){
                const square = newSquare(); 
                /*if (difficoltaValue == 'facile'){
                    numeroQuadrati = 100;
                    square.classList.add('facile');
                }else if (difficoltaValue == 'medio'){
                    numeroQuadrati = 90;
                    square.classList.add('medio');
                }else {
                    numeroQuadrati = 80;
                    square.classList.add('difficile');
                }*/
            
                square.addEventListener('click', 
                    function(){
                        this.classList.toggle('active');
                        square.append(i);
                        console.log(i);
                    }
                )
                gridDom.append(square);
            }
        
)


function newSquare() {
    const quadratino = document.createElement('div');
    quadratino.classList.add('square');
    return quadratino;
}
