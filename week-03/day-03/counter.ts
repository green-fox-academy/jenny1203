class counter {
    property: number = 0;
    public constructor(){}
    public add(plusValue: number = 1) {
        this.property = this.property + plusValue;
    }
    public get(): string{
        return this.property.toString();
    }
    public reset(){
        this.property = 0;
    }
}
let propTry: counter = new counter();
propTry.add();
propTry.add(8);
console.log(propTry.get());
propTry.reset();
console.log(propTry.get());