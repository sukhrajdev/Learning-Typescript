// InterFace in Typescript
type Role = "admin" | "user" | "guest";
let currentRole: Role = "admin";
console.log(currentRole);

currentRole = "user"; // Valid
console.log(currentRole);

type User = {
    id: number,
    name: string,
    role: Role
}

const user1: User = {
    id: 1,
    name: "Alice",
    role: "admin"
}
console.log(user1);

user1.role = "guest"; // Valid
console.log(user1);

interface Account {
    username: string;
    email: string,
    role: Role
}
const account1: Account = {
    username: "alice123",
    email: "sukhrajtest@example.com",
    role: "admin"
}
console.log(account1);
account1.role = "user"; // Valid
console.log(account1);

function isAdmin (role: Role):boolean {
    return role === "admin";
}
console.log(isAdmin("admin")); // true
console.log(isAdmin("user"));  // false

let users:User[] = [
    {id: 1, name: "Alice", role: "admin"},
    {id: 2, name: "Bob", role: "user"},
    {id: 3, name: "Charlie", role: "guest"}
];
console.log(users);
