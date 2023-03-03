const bottonePlay = document.querySelector('.btn');

const containerDom = document.querySelector('.container');

let numeroQuadrati = 100;

bottonePlay.addEventListener('click', 
    function (){
            
            const gridDom = document.getElementById('grid');
            gridDom.innerHTML = (gridDom);
            
            for (let i = 0; i < numeroQuadrati; i++){
                const square = newSquare(); 
                
            
                square.addEventListener('click', 
                    function(){
                        this.classList.toggle('active');
                        square.append(i);
                        console.log(i);
                    }
                )
                gridDom.append(square);
            }
        }
)

function newSquare() {
    const quadratino = document.createElement('div');
    quadratino.classList.add('square');
    return quadratino;
}
