class sharpie {
    color: string;
    width: number;
    inkAmount: number = 100;
    public constructor(color: string, width: number){
        this.color = color;
        this.width = width;
    }
    public use(): void{
        this.inkAmount--;
    }
}
let ink: sharpie = new sharpie('red', 40);
ink.use(); 
console.log(ink.inkAmount);