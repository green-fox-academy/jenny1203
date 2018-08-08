const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// draw a red horizontal line to the canvas' middle.
// draw a green vertical line to the canvas' middle.

canvas.width = canvas.scrollWidth;
canvas.height = canvas.scrollHeight;


ctx.beginPath();
ctx.moveTo(300, canvas.height);
ctx.lineTo(300, 0);
ctx.stroke();

ctx.strokeStyle = 'red';

ctx.beginPath();
ctx.moveTo(canvas.width, 200);
ctx.lineTo(0, 200); 
ctx.stroke();

ctx.strokeStyle = 'green';
