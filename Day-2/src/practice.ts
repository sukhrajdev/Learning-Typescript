function processValue(input: string | number):string {
if (typeof input === 'string') {
    console.log(`Input in UpperCase ${input.toUpperCase}`);
    console.log(`Input length ${input.length}`);
    return `Processed String: Completed`;
}
    console.log(`Input double ${input * 2}`);
    
    return `Processed Number: Completed`;
}

console.log(`Execute ProcessValue function`);
console.log(processValue("hello"));
console.log(processValue(4));

function printUpper(input: string | null | undefined): string {
    if(typeof input === 'string') {
        return input.toUpperCase();
    }
    return 'No valid string provided';
}
console.log(printUpper("test"));
console.log(printUpper(null));
console.log(printUpper(undefined));

function compareValues(value1: string | number, value2: string | number): string {
    if(typeof value1 === 'string' && typeof value2 === 'string') {
        return value1 === value2 ? 'Strings are equal' : 'Strings are not equal';
    }
    if(typeof value1 === 'number' && typeof value2 === 'number') {
        return value1 === value2 ? 'Numbers are equal' : 'Numbers are not equal';
    }
    return 'Values are of different types';
}

console.log(compareValues("test", "test"));
console.log(compareValues(5, 10));
console.log(compareValues("test", 5));

type Admin = { name: string; privileges: string[] };
type User = { name: string; email: string };

function isAdmin(user: Admin | User){
    if('privileges' in user) {
        return `Admin with privileges: ${user.privileges.join(", ")}`;
    }
    return `User with email: ${user.email}`;
}

const adminUser: Admin = { name: "Alice", privileges: ["manage-users", "edit-content"] };
const normalUser: User = { name: "Bob", email: "sukhrajtest@gmail.com" };
console.log(isAdmin(adminUser));
console.log(isAdmin(normalUser));

class User {
    name: string;
    age: number;
    role: "admin" | "user" | "guest";

    constructor(name: string, age: number, role: "admin" | "user" | "guest") {
        this.name = name;
        this.age = age;
        this.role = role;
    }
}


const user1 = new User("sukhraj", 13, "admin");

if(user1 instanceof User){
    console.log(user1.name);
    console.log(user1.age);
    console.log(user1.role);
}
