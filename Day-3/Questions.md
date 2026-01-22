---

# TypeScript Practice Questions (5 Questions)

---

### 1. Create a Role Type

Create a `type` called `Role` that allows only:

* `"admin"`
* `"user"`
* `"guest"`

Create a variable `currentRole` and assign one valid role.

---

### 2. User Object Using `type`

Create a `type` called `User` with:

* id (number)
* name (string)
* role (Role)

Create one user object using this type.

---

### 3. User Object Using `interface`

Create an `interface` called `Account` with:

* username (string)
* email (string)
* role (Role)

Create one account object.

---

### 4. Function with Role Check

Write a function `isAdmin` that:

* accepts a role
* returns `true` if the role is `"admin"`
* returns `false` for other roles

---

### 5. Array of Users

Create an array called `users` that stores multiple user objects.
Each user must have:

* id
* name
* role (`"admin" | "user" | "guest"`)

---

