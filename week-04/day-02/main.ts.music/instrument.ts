export abstract class Instrument {
    protected name: string;
    private instruments: Instrument[];

    constructor(name: string){
        this.name = name;
        this.instruments = [];
    }
    addInstrument(instrument: Instrument) {
        this.instruments.push(instrument);
    }
    play(): void {};
}