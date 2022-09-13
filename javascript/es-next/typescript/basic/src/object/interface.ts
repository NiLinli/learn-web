// 继承 extends
interface BasicAddress {
  name?: string;
  street: string;
  city: string;
  country: string;
  postalCode: string;
}

interface AddressWithUnit extends BasicAddress {
  unit: string;
}

// 相交 intersection
interface Colorful {
  color: string;
}
interface Circle {
  radius: number;
}

type ColorfulCircle = Colorful & Circle;

// 声明合并
interface User {
  name: string;
}

interface User {
  age: number;
}

const user: User = { name: '', age: 0 };

export {};
