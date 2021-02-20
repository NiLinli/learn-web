import { uuid } from '../util/uuid';

// User - stores information about a chat participant
export class User {
  id: string;

  constructor(public name: string,
    public avatarSrc: string) {
    this.id = uuid();
  }
}


// ts 中 public 省略写法
// constructor(public name: string,
//   public avatarSrc: string) {
// this.id = uuid();
// }

// 等效于
// constructor(name: string,
//   avatarSrc: string) {
//     this.name = name;
//     this.avatarSrc = avatarSrc;
//   this.id = uuid();
// }