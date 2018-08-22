class flower {
    color: 'string';
    needsWater: boolean;
    constructor(color, needsWater){
        this.color = color;
        this.needsWater = needsWater;
    }
    printFlowers(color, needsWater){
        for(let index = 0; index < flower.length; index++){
            if(needsWater === 'true' && color === 'yellow'){
                console.log('The yellow Flower needs water.');
            }else if(needsWater === 'true' && color === 'blue'){
                console.log('The blue Flower needs water');
            }
        }
    }
    
}