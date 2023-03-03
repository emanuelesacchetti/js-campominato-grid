const bottonePlay = document.querySelector('.btn');
const containerDom = document.querySelector('.container');

let numeroQuadrati = 100;

bottonePlay.addEventListener('click', 
    function (){
        
        
            const gridDom = document.getElementById('grid');

            for (let i = 0; i < numeroQuadrati; i++){
                const square = newSquare(); 
                //square.append(i);
            
                square.addEventListener('click', 
                    function(){
                        this.classList.toggle('active');
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
