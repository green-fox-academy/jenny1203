class garden {
    protected Flower: string[];
    protected Tree: string[];

    constructor(){
        this.Flower = [];
        this.Tree = [];
    }
    addflower(Flower){
        this.Flower.push(Flower);
    }
    addTree(Tree){
        this.Tree.push(Tree);
    }
    
}