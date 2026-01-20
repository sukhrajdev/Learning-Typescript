
---

# TypeScript Practice Questions

## Question 1

Create a function named `isEven` that takes a number as input and returns `true` if the number is even, otherwise returns `false`.

```ts
isEven(4)  // true
isEven(7)  // false
```

---

## Question 2

Fix the function below so that it uses correct TypeScript primitive types instead of wrapper types.

```ts
function isLoggedIn(status: Boolean): Boolean {
    return status;
}
```

---

## Question 3

Rewrite the following function in a cleaner way using a single return statement and without using `if` or `else`.

```ts
function canVote(age: number): boolean {
    if (age >= 18) {
        return true;
    } else {
        return false;
    }
}
```

---

## Question 4

Write a function named `checkUsername` that takes a string as input and returns `true` if the string length is at least 5 characters; otherwise, return `false`.

```ts
checkUsername("admin") // true
checkUsername("abc")   // false
```

---

## Question 5 — Union Types (Basic)

Create a function named `printId` that accepts a parameter which can be either a `number` or a `string`.
The function should return the value as a string.

```ts
printId(101)     // "101"
printId("A12")   // "A12"
```

---

## Question 6 — Union Types with Type Narrowing

Write a function named `getLength` that accepts a parameter of type `string | number`.

* If the value is a string, return its length
* If the value is a number, return the number of digits

```ts
getLength("hello") // 5
getLength(12345)   // 5
```

---

## Question 7 — Union Types in Function Parameters

Create a function named `formatValue` that accepts:

* A value of type `string | boolean`
* Returns a string

Behavior:

* If the value is a string, return it in uppercase
* If the value is a boolean, return `"YES"` for `true` and `"NO"` for `false`

```ts
formatValue("hello") // "HELLO"
formatValue(true)    // "YES"
formatValue(false)   // "NO"
```

---

## Question 8 — Union Types with Return Values

Write a function named `parseInput` that accepts a `string`.

* If the string contains only numbers, return a `number`
* Otherwise, return the original `string`

```ts
parseInput("123")   // 123
parseInput("abc")   // "abc"
```

---

