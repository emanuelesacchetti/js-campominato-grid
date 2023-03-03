const bottonePlay = document.querySelector('.btn');
const gridDom = document.getElementById('grid');

for (let i = 0; i < 100; i++){
    const square = nuovoQuadratino(); 


    gridDom.append(square);

}







function nuovoQuadratino() {
    const quadratino = document.createElement('div');
    quadratino.classList.add('square');
    return quadratino;
}



function generateNumbers(squareNumbers){
    for( let i = 0; i < squareNumbers; i++){
        return i  
    }
}