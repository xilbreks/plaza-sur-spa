import { Category } from './category';
import { Unity } from './unity';

export class Product {
    constructor(
        public name: string,
        public price: number,
        public category: Category,
        public id: string,
        public description?: string,
        public barCode?: string,
        public urlImage?: string,
        public unity?: Unity
    ){
    }
}
