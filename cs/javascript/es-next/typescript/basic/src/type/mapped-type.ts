// 对 object type 进行 map, 生成一个新的 object type

type OptionsFlags<Type> = {
  [Property in keyof Type]: boolean;
};

type FeatureFlags = {
  darkMode: () => void;
  newUserProfile: () => void;
};

// type FeatureOptions = {
//   darkMode: boolean;
//   newUserProfile: boolean;
// };
type FeatureOptions = OptionsFlags<FeatureFlags>;

// change modifiers
// remove readonly
type CreateMutable<Type> = {
  -readonly [Property in keyof Type]: Type[Property];
};

type LockedAccount = {
  readonly id: string;
  name: string;
};

// type UnlockedAccount = {
//   id: string;
//   name: string;
// };
type UnlockedAccount = CreateMutable<LockedAccount>;

// remove optional
type Concrete<Type> = {
  [Property in keyof Type]-?: Type[Property];
};

type MaybeUser = {
  id: string;
  name?: string;
  age?: number;
};

// type User = {
//   id: string;
//   name: string;
//   age: number;
// };
type User = Concrete<MaybeUser>;

// key rename as
type Getters<Type> = {
  [Property in keyof Type as `get${Capitalize<string & Property>}`]: () => Type[Property];
};

interface Person {
  name: string;
  age: number;
  location: string;
}

// type LazyPerson = {
//   getName: () => string;
//   getAge: () => number;
//   getLocation: () => string;
// };
type LazyPerson = Getters<Person>;

// remove key as never
type RemoveKindField<Type> = {
  [Property in keyof Type as Exclude<Property, 'kind'>]: Type[Property];
};

interface Circle {
  kind: 'circle';
  radius: number;
}

// type kindlessCircle = {
//   radius: number;
// };
type kindlessCircle = RemoveKindField<Circle>;

// mapped type & conditional type
type ExtractPII<Type> = {
  [Property in keyof Type]: Type[Property] extends { pii: true } ? true : false;
};

type DBFields = {
  id: { format: 'incrementing' };
  name: { type: string; pii: true };
};

// type ObjectsNeedingGDPRDeletion = {
//   id: false;
//   name: true;
// };
type ObjectsNeedingGDPRDeletion = ExtractPII<DBFields>;

export {};
