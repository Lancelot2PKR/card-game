import {CardType} from "./card-type";

export class Card {

    public type: CardType;
    public value: number;

    constructor(
        type: CardType,
        value: number
    ) {
        this.type = type;
        this.value = value;
    }
}
