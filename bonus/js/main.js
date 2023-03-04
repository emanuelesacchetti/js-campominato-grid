const bottonePlay = document.querySelector('.btn');



let square; 

bottonePlay.addEventListener('click', 
    function (){
            const difficoltaDom = document.getElementById('difficolta');
            const difficoltaValue = difficoltaDom.value;
            const gridDom = document.getElementById('grid');
            gridDom.innerHTML = '';
            console.log(difficoltaValue);

            for (let i = 1; i <= difficoltaValue; i++){
                square = newSquare();
                
                
                if(difficoltaValue == '100'){
                    square.classList.add('facile');
                } else if (difficoltaValue == '81'){
                    square.classList.add('medio');
                }else if (difficoltaValue == '49'){
                    square.classList.add('difficile');
                }
                
                square.addEventListener('click', 
                    function(){
                        this.classList.toggle('active');
                        this.innerHTML = i;
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
