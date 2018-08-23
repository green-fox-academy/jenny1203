'use strict'

export class sumClass{

    sum(list: number[]): any{
        let listSum: number = 0;
        for(let i = 0; i < list.length; i++){
            listSum = listSum + list[i];
        }
        return listSum;

    }
}
