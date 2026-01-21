type user = {
    id: "number",
    name: "string",
    age: "number",
    profession: "string"
}

function getUserDteails(userData: object ): object is user {
    return (
        typeof userData === "object" &&
        userData !== null &&
        typeof userData.id === "number" &&
        typeof userData.name === "string" &&
        typeof userData.age === "number" &&
        typeof userData.profession === "string"
    )
}

function createUser(data: object): string {
    if (getUserDteails(data)) {
        return `User Created: ${data.name}, Age: ${data.age}, Profession: ${data.profession}`;
    } else {
        return "Invalid user data";
    }
}

// Example usage:
const newUser = {
    id: 1,
    name: "Alice",
    age: 30,
    profession: "Engineer"
};

console.log(createUser(newUser));