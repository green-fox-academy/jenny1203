import { readFileSync } from "fs";

// Create a method that decrypts duplicated-chars.txt

function duplicatedDecrypt(filename: string){
  let file: string = '';
  let result: string = '';
  file = readFileSync(filename, 'utf-8');
  for(let index = 0; index < file.length; index++){
    if(index % 2 === 0){
      result += file[index];
    }
  } return result;
}

console.log(duplicatedDecrypt('doubled.txt'));