export class Catalog {
    constructor(
        public id: string,
        public barCode: string,
        public name: string,
        public description: string,
        public price: number,
        public url_image: string
    ){
    }
}
