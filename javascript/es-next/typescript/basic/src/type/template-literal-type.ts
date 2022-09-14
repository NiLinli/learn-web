// Template Literal
// type 运算也可以使用 ``
type World = 'world';
type Greeting = `hello ${World}`;

type EmailLocaleIDs = 'welcome_email' | 'email_heading';
type FooterLocaleIDs = 'footer_title' | 'footer_sendoff';

// type AllLocaleIDs = 'welcome_email_id' | 'email_heading_id' | 'footer_title_id' | 'footer_sendoff_id';
type AllLocaleIDs = `${EmailLocaleIDs | FooterLocaleIDs}_id`;

// string union in types
type PropEventSource<Type> = {
  on(eventName: `${string & keyof Type}Changed`, callback: (newValue: any) => void): void;
  on2<Key extends string & keyof Type>(eventName: `${Key}Changed`, callback: (newValue: Type[Key]) => void): void;
  
};
declare function makeWatchedObject<Type>(obj: Type): Type & PropEventSource<Type>;

const person = makeWatchedObject({
  firstName: 'Linli',
  lastName: 'Ni',
  age: 28,
});

// newValue: any
person.on('firstNameChanged', (newValue) => {
  console.log(`firstName was changed to ${newValue}!`);
});

// newValue: string
person.on2('firstNameChanged', (newValue) => {
  console.log(`firstName was changed to ${newValue}!`);
});

// type '"firstNameChanged" | "lastNameChanged" | "ageChanged"'
// person.on('firNameChanged', (newValue) => {
//   console.log(`firstName was changed to ${newValue}!`);
// });

// 内部的 String Manipulation Types
// type ShoutGreeting = "HELLO, WORLD"
type ShoutGreeting = Uppercase<Greeting>;

type ASCIICacheKey<Str extends string> = `ID-${Uppercase<Str>}`;
type MainID = ASCIICacheKey<'my_app'>;

// Lowercase
// Capitalize
// Uncapitalize

export {};
