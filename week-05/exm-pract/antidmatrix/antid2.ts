function getAntiDiagonalAvg(matrix: number[][]): number {
  let size: number = matrix.length; //mekkora a matrix
  let sizeIndex: number = size -1; // matrix méretének indexe
  let sum: number = 0; // számok összege
  for(let index = 0; index < matrix.length; index++) {
    sum += matrix[index][sizeIndex]; // matrixom indexedik sorának sizeindexedik elemét hozzá adja a sumhoz
    sizeIndex -1; // indexből -1 a soronként hogy csökkenjen
  } return sum / matrix.length;
}