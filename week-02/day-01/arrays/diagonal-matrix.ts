// -  Create (dynamically*) a two dimensional list
//    with the following matrix**. Use a loop!
//
//    0 0 0 1
//    0 0 1 0
//    0 1 0 0
//    1 0 0 0
//
// -  Print this two dimensional list to the console
//
// * size should depend on a variable
// ** Relax, a matrix is just like an array

let matrix: number[][] = [[],[],[],[]];
let countNumber: number = 3;
for(let h = 0; h < 4; h++){
    for(let i = 0; i < 4; i++){
        if(countNumber === i){
        matrix[h][i] = 1;
        countNumber--;
        }else{
        matrix[h][i] = 0;
        }

    }
}
    
for(let j = 0; j < 4; j++){
    console.log(matrix[j]);
}