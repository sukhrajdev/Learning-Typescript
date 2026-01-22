---

# TypeScript Type Narrowing – Practice Questions (Easy Language)

---

### 1. `typeof` Type Narrowing

You have a value that can be a **string or a number**.
Write a function that:

* checks the type using `typeof`
* if it is a string, do a string operation
* if it is a number, do a number operation

Explain how TypeScript understands the correct type.

---

### 2. Truthiness Type Narrowing

A function receives a value that can be:

* string
* null
* undefined

How can you safely use the string **only when it exists**, without getting a TypeScript error?

---

### 3. Equality Type Narrowing

You have two values that can be **string or number**.
Explain how using `===` helps TypeScript understand their types inside an `if` block.

---

### 4. `in` Operator Type Narrowing

You have two object types:

```ts
type Admin = { name: string; privileges: string[] };
type User = { name: string; email: string };
```

How can you use the `in` keyword to check whether the object is an `Admin` or a `User`?

---

### 5. `instanceof` Type Narrowing

Explain how `instanceof` is used when working with **classes**.
Create a small example using your own class.

---

### 6. Discriminated Unions

What is a discriminated union in simple words?
Given objects that have a common property like `kind`, explain how `switch` helps TypeScript know the correct type.

---

### 7. Custom Type Guards

What is a custom (user-defined) type guard?
Write a function that checks whether a value is a **string** and explain how it helps TypeScript narrow the type.

---

### 8. Type Narrowing with `Array.isArray()`

A function receives a value that can be:

* a single string
* or an array of strings

How can you safely handle both cases using `Array.isArray()`?

---

### 9. Control Flow Type Narrowing

Explain how TypeScript narrows types when you use:

* `return`
* `throw`
* or `if` conditions

Why does the code after these statements become safer?

---

### 10. `never` Type and Exhaustive Checking

What is the `never` type?
Explain how it helps make sure **all cases of a union type are handled**, and why this is useful in big projects.

---

