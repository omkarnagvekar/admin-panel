export class Product {
    id: number;
    public name: string;
    public description: string;
    public quantity: number;
    public type: Object;
    public price: number;
    public weight: string;
    constructor(
        type?: Object
    ) {}
}
