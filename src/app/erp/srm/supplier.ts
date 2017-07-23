import { Phone } from './phone';
import { Person } from './person';

export class Supplier {
    constructor(
        public name: string,
        public ruc: string,
        public email:string,
        public id: string,
        public address?: string,
        public urlImage?: string,
        public phones?: Phone[],
        public contacts?: Person[]
    ){
    }
}
