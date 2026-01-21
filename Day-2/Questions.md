
---

### **TypeScript Type Narrowing – Practice Questions**

1. **`typeof` Narrowing**
   Given a variable of type `string | number`, write a function that performs different operations based on whether the value is a string or a number.
   Explain how TypeScript narrows the type.

2. **Truthiness Narrowing**
   Consider a function parameter of type `string | null | undefined`.
   How can you safely use the string value inside the function without causing a TypeScript error?

3. **Equality Narrowing**
   Given two parameters of type `string | number`, explain how a strict equality check (`===`) can be used to narrow their types.

4. **`in` Operator Narrowing**
   You have a union type:

   ```ts
   type Admin = { name: string; privileges: string[] };
   type User = { name: string; email: string };
   ```

   How would you use the `in` operator to determine which type you are dealing with?

5. **`instanceof` Narrowing**
   How does the `instanceof` operator help with type narrowing when working with classes?
   Provide an example using a custom class.

6. **Discriminated Unions**
   What is a discriminated union?
   Given a union with a `kind` property, explain how TypeScript narrows the type inside a `switch` statement.

7. **Custom Type Guards**
   What is a user-defined type guard?
   Write a function that checks whether a value is of type `string` and explain how it narrows the type.

8. **Narrowing with `Array.isArray()`**
   Given a parameter of type `string | string[]`, how can you safely handle both cases using `Array.isArray()`?

9. **Control Flow Analysis**
   Explain how TypeScript uses control flow (like `return` or `throw`) to narrow types in the remaining code paths.

10. **Exhaustiveness Checking with `never`**
    How can the `never` type be used to ensure all possible cases of a union type are handled?
    Why is this useful in large codebases?

---
