import { Category } from './category';

export class Product {
    constructor(
        public code: string,
        public name: string,
        public category: Category
    ){
    }
}
