# this

keyword

- automatically defined in the scope of every function
- this keyword does not have a scope
- runtime binding

## no scope

To be clear, this does not, in any way, refer to a function's lexical scope.

scope is kind of like an object with properties for each of the available identifiers.

- But the scope "object" is not accessible to JavaScript code.
- It's an inner part of the Engine's implementation.

the location in code where a function is called (not where it's declared).

## rules

- default binding 1 - this is undefined or global object
- implicit binding 2 - this is that context object.
- explicit binding 3  - this is the explicitly specified object.
- `new` binding 3   - this is the newly constructed object

constructors are just functions that happen to be called with the new operator in front of them.

- a brand new object is created (aka, constructed) out of thin air
- the newly constructed object is [[Prototype]]-linked
- the newly constructed object is set as the this binding for that function call
- unless the function returns its own alternate object, the new-invoked function call will automatically return the newly constructed object.
