// -  Create a variable named `ai` with the following content: `[3, 4, 5, 6, 7]`
// -  Log the sum of the elements in `ai` to the console
let ai: number[] = [3, 4, 5, 6, 7];
let aiResult: number = 0;
for (let i = 0; i < ai.length; i++) {
    aiResult = aiResult + ai[i];
}
console.log(aiResult);