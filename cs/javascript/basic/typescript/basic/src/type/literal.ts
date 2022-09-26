// string or number literal
let a: 1 | 2;

a = 2;
// a = 3; // not okay

let b: 'abc' | 'd';
b = 'abc';
b = 'd';
// b = 'c'; // not okay



// object property 类型兼容 literal
const handleRequest = (url: string, method: 'GET' | 'POST') => {
  // ...
};

const req = {
  url: 'https://example.com',
  method: 'GET',
};

handleRequest(req.url, req.method as 'GET');

const req2 = {
  url: 'https://example.com',
  method: 'GET' as 'GET',
};

handleRequest(req2.url, req2.method);

const req3 = {
  url: 'https://example.com',
  method: 'GET',
} as const;

handleRequest(req3.url, req3.method);

export {};
