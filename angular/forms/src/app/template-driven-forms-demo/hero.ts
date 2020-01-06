export class Hero {

    constructor(
        public id: number,
        public nickName: string,
        public firstName: string,
        public lastName: string,
        public power: string,
        public age: number
    ) { }

}


// constructor 中使用 public 等效于 this.id = id; 的简写
