export class Dashboard {
    constructor(
        public title: string,
        public icon: string,
        public route: string,
        public selected: boolean,
        public submenus: {
            title: string,
            route: string,
            icon?: string
        }[]
    ){
    }
}
