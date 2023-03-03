const bottonePlay = document.querySelector('.btn');
const gridDom = document.getElementById('grid');

let numeroQuadrati = 100;

for (let i = 0; i < numeroQuadrati; i++){
    const square = newSquare(); 
    square.append(generateNumbers(1, 100));

    square.addEventListener('click', 
        function(){
            this.classList.toggle('active');
        }
    )
    
    
    gridDom.append(square);
}



function newSquare() {
    const quadratino = document.createElement('div');
    quadratino.classList.add('square');
    return quadratino;
}

function generateNumbers(min, max){
    for( let i = min; i <= max; i++){
        return i;
    }
}